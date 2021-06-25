// Soumaya Dammak 
// brigning all the pieces together 
var testingMode; 
var $buttons = $(".button");
for (var i = 0; i < $buttons.length; ++i ){
    $($buttons[i]).click(function(){
        testingMode = $(this).attr("id");
        startGame(testingMode);
        console.log("the testing mode is" + testingMode );

    });
}

/* this function is invoked once one of the three buttons is clicked*/ 
function startGame(testingMode){
    $("#intro").remove(); 
    thePlayer = new Player("blue", 30); 
    thePlayer.move(window.innerWidth/2, window.innerHeight/2);
    thePlayer.addToGame('body');
    setInterval(function () { 
        var enemy = new Enemy(testingMode);
        enemy.addToGame('body');
        enemy.start();
    }, 1000);
    $(document).on('mousemove', function (evt) { 
        thePlayer.move(evt.clientX, evt.clientY);
          }
    );
}

