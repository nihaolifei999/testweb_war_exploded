function getUserAgent() {
    return this.navigator.userAgent;
}

function getCookies() {
    let cookies =  document.cookie;
    return cookies.split("; ");
}

function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (5 * 60 * 1000)); // 过期时间10min
    var expires = "; expires=" + date.toUTCString();
    var path = "; path=/testweb/page"; // '/testweb' '/testweb/' 都可以 path=空的话默认是当前的/testweb/page
    document.cookie = name + "=" + value + expires + path;
}

function setLocale(key, value) {
    localStorage.setItem(key, value);
}

function getLocales() {
    let length = localStorage.length;
    for (let i = 0; i < length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

    }
}