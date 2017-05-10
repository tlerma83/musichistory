var Player = (function(origPlayer){
//    let songArray = [];
    console.log("this?", this);
    //THIS totally worked!!!
    $(this).keyup( (event) =>{
        if (event.keyCode === 13) {
            origPlayer.addNewMusic();
            $("#input1, #input2, #input3").val("");
            $("#input1").focus();
        }
    });

    origPlayer.addNewMusic = function (event) {
        var input1 = $("#input1").val();
        let addNew = `<div class="music">
                    <h3> Artist:  ${$("#input1").val()}</h3>
                    <p><strong>Album:</strong> ${$("#input2").val()}</p>
                    <p><strong>Song:</strong> ${$("#input3").val()}</p>
                    </div>`;

        $("#songs").append(addNew);
        $("#input1, #input2, #input3").val("");
        $("#input1").focus();
    }
    return origPlayer;
})(Player || {});

//$("#addNewBTN").click( (event) => {
//    Player.addNewMusic();
//});

