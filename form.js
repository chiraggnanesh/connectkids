class Form{
    constructor(){

    }

    display(){
        /* var button = createButton("View");
        button.position("100%", "100%"); */

        //button for div
        var button1 = document.createElement("BUTTON");
        button1.id = "Button1";
        var text1 = document.createTextNode("Click me");
        button1.appendChild(text1);
        document.body.appendChild(button1);

        //div
        var div = document.createElement('div');
        div.id = "div1";
        div.innerHTML = "Chat";
        document.body.appendChild(div);
        //adding button1 to div
        div.appendChild(button1);
        
        var divTwo = document.createElement('div');
        divTwo.id = "div2";
        divTwo.innerHTML = "Make New Friends";
        document.body.appendChild(divTwo);

        var divThree = document.createElement('div');
        divThree.id = "div3";
        divThree.innerHTML = "(nothing)";
        document.body.appendChild(divThree);

        var buttonPlay = document.createElement("BUTTON");
        buttonPlay.id = "ButtonPlay";
        var text1 = document.createTextNode("Play now");
        buttonPlay.appendChild(text1);
        document.body.appendChild(buttonPlay);

        var divFour = document.createElement('div');
        divFour.id = "div4";
        divFour.innerHTML = "play a game";
        document.body.appendChild(divFour);
        //creating a button
        divFour.appendChild(ButtonPlay);

        //div for chatbox
        document.getElementById("container").style.display = "none";

        //what to do when we press the button1
        document.getElementById("Button1").onclick = function() {
            document.getElementById("div1").style.display = "none";
            document.getElementById("div2").style.display = "none";
            document.getElementById("div3").style.display = "none";
            document.getElementById("div4").style.display = "none";
            document.getElementById("Button1").style.display = "none";
        };

        document.getElementById("ButtonPlay").onclick = function() {
            document.getElementById("div1").style.display = "none";
            document.getElementById("div2").style.display = "none";
            document.getElementById("div3").style.display = "none";
            document.getElementById("div4").style.display = "none";
            document.getElementById("Button1").style.display = "none";
            document.getElementById("ButtonPlay").style.display = "none";
            boy.visible = true;
            girl.visible = true;
        };
    }
}