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
  home.appendChild(homeImage);

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
  about.appendChild(aboutImage);

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
  projectsImage.className = "icon";
  projects.appendChild(projectsImage);

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
    blogsImage.className = "icon";
    blogs.appendChild(blogsImage);

  topbarDiv.appendChild(home);
  topbarDiv.appendChild(about);
  topbarDiv.appendChild(projects);
  topbarDiv.appendChild(blogs);

  const body = document.getElementById("main");
  body.appendChild(topbarDiv);
};
