var createTopbar = function (isblog) {
  const body = document.getElementById("main");
  if (isblog) {
    body.innerHTML += `<div id="menu_bar" class="menu_div closed">
      <a id="close"><img class="icon" src="../images/icons/menu.png"></a>
      <a href="../index.html"><img class="icon" src="../images/icons/home.png">home</a>
      <a href="../about.html"><img class="icon" src="../images/icons/about.png">about</a>
      <a href="../projects.html"><img class="icon" src="../images/icons/projects.png">projects</a>
      <a href="../blogs.html"><img class="icon" src="../images/icons/blogs.png">blog</a>
    </div>`;
  } else {
    body.innerHTML += `<div id="menu_bar" class="menu_div closed">
      <a id="close"><img class="icon" src="images/icons/menu.png">close</a>
      <a href="index.html"><img class="icon" src="images/icons/home.png">home</a>
      <a href="about.html"><img class="icon" src="images/icons/about.png">about</a>
      <a href="projects.html"><img class="icon" src="images/icons/projects.png">projects</a>
      <a href="blogs.html"><img class="icon" src="images/icons/blogs.png">blog</a>
    </div>`;
  }

  const menuBarButton = document.getElementById("close");
  menuBarButton.onclick = function () {
    this.parentElement.className = "menu_div closed";
  };

  const topbarDiv = document.createElement("div");
  topbarDiv.className = "topbar";
  topbarDiv.id = "topbar";

  //home
  const home = document.createElement("a");
  if (isblog) {
    home.href = "../index.html";
  } else {
    home.href = "index.html";
  }
  const homeText = document.createElement("p");
  const homeTextContents = document.createTextNode("home");
  homeText.appendChild(homeTextContents);
  homeText.className = "topbar-a-text";
  home.appendChild(homeText);

  //about
  const about = document.createElement("a");
  if (isblog) {
    about.href = "../about.html";
  } else {
    about.href = "about.html";
  }
  const aboutText = document.createElement("p");
  const aboutTextContents = document.createTextNode("about");
  aboutText.appendChild(aboutTextContents);
  aboutText.className = "topbar-a-text";
  about.appendChild(aboutText);

  //projects
  const projects = document.createElement("a");
  if (isblog) {
    projects.href = "../projects.html";
  } else {
    projects.href = "projects.html";
  }
  const projectsText = document.createElement("p");
  const projectsTextContents = document.createTextNode("projects");
  projectsText.appendChild(projectsTextContents);
  projectsText.className = "topbar-a-text";
  projects.appendChild(projectsText);

  //blogs
  const blogs = document.createElement("a");
  if (isblog) {
    blogs.href = "../blogs.html";
  } else {
    blogs.href = "blogs.html";
  }
  const blogsText = document.createElement("p");
  const blogsTextContents = document.createTextNode("blog");
  blogsText.appendChild(blogsTextContents);
  blogsText.className = "topbar-a-text";
  blogs.appendChild(blogsText);

  const menu = document.createElement("a");
  const menuImage = document.createElement("img");
  if (isblog) {
    menuImage.src = "../images/icons/menu.png";
  } else {
    menuImage.src = "images/icons/menu.png";
  }
  const menuText = document.createElement("p");
  menuText.appendChild(menuImage);
  const menuTextContents = document.createTextNode("menu");
  menuText.appendChild(menuTextContents);
  menuText.className = "topbar-a-text";
  menuImage.className = "icon";
  menu.appendChild(menuText);
  menu.id = "menu_icon";
  menu.onclick = function () {
    const menuBar = document.getElementById("menu_bar");
    menuBar.className = "menu_div";
  };

  topbarDiv.appendChild(home);
  topbarDiv.appendChild(about);
  topbarDiv.appendChild(projects);
  topbarDiv.appendChild(blogs);
  topbarDiv.appendChild(menu);

  body.appendChild(topbarDiv);
};
