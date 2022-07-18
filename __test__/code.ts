export default `const config = {}
class ContentstackUIExtension {
        static init() {
            return Promise.resolve({ ...config.extension });
        }
    }`
