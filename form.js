class Form{
    constructor(){

    }

    display(){

        //Creating Chat Button "+"
        var chatButton = document.createElement("BUTTON");
        chatButton.id = "ChatButton";
        var text1 = document.createTextNode("+");
        chatButton.appendChild(text1);
        document.body.appendChild(chatButton);

        //DIV 1
        var div = document.createElement('div');
        div.id = "div1";
        div.innerHTML = "Chat, *Important message*: The buttons are not functing right now.";
        document.body.appendChild(div);
        //Adding Chat Button to DIV 1
        div.appendChild(chatButton);
        
        //Creating "Start Sharing Location" Button
        var findButton = document.createElement("BUTTON");
        findButton.id = "FindButton";
        var text1 = document.createTextNode("Start Sharing Location");
        findButton.appendChild(text1);
        document.body.appendChild(findButton);

        //Creating DIV 2
        var divTwo = document.createElement('div');
        divTwo.id = "div2";
        divTwo.innerHTML = "Find nearby";
        document.body.appendChild(divTwo);
        //Adding Chat Button to DIV 1
        divTwo.appendChild(findButton);

        //Task to perform when we press "+"
        document.getElementById("ChatButton").onclick = function() {
            document.getElementById("div1").style.display = "none";
            document.getElementById("div2").style.display = "none";
            document.getElementById("ChatButton").style.display = "none";
            logo.visible = false;            
            chatBackground.visible = true;
        };
    }
}