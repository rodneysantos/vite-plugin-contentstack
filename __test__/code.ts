export default `const sdk = {
  extension: {
    field: {
      data: {},
      getData: function () {
                return this.data;
            },
      setData: function (data) {
                this.data = data;
                return Promise.resolve(data);
            }
    }
  }
}
class ContentstackUIExtension {
        static init() {
            return Promise.resolve({ ...sdk.extension });
        }
    }`
