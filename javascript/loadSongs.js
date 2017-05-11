"use strict";

var Player = (function(origPlayer){
    let songArray = [];
    origPlayer.loadSongJson =function() {

        var jsonDataLoad = new XMLHttpRequest();
        jsonDataLoad.addEventListener("load", function(event){
            songArray = JSON.parse(this.responseText).song;
            for (var i = 0; i < songArray.length; i++) {

                 let whatishappening = `<div class="music">
                                    <h3> Artist:  ${songArray[i].artist}</h3>
                                    <p><strong>Album:</strong> ${songArray[i].album}</p>
                                    <p><strong>Song:</strong> ${songArray[i].songTitle}</p>
                                    <button class="delete">delete</button>
                                    </div>`;
                $("#songs").append(whatishappening);
            }
            $(".delete").click( (event) => {
                $(event.currentTarget).parent("div").remove();
            });
        });

        jsonDataLoad.open("GET", "songs.json");
        jsonDataLoad.send();
    };

    return origPlayer;

})(Player || {});

//Player.loadSongJson();



//var Player = (function(origPlayer){
//
//		origPlayer.loadSongJson= function (callBack){
//            $.getJSON("songs.json", function(result){
//                callBack(result.song);
//            });
//		}
//
//	return origPlayer;
//
//})(Player || {});
//
//Player.loadSongJson();







    //        return new Promise((resolve, reject) =>{
//            let xhrRequest = new XMLHttpRequest();
//            xhrRequest.onload =  function () {
//                if(xhrRequest.status === 200) {
//                    songArray = JSON.parse(xhrRequest.responseText);
//                    data.song.forEach((item) => {
//                        songArray.push(item);
//                    });
//                } else {
//                    reject(new Error("You got an error", xhrRequest.statusText));
//                }
//
//            };
//
//            xhrRequest.open("GET", "songs.json");
//            xhrRequest.send();
//        })
//    }
