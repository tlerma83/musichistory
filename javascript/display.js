"use strict";

var Player = (function(origPlayer){
    let songArray = [];

    origPlayer.displayJSON = function () {
        //this is my callback, passing in an anonymous function which is passing in data as arg
        origPlayer.loadSongJson(function(passedDataFromLoad){

            songArray = passedDataFromLoad;

            for (var i = 0; i < songArray.length; i++) {

                 let whatishappening = `<div class="music">
                                    <h3> Artist:  ${songArray[i].artist}</h3>
                                    <p><strong>Album:</strong> ${songArray[i].album}</p>
                                    <p><strong>Song:</strong> ${songArray[i].songTitle}</p>
                                    <button class="delete">delete</button>
                                    </div>`;
                $("#songs").append(whatishappening);


            }
                    //grab each btn with class delete. take the event then the currentTarget wgich will be the current selected btn, then grab the parent it is in and remove
                    $(".delete").click( (event) => {
                        console.log("I need an event", event);
                        $(event.currentTarget).parent("div").remove();
                    });
        });

    };
    return origPlayer;

})(Player || {});


