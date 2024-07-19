var createTopbar = function (isblog) {
  const body = document.getElementById("main");
  if (isblog)
    {
      body.innerHTML += `<div id="menu_bar" class="menu_div closed">
      <a id="close"><img class="icon" src="../images/icons/menu.png"></a>
      <a href="../index.html"><img class="icon" src="../images/icons/home.png">home</a>
      <a href="../about.html"><img class="icon" src="../images/icons/about.png">about</a>
      <a href="../projects.html"><img class="icon" src="../images/icons/projects.png">projects</a>
      <a href="../blogs.html"><img class="icon" src="../images/icons/blogs.png">blog</a>
    </div>`;
    } else {
      body.innerHTML += `<div id="menu_bar" class="menu_div closed">
      <a id="close"><img class="icon" src="images/icons/menu.png"></a>
      <a href="index.html"><img class="icon" src="images/icons/home.png">home</a>
      <a href="about.html"><img class="icon" src="images/icons/about.png">about</a>
      <a href="projects.html"><img class="icon" src="images/icons/projects.png">projects</a>
      <a href="blogs.html"><img class="icon" src="images/icons/blogs.png">blog</a>
    </div>`;
    }
    
    const menuBarButton = document.getElementById("close");
    menuBarButton.onclick = function() {
      this.parentElement.className = "menu_div closed";
    }

  const topbarDiv = document.createElement("div");
  topbarDiv.className = "topbar";
  topbarDiv.id = "topbar";

  //home
  const home = document.createElement("a");
  
  const homeImage = document.createElement("img");
  if (isblog)
    {
        home.href = "../index.html";
        homeImage.src = "../images/icons/home.png";
    } else {
        home.href = "index.html";
        homeImage.src = "images/icons/home.png";
    }
  homeImage.className = "icon";
  const homeText = document.createElement("p");
  homeText.appendChild(homeImage);
  const homeTextContents = document.createTextNode("home");
  homeText.appendChild(homeTextContents);
  homeText.className = "topbar-a-text"; 
  home.appendChild(homeText);

  //about
  const about = document.createElement("a");
  const aboutImage = document.createElement("img");
  if (isblog)
    {
        about.href = "../about.html";
        aboutImage.src = "../images/icons/about.png";
    } else {
        about.href = "about.html";
        aboutImage.src = "images/icons/about.png";
    }
  aboutImage.className = "icon";
  const aboutText = document.createElement("p");
  aboutText.appendChild(aboutImage);
  const aboutTextContents = document.createTextNode("about");
  aboutText.appendChild(aboutTextContents);
  aboutText.className = "topbar-a-text";
  about.appendChild(aboutText);

  //projects
  const projects = document.createElement("a");
  const projectsImage = document.createElement("img");
  if (isblog)
    {
        projects.href = "../projects.html";
        projectsImage.src = "../images/icons/projects.png";
    } else {
        projects.href = "projects.html";
        projectsImage.src = "images/icons/projects.png";
    }
    const projectsText = document.createElement("p");
    projectsText.appendChild(projectsImage);
    const projectsTextContents = document.createTextNode("projects");
    projectsText.appendChild(projectsTextContents);
    projectsText.className = "topbar-a-text";
  projectsImage.className = "icon";
  projects.appendChild(projectsText);

  //blogs
  const blogs = document.createElement("a");
  const blogsImage = document.createElement("img");
  if (isblog)
    {
          blogs.href = "../blogs.html";
          blogsImage.src = "../images/icons/blogs.png";
    } else {
      blogs.href = "blogs.html";
        blogsImage.src = "images/icons/blogs.png";
    }
    const blogsText = document.createElement("p");
    blogsText.appendChild(blogsImage);
    const blogsTextContents = document.createTextNode("blog");
    blogsText.appendChild(blogsTextContents);
    blogsText.className = "topbar-a-text";
  blogsImage.className = "icon";
  blogs.appendChild(blogsText);

  const menu = document.createElement("a");
  const menuImage = document.createElement("img");
  if (isblog)
    {
      menuImage.src = "../images/icons/menu.png";
    } else {
      menuImage.src = "images/icons/menu.png";
    }
    const menuText = document.createElement("p");
    menuText.appendChild(blogsImage);
    const menuTextContents = document.createTextNode("menu");
    menuText.appendChild(menuTextContents);
    menuText.className = "topbar-a-text";
    menuImage.className = "icon";
    menu.appendChild(menuImage);
    menu.appendChild(menuText)
    menu.id = "menu_icon";
    menu.onclick = function() {
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
