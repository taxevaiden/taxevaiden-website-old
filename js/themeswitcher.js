//this will sort of be the template of the theme switcher

//<div class="dropdown">
//    <button class="dropdown-btn">set theme</button>
//    <div class="dropdown-content">
//        <a>light</a>
//        <a>dark</a>
//    </div>
//</div>

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name, defaultValue = null) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return defaultValue;
}

var createThemeSwitcher = function ()
{
    let cookieTheme = getCookie("theme", "light");
    document.documentElement.className = cookieTheme;

    const topbarDiv = document.getElementById("topbar");

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    dropdown.style = `
    float: right;
    margin-top: 12px;
    margin-right: 12px;
    `

    const dropdownButton = document.createElement("button");
    dropdownButton.className = "dropdown-btn";
    dropdownButton.innerText = "set theme";
    dropdownButton.style = `
    box-shadow: 0px 0px var(--shadow-color);
    `

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    const lightTheme = document.createElement("a");
    lightTheme.innerText = "light";
    lightTheme.onclick = function ()
    {
        document.documentElement.className = "light";
        setCookie("theme", "light", 99999999);
    }

    const darkTheme = document.createElement("a");
    darkTheme.innerText = "dark";
    darkTheme.onclick = function ()
    {
        document.documentElement.className = "dark";
        setCookie("theme", "dark", 99999999);
    }

    dropdownContent.appendChild(lightTheme);
    dropdownContent.appendChild(darkTheme);
    dropdown.appendChild(dropdownButton);
    dropdown.appendChild(dropdownContent);

    topbarDiv.appendChild(dropdown);
}

createThemeSwitcher();