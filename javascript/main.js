"use strict";

console.log("hello");




$("#nav-add-li").click( (event) => {
    $(".flex-me").removeClass("hidden");
    $(".music").addClass("hidden");
    $("#moreBTN").addClass("hidden");
    $("#input1").focus();
});

$("#remove-add-inputs").click ( (event) => {
    $(".music").removeClass("hidden");
    $(".flex-me").addClass("hidden");
    $("#moreBTN").removeClass("hidden");
});

$("#addNewBTN").click( (event) => {
    Player.addNewMusic();
});

$("#moreBTN").click( (event) => {
    Player.loadSecondJson();
    console.log("show me events!");
});


//console.log($(".delete"));
Player.loadSongJson();
















//function songsPlaylist (song, artist, album) {
//
//    this.song = song;
//    this.artist = artist;
//    this.album = album;
//    this.playlist = song + artist + album;
//    var songGenerator = function() {
//        for (var i = 0; i < playlist.length; i++) {
//            document.getElementById("songs").innerHTML;
//        }
//    }
//}
//  console.log(songsPlaylist(songs), "am I working");
