import { TransformResult } from 'vite';
import contentstack from '../index';
import code from './code';
import config from './config';

describe('vite-plugin-contentstack', () => {
  it('should prepend contentstack', () => {
    const src = transform(true);
    expect(src.code).toEqual(code);
  });

  it('should not prepend anything', () => {
    const src = transform(false);
    expect('').toEqual(src.code);
  });

  function transform(hasCSImport: boolean) {
    const plugin = contentstack(config);

    if (hasCSImport) {
      const csImport = 'import { ContentstackUIExtension } from "@contentstack";';
      return plugin.transform(csImport, '/app.tsx') as TransformResult
    }

    return plugin.transform('', '/app.tsx') as TransformResult;
  }
});
