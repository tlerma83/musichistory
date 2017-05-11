"use strict";

var Player = (function(origPlayer){
    let songArray2 = [];

    origPlayer.loadSecondJson =

    function() {
        var jsonDataLoad2 = new XMLHttpRequest();
        jsonDataLoad2.addEventListener("load", function(event){
            songArray2 = JSON.parse(this.responseText).song;
            for (var i = 0; i < songArray2.length; i++) {

                 let whatishappening = `<div class="music">
                                    <h3> Artist:  ${songArray2[i].artist}</h3>
                                    <p><strong>Album:</strong> ${songArray2[i].album}</p>
                                    <p><strong>Song:</strong> ${songArray2[i].songTitle}</p>
                                    <button class="delete">delete</button>
                                    </div>`;
                $("#songs").append(whatishappening);
            }
            $(".delete").click( (event) => {
                $(event.currentTarget).parent("div").remove();
            });
        });

        jsonDataLoad2.open("GET", "second.json");
        jsonDataLoad2.send();
    };
    console.log("testing array", songArray2);
    return origPlayer;

})(Player || {});
