export default {
  extension: {
    field: {
      // custom field data.
      data: {},

      // return custom field data.
      getData: function () {
        return this.data;
      },

      // set custom field data.
      setData: function (data: any) {
        this.data = data;
        return Promise.resolve(data);
      },
    }
  }
}
