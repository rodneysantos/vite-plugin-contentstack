import ContentstackPlugin from '../index';
import code from './code';

test('should prepend contentstack', () => {
  const csImport = 'import { ContentstackUIExtension } from "@contentstack";';
  const src = ContentstackPlugin({}).transform(csImport, '/app.tsx');

  expect(src.code).toEqual(code);
});

test('should not prepend anything', () => {
  const src = ContentstackPlugin({}).transform('', '/app.tsx');

  expect('').toEqual(src.code);
});
