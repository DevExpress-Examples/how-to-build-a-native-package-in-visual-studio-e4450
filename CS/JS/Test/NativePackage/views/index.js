NativePackage.Index = function (params) {
    var db = {
        sampleData: new DevExpress.data.ODataContext({
            url: "http://services.odata.org/Northwind/Northwind.svc",
            errorHandler: function (error) {
                alert(error.message);
            },
            entities: {
                Categories: {
                    key: 'CategoryID'
                }
            }
        })
    };
    var viewModel = {
        dataSourceCategories: db.sampleData.Categories
    };
    return viewModel;
};