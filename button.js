(function () {

    // Không tạo lại nếu đã tồn tại
    if (document.getElementById("keyBoxContainer")) return;

    // ===== TẠO CONTAINER =====
    const container = document.createElement("div");
    container.id = "keyBoxContainer";
    container.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999999;
        font-family: Arial, sans-serif;
    `;

    // ===== NÚT MỞ FORM =====
    const openBtn = document.createElement("button");
    openBtn.textContent = "🔑 Nhập Key";
    openBtn.style = `
        padding: 10px 15px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;

    // ===== FORM NHẬP KEY =====
    const formBox = document.createElement("div");
    formBox.style = `
        display: none;
        margin-top: 10px;
        background: white;
        padding: 15px;
        border-radius: 10px;
        width: 220px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.3);
    `;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nhập key của bạn...";
    input.style = `
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 13px;
        box-sizing: border-box;
    `;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Lưu Key";
    saveBtn.style = `
        width: 100%;
        padding: 8px;
        background: #2ecc71;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa Key";
    deleteBtn.style = `
        width: 100%;
        padding: 8px;
        margin-top: 6px;
        background: #95a5a6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
    `;

    // ===== SỰ KIỆN =====
    openBtn.onclick = function () {
        formBox.style.display = formBox.style.display === "none" ? "block" : "none";
    };

    saveBtn.onclick = function () {
        const key = input.value.trim();
        if (!key) {
            alert("Vui lòng nhập key!");
            return;
        }

        localStorage.setItem("myScriptKey", key);
        alert("Đã lưu key!");
        location.reload();
    };

    deleteBtn.onclick = function () {
        localStorage.removeItem("myScriptKey");
        alert("Đã xóa key!");
        location.reload();
    };

    // ===== GHÉP LẠI =====
    formBox.appendChild(input);
    formBox.appendChild(saveBtn);
    formBox.appendChild(deleteBtn);

    container.appendChild(openBtn);
    container.appendChild(formBox);

    document.body.appendChild(container);

})();
