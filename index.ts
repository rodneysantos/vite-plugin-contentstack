import stringify from 'stringify-object';

const stringifyOptions = { indent: '  ' };

// we're creating a mock of Contentstack.
// This will allow us to initialize the SDK
// without requiring the actual SDK.
function shim(config: any): string {
  const cs = class ContentstackUIExtension {
    static init() {
      return Promise.resolve({ ...config.extension });
    }
  };

  return stringify(cs, stringifyOptions);
}

export default function contentstack(csConfig: any) {
  // creating a string that will be evaluated later
  const stringCSConfig = `const config = ${stringify(csConfig, stringifyOptions)}`;

  return {
    name: 'contentstack',
    enforce: 'pre',
    transform(src: string, id: string) {
      const app = /\/app\.tsx/;
      const csImport = /import.*@contentstack.*;/;

      if (app.test(id)) {
        // we're replacing the import statement
        // with mock version of the SDK
        const code = src.replace(csImport, shim(stringCSConfig));

        return {
          code: [stringCSConfig, code].join('\n'),
        };
      }

      return { code: src };
    },
  };
}
