var MyPlugin = require("nativescript-my-plugin").MyPlugin;
var myPlugin = new MyPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(myPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(myPlugin.greet()).toEqual("Hello, NS");
    });
});