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

    boot:function(){
        if(!this._getItems()){
            this._init();
            console.log("Init complete");
        }
        console.log("Boot complete!")
    },
};

aubreyDB.boot();
