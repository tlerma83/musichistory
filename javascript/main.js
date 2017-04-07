console.log("hello");
var songs = [];
                      
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.push("I Like Big Butts - by Sir Mix-A-Lot on the album Unknown");

songs.unshift("Breath - by Sia on the album Some people have Real Problem")


var test4 = document.getElementById("songs");

for (var i = 0; i < songs.length; i++) {
    var song = songs[i];
    song = song.replace(">", "-");
    song = song.replace(/[*\@\!\(]/g, "");
    console.log(song);
    var p = document.createElement("p");
    p.innerHTML = song;
    test4.appendChild(p); 
}






//*****Playing around with other ideas****///

//var songName = ["Legs", "The Logical Song", "Another Brick in the Wall", "Welcoms to the Jungle", "Ironic"];
//
//var artistAndAlbum = ["ZZTop on the album Eliminator", "by Supertramp on the album Breakfast in America", "by Pink Floyd on the album The Wall", "by Guns & Roses on the album Appetite for Destruction",  "by Alanis Moris*ette on the album Jagged Little Pill"];



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