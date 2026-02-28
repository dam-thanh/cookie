let userKey = localStorage.getItem("myScriptKey");

if (!userKey) {

    // Load button.js từ GitHub
    GM_xmlhttpRequest({
        method: "GET",
        url: BUTTON_JS,
        onload: function(res) {
            const script = document.createElement("script");
            script.textContent = res.responseText;
            document.body.appendChild(script);
        }
    });

    return; // chưa có key thì dừng script
}
