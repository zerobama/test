function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab 1",
        id: "__alloyId1"
    });
    $.__views.open_button = Ti.UI.createButton({
        title: "Open Child Window",
        id: "open_button"
    });
    $.__views.__alloyId1.add($.__views.open_button);
    $.__views.tab_one = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        title: "Tab 1",
        id: "tab_one"
    });
    __alloyId0.push($.__views.tab_one);
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Tab 2",
        id: "__alloyId3"
    });
    $.__views.__alloyId2 = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "Tab 2",
        id: "__alloyId2"
    });
    __alloyId0.push($.__views.__alloyId2);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.child_window = Ti.UI.createWindow({
        id: "child_window",
        title: "Child Window"
    });
    $.__views.child_window && $.addTopLevelView($.__views.child_window);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Child Window Label",
        top: "20",
        id: "__alloyId4"
    });
    $.__views.child_window.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.open_button.addEventListener("click", function() {
        console.debug("in button click event handler");
        $.tab_one.open($.child_window);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;