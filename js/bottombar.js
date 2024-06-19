var createBottomBar = function () {
    const bottomBarDiv = document.createElement("div");
    bottomBarDiv.className = "bottombar";
  
    var note = document.createElement("p");
    note.innerHTML = "&copy; 2024 aiden/taxevaiden. All rights reserved.";

    bottomBarDiv.appendChild(note);
  
    const body = document.getElementById("main");
    body.appendChild(bottomBarDiv);
  };
  