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
    postSummary("posts/vacation.html", "i went on vacation", "7/6/2024");
    postSummary("posts/how-to-host-your-own-website.html", "hosting your own website", "6/23/2024");
    postSummary("posts/github-is-wonderful.html", "github is wonderful", "6/20/2024");
    postSummary("posts/i-need-ideas.html", "i need ideas.", "6/17/2024");
    postSummary("posts/changes-to-the-website.html", "changes to the website", "6/16/2024");
    postSummary("posts/first-post.html", "first post!!", "6/15/2024");
}

//these functions are only for the blog pages not the links to the blogs
var addExtras = function ()
{
    var main_text = document.getElementById("blog_div");

    var goBackP = document.createElement("p");
    var goBackA = document.createElement("a");
    var text = document.createTextNode("go back!");
    goBackA.appendChild(text);
    
    goBackA.href = "../blogs.html";

    goBackP.appendChild(goBackA);
    main_text.appendChild(goBackP);

    
}

var shareButtonClick = function ()
{
    const button = document.getElementById("share-post");
    if (button.className != "btn disabled") {
        navigator.clipboard.writeText(window.location.href);
    
        button.innerHTML = "link copied!";
        button.className += " disabled";
    } else {
        button.innerHTML = "you already copied the link.";
    }
}

var addExtrasEnd = function ()
{
    var main_text = document.getElementById("blog_div");

    

    main_text.innerHTML += `
    <button class="btn" id="share-post" onclick="shareButtonClick();">share this post!</button>

            <!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Widget</a> is loading comments...</div>
<!-- end www.htmlcommentbox.com -->`;

//custom HTMLCommentBox values
hcb_user = {
    /* L10N */
    comments_header : 'comments!',
    name_label : 'name',
    content_label: 'comment here',
    submit : 'post!',
    logout_link : '<img title="log out" src="https://www.htmlcommentbox.com/static/images/door_out.svg" alt="[logout]" class="hcb-icon hcb-door-out"/>',
    admin_link : '<img src="https://www.htmlcommentbox.com/static/images/door_in.svg" alt="[login]" class="hcb-icon hcb-door-in"/>',
    no_comments_msg: 'no comments here? quick!! be the first to comment "first"!! /j',
    add:'add your comment',
    again: 'post another comment!',
    rss:'<img src="https://www.htmlcommentbox.com/static/images/feed.svg" class="hcb-icon" alt="rss"/> ',
    prev_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'anonymous',
    mod_label:'[MOD]',
    subscribe:'send emails of replies',
    add_image:'add image',
    are_you_sure:'you sure this comment is bad? if so, go ahead and flag it.',

    reply:'reply',
    flag:'flag',
    like:'like!',

    /* dates */
    days_ago:'days ago',
    hours_ago:'hours ago',
    minutes_ago:'minutes ago',
    within_the_last_minute:'within the last minute',

    msg_thankyou:'thank you for commenting!',
    msg_approval:'this comment will be revealed someday.. unless it is terrible',
    msg_approval_required:'thank you for commenting! your comment will be shown to others once it is approved.',

    err_bad_html:'your comment contained bad html.',
    err_bad_email:'please enter a valid email address.',
    err_too_frequent:'you must wait a few seconds between posting comments.',
    err_comment_empty:'that is a very boring and basic comment (do not make it empty)',
    err_denied:'your comment was not approved.',
    err_unknown:'your comment was blocked for unknown reasons. so you could report this',
    err_spam:'your comment got detected as spam',
    err_blocked:'site policy hates your comment.',

    /* SETTINGS */
    MAX_CHARS: 4096,
    ON_COMMENT: function(){}, /* Function to call after commenting. */
    RELATIVE_DATES: false /* show dates in the form "X hours ago." etc. */
};

//HTMLCommentBox code
if (!window.hcb_user) {
    hcb_user={};
}

(function() {
    var s = document.createElement("script"), 

    l = hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), 
    h = "https://www.htmlcommentbox.com";

    s.setAttribute("type","text/javascript");
    s.setAttribute(
        "src", 
        h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24WajW%2FZqub0VOOBdNPrlnv."+"&opts=16798&num=10&ts=1718677699754"
    );

    if (typeof s != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(s);
    }
})();
}