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
    postSummary("posts/i-need-ideas", "i need ideas.", "6/17/2024");
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

var addExtrasEnd = function ()
{
    var main_text = document.getElementById("blog_div");

    main_text.innerHTML += `<!-- customize labels of htmlcommentbox.com -->
<script>
    /* This code goes ABOVE the main HTML Comment Box code!
     replace the text in the single quotes below to customize labels.*/
    hcb_user = {
        /* L10N */
        comments_header : 'comments!',
        name_label : 'name',
        content_label: 'enter your comment here',
        submit : 'comment!!',
        logout_link : '<img title="log out" src="https://www.htmlcommentbox.com/static/images/door_out.svg" alt="[logout]" class="hcb-icon hcb-door-out"/>',
        admin_link : '<img src="https://www.htmlcommentbox.com/static/images/door_in.svg" alt="[login]" class="hcb-icon hcb-door-in"/>',
        no_comments_msg: "no has commented. comment first!! or don't. i don't care",
        add:'add your comment',
        again: 'post another comment',
        rss:'<img src="https://www.htmlcommentbox.com/static/images/feed.svg" class="hcb-icon" alt="rss"/> ',
        said:'said:',
        prev_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
        next_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
        showing:'showing',
        to:'to',
        website_label:'website (optional)',
        email_label:'email',
        anonymous:'Anonymous',
        mod_label:'(mod)',
        subscribe:'Email Me Replies',
        add_image:'Add Image',
        are_you_sure:'you sure this is bad? if so, ahead and flag it.',
    
        reply:'reply',
        flag:'flag',
        like:'like',
    
        /* dates */
        days_ago:'days ago',
        hours_ago:'hours ago',
        minutes_ago:'minutes ago',
        within_the_last_minute:'within the last minute',
    
        msg_thankyou:'thank you for commenting!',
        msg_approval:'oh ya quick note: you have to wait for your comment to be approved',
        msg_approval_required:'thank you for commenting! wait until this is approved and then it will appear',
    
        err_bad_html:'you comment contained bad html.',
        err_bad_email:'please enter a valid email address.',
        err_too_frequent:'slow down!',
        err_comment_empty:"you can't just comment empty ones, that's so plain..",
        err_denied:'your comment was not accepted.',
        err_unknown:'your comment was blocked for unknown reasons, please report this.',
        err_spam:'you comment got detected as spam.',
        err_blocked:'your comment was blocked by site policy.',
    
        /* SETTINGS */
        MAX_CHARS: 8192,
        PAGE:'', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
        ON_COMMENT: function(){}, /* Function to call after commenting. */
        RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
    };
    </script>
    <!-- done customizing labels of htmlcommentbox.com -->

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
    showing:'Showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'Anonymous',
    mod_label:'[MOD]',
    subscribe:'Send emails of replies',
    add_image:'Add image',
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
        h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%244MFMPuNKVx2MWFlwjNrVr1"+"&opts=16798&num=10&ts=1705610387929"
    );

    if (typeof s != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(s);
    }
})();
}

//i fuckin hate branding!
var removeDivClass = function(className) {
    document.querySelectorAll(className).forEach(element => element.remove());
}

var removeMessage = function() {
    const checkInterval = setInterval(() => {
        const element = document.querySelector('.home-desc');
        if (element !== null) {
            // element exists!
            removeDivClass('.home-desc');
            clearInterval(checkInterval);
        }
    }, 100);
}

var cleanup = function ()
{
   removeMessage();
}

//trigger when page is loaded.
document.addEventListener("DOMContentLoaded", (event) => {
    removeMessage()
});

//trigger when next and previous pages are clicked
$(".hcb-link").on("click", (event) => {
    removeMessage()
})