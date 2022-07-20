import stringify from 'stringify-object';
import { Plugin } from 'vite';

export interface SDK {
  extension: any;
}

const stringifyOptions = { indent: '  ' };

// we're creating a mock of Contentstack.
// This will allow us to initialize the SDK
// without requiring the actual SDK.
function shim(sdk: SDK): string {
  const klass = class ContentstackUIExtension {
    static init() {
      return Promise.resolve({ ...sdk.extension });
    }
  };

  return stringify(klass, stringifyOptions);
}

export default function contentstack(sdk: SDK): Plugin {
  return {
    name: 'contentstack',
    enforce: 'pre',
    transform(this, code, id) {
      const app = /\/app\.tsx/;
      const csImport = /import.*@contentstack.*;/;

      if (app.test(id) && csImport.test(code)) {
        // creating a string that will be evaluated later
        const stringCSConfig = `const sdk = ${stringify(sdk, stringifyOptions)}`;
        // we're replacing the import statement
        // with mock version of the SDK
        const src = code.replace(csImport, shim(sdk));

        return {
          code: [stringCSConfig, src].join('\n'),
        };
      }

      return { code };
    },
  };
}
