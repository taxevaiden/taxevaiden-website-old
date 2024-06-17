var postSummary = function (link, title, date)
{
    var container = document.createElement("div");
    container.className = "blogSummary";

    var blogTitle = document.createElement("h3");
    var titleA = document.createElement("a");
    titleA.href = link;
    var titleContents = document.createTextNode(`${title}`);
    titleA.appendChild(titleContents);
    blogTitle.appendChild(titleA);
    

    var blogDate = document.createElement("p");
    var blogDateContents = document.createElement("small")
    var dateString = document.createTextNode(`${date}`)
    blogDateContents.appendChild(dateString);
    blogDate.appendChild(blogDateContents);

    container.appendChild(blogTitle);
    container.appendChild(blogDate);

    var blogsContainer = document.getElementById("blogsContainer");

    blogsContainer.appendChild(container);
}

var addPosts = function ()
{
    postSummary("posts/changes-to-the-website.html", "changes to the website", "6/16/2024");
    postSummary("posts/first-post.html", "first post!!", "6/15/2024");
}

