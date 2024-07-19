var createBottomBar = function () {
    const bottomBarDiv = document.createElement("div");
    bottomBarDiv.className = "bottombar";
  
    var note = document.createElement("p");
    note.innerHTML = "&copy; 2024 aiden/taxevaiden, unless noted, all rights reserved.<br>background in durpydoo theme created by winterkin_ (it's just durpydoo's pfp lmao)";

    bottomBarDiv.appendChild(note);
  
    const body = document.getElementById("main");
    body.appendChild(bottomBarDiv);
  };
  