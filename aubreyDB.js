//localStorage persistance layer

var aubreyDB = {
    DBname:"aubrey-plugins",

    _init:function(){
        localStorage.setItem(this.DBname,"[]");
    },

    _getItems:function(){
        if(!localStorage.getItem(this.DBname)){
            return null;
        }
        return JSON.parse(localStorage.getItem(this.DBname));
    },

    _setItems:function(items){
        if(typeof items != "object") {
            throw "attempted attempt prevented";
        }
        localStorage.setItem(this.DBname,JSON.stringify(items));
    },

    _evalPlugin:function(plugin){
        console.log("Loaded script " + plugin.body);
    },

    //------------------------public functions------------------------//
    boot:function(){
        if(!this._getItems()){
            this._init();
            console.log("Init complete");
        }
        var items = this._getItems();
        console.log("Loading saved plugins");
        for (var i = 0; i < items.length; i++){
            this._evalPlugin(items[i]);
        }
        console.log("Boot complete!")
    },

    loadPlugin:function(plugin){
        var items = this._getItems();
        //Checks for duplicate plugins
        for (var i = 0; i < items.length;i++) {
            if(plugin.name == items[i].name){
                console.log("Found duplicate plugin: " + plugin.name);
                return;
            };
        }
        this._evalPlugin(plugin);
        console.log("Storing plugin");
        items.push(plugin);
        this._setItems(items);

    }

};

aubreyDB.boot();

aubreyDB.loadPlugin({
    name:"test random",
    body:"var x = 'SPAGEET'"
});
