(function () {
    'use strict';

    function createButton() {
        if (document.getElementById("autoUptolinkBtn")) return;

        const btn = document.createElement("button");
        btn.id = "autoUptolinkBtn";
        btn.innerText = "Chạy Uptolink 2 Step";

        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style.zIndex = "9999";
        btn.style.padding = "10px 15px";
        btn.style.background = "#10b981";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "bold";

        btn.onclick = function () {
            window.location.href = "https://maxtask.net/home/tasks";
        };

        document.body.appendChild(btn);
    }

    function autoClickTask() {
        const titles = document.querySelectorAll("h3");

        titles.forEach(title => {
            if (title.innerText.trim() === "Uptolink 2 Step") {

                const card = title.closest("div.p-4");
                if (!card) return;

                const button = card.querySelector("button");

                if (button && !button.disabled) {
                    console.log("Đã tìm thấy Uptolink 2 Step → Đang bấm");
                    button.click();
                }
            }
        });
    }

    window.addEventListener("load", function () {

        createButton();

        if (window.location.href.includes("/home/tasks")) {

            const interval = setInterval(() => {
                autoClickTask();
            }, 2000);

            setTimeout(() => clearInterval(interval), 20000);
        }
    });

})();
