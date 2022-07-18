# vite-plugin-contentstack

Create Contentstack custom fields without the SDK.

## Install

```bash
npm i -D vite-plugin-contentstack
```

## Usage
Create a mock of Contentstack SDK.

```js
// rootDir/contentstack.config.js
export default {
  extension: {
    field: {
      // custom field data.
      data: {},

      // return custom field data.
      getData: function() {
        return this.data;
      },

      // set custom field data.
      setData: function(data) {
        this.data = data;
        return Promise.resolve(data);
      },
    }
  }
}
```

Import the `contentstack.config.js` and pass it to `contentstack` plugin.

```js
// rootDir/vite.config.js
import preact from '@preact/preset-vite';
import contentstack from 'vite-plugin-contentstack';
import { defineConfig } from 'vite';
import csConfig from './contentstack.config.js';

export default defineConfig({
  build: {
    rollupOptions: {},
  },
  plugins: [contentstack(csConfig), preact()]
})

```

## License
MIT License © 2022 Rodney Santos
