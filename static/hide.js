function hack() {
function inFrame() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function usingFirefox() {
    return navigator.userAgent.indexOf("Firefox") != -1;
}
var redirectSite = "https://www.google.com";
if (!inFrame() && usingFirefox() != true) {
    var tab = window.open('about:blank', '_blank');
    if (!tab || tab.closed || typeof tab.closed == 'undefined') {
        console.log("Popup blocked");
        if (window.location.pathname != "/") {
            window.location.replace(window.location.origin + '?url=' + window.location.pathname);
        }
    } else {
        if (window.location.pathname != "/") {
            tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Canvas</title><link rel="icon" type="image/png" href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.origin + '?url=' + window.location.pathname + '" frameborder="0"></iframe></body></html>';
        } else {
            tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Canvas</title><link rel="icon" type="image/png" href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.origin + "/proxy.html"+ '" frameborder="0"></iframe></body></html>';
        }
        tab.document.close();
        window.location.replace(redirectSite);
    }
  }
}