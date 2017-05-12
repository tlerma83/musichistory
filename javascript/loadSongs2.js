"use strict";

var Player = (function(origPlayer){
    let songArray2 = [];

    origPlayer.loadSecondJson = function() {
        $.getJSON("second.json", function(parsedData){

            songArray2 = parsedData.song;
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

        }).fail(function(arg1, arg2, arg3){
            console.log("Second Json data did not load", arg2, arg3);
        });

    };
    return origPlayer;

})(Player || {});
