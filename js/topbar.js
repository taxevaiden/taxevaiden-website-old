const topbarDiv = document.createElement("div");
topbarDiv.className = "topbar";

//home
const home = document.createElement("a");
home.className = "topbar";
home.href = "index.html";
const homeImage = document.createElement("img");
homeImage.src = "images/icons/home.png";
homeImage.className = "icon";
home.appendChild(homeImage);


//about
const about = document.createElement("a");
about.className = "topbar";
about.href = "about.html";
const aboutImage = document.createElement("img");
aboutImage.src = "images/icons/about.png";
aboutImage.className = "icon";
about.appendChild(aboutImage);


//projects
const projects = document.createElement("a");
projects.className = "topbar";
projects.href = "projects.html";
const projectsImage = document.createElement("img");
projectsImage.src = "images/icons/projects.png";
projectsImage.className = "icon";
projects.appendChild(projectsImage);


topbarDiv.appendChild(projects);
topbarDiv.appendChild(about);
topbarDiv.appendChild(home);

const body = document.getElementById("main");
body.appendChild(topbarDiv);