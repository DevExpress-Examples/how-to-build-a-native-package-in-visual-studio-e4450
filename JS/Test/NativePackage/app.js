window.NativePackage = window.NativePackage || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: NativePackage,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: NativePackage.config.defaultLayout,
        navigation: NativePackage.config.navigation
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });
});
