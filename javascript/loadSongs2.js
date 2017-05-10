"use strict";
var Player = (function(origPlayer){
    let songArray2 = [];

    origPlayer.loadSecondJson =

    function(callback) {
        var jsonDataLoad2 = new XMLHttpRequest();
        jsonDataLoad2.addEventListener("load", function(event){
            songArray2 = JSON.parse(this.responseText).song;
            callback(songArray2);
        });

        jsonDataLoad.open("GET", "second.json");
        jsonDataLoad.send();
    };
    console.log("testing array", songArray2);
    return origPlayer;

})(Player || {});
