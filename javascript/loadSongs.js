
var Player = (function(origPlayer){
    let songArray = [];

    origPlayer.loadSongJson =

    function(callback) {
        var jsonDataLoad = new XMLHttpRequest();
        jsonDataLoad.addEventListener("load", function(event){
            songArray = JSON.parse(this.responseText).song;
            callback(songArray);
        });

        jsonDataLoad.open("GET", "songs.json");
        jsonDataLoad.send();
    }
    console.log("testing array", songArray);
    return origPlayer;

})(Player || {})

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
