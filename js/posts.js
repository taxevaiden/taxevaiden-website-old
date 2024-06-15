var postSummary = function (link, title, date)
{
    var container = document.createElement("div");
    container.className = "blogSummary";

    var blogTitle = document.createElement("h2");
    var titleA = document.createElement("a");
    titleA.href = link;
    var titleContents = document.createTextNode(`${title}`);
    titleA.appendChild(titleContents);
    blogTitle.appendChild(titleA);
    

    var blogDate = document.createElement("p");
    var dateString = document.createTextNode(`${date}`)
    blogDate.appendChild(dateString);

    container.appendChild(blogTitle);
    container.appendChild(blogDate);

    var blogsContainer = document.getElementById("blogsContainer");

    blogsContainer.appendChild(container);
}

var addPosts = function ()
{
    postSummary("posts/first-post.html", "first post!!", "6/15/2024");
}

