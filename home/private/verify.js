function getCookieByName(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function verify(){
    const signedin = getCookieByName('loggedin');
    if (signedin !== 'true'){
        window.location.href = "../../";
    }
}

function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('Deleted all cookies (signed out)');
    alert('Deleted all cookies (signed out)');
    window.location.href = "../../";
}