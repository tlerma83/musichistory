"use strict";
var Player = (function(origPlayer){
//    console.log("this?", this);
    //THIS totally worked!!!
    $(document).keyup( (event) =>{
        if (event.keyCode === 13) {
            origPlayer.addNewMusic();
            $("#input1, #input2, #input3").val("");
            $("#input1").focus();
            console.log("is key event happening", event);
        }
    });

    origPlayer.addNewMusic = function (event) {
        var input1 = $("#input1").val();
        let addNew = `<div class="music">
                    <h3> Artist:  ${$("#input1").val()}</h3>
                    <p><strong>Album:</strong> ${$("#input2").val()}</p>
                    <p><strong>Song:</strong> ${$("#input3").val()}</p>
                    <button class="delete">delete</button>
                    </div>`;

        $("#songs").append(addNew);
        $("#input1, #input2, #input3").val("");
        $("#input1").focus();

        $(".delete").click( (event) => {
            console.log("I need an event", event);
            $(event.currentTarget).parent("div").remove();
            $("#input1").focus();
        });
    };
    return origPlayer;
})(Player || {});



