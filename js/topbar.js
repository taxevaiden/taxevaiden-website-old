var createTopbar = function (isblog) {
  const topbarDiv = document.createElement("div");
  topbarDiv.className = "topbar";

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
    const blogsTextContents = document.createTextNode("blogs");
    blogsText.appendChild(blogsTextContents);
    homeText.className = "topbar-a-text";
  blogsImage.className = "icon";
  blogs.appendChild(blogsText);

  

  topbarDiv.appendChild(home);
  topbarDiv.appendChild(about);
  topbarDiv.appendChild(projects);
  topbarDiv.appendChild(blogs);


  const body = document.getElementById("main");
  body.appendChild(topbarDiv);
};
