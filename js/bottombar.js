var createBottomBar = function () {
    const bottomBarDiv = document.createElement("div");
    bottomBarDiv.className = "bottombar";
  
    var note = document.createElement("p");
    note.innerHTML = "website coded by me, aiden (or taxevaiden idk)<br>background in durpydoo theme created by winterkin_ (it's just durpydoo's pfp lmao)";

    bottomBarDiv.appendChild(note);
  
    const body = document.getElementById("main");
    body.appendChild(bottomBarDiv);
  };
  