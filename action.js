function sendMessForBinh() {
    // lay du lieu trong input
    let mess = document.getElementById("quanganh").value;
    // gan vao thu nhap cua QA
    quangAnh.typing(mess);
    // gui tin nhan cho Binh
    quangAnh.send(binh);
    // in thu da gui vao the p
    document.getElementById("sendQA").innerText = quangAnh.sent;
    document.getElementById("inboxBinh").innerText = binh.inbox;
}
function sendMessForQA() {
    // lay du lieu trong input
    let mess = document.getElementById("binh").value;
    // gan vao thu nhap cua QA
    binh.typing(mess);
    // gui tin nhan cho Binh
    binh.send(quangAnh);
    // in thu da gui vao the p
    document.getElementById("sendBinh").innerText = binh.sent;
    document.getElementById("inboxQA").innerText = quangAnh.inbox;
}
