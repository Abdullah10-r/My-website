

$(document).ready(function () {
    $("#bchat").click(function () {
        $("#chat").toggle();
    });
});
$(document).ready(function () {
    $("#bl").click(function () {
        $("#Leonardo").toggle();
    });
});
$(document).ready(function () {
    $("#bf").click(function () {
        $("#Fireflies").toggle();
    });
});
$(document).ready(function () {
    $("#bn").click(function () {
        $("#NotebookLM").toggle();
    });
});
$(document).ready(function () {
    $("#bh").click(function () {
        $("#Lahajati").toggle();
    });
});


function myFunction() {
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    div1.setAttribute("class", "fs-3 fw-light text-muted");
    div2.setAttribute("class", "fs-3 fw-light text-muted");
    div3.setAttribute("class", "fs-3 fw-light text-muted");
    div4.setAttribute("class", "fs-3 fw-light text-muted");
    document.getElementById("t").appendChild(tr1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    td1.appendChild(div1);
    td2.appendChild(div2);
    td3.appendChild(div3);
    td4.appendChild(div4);
    td5.appendChild(div5);

    var name1 = localStorage.getItem('name2');
    div1.innerHTML = name1;
    var com = localStorage.getItem('company2');
    div2.innerHTML = com;
    var link = localStorage.getItem('link2');
    div5.innerHTML = link;
    var us = localStorage.getItem('use2');
    div3.innerHTML = us;
    var f = localStorage.getItem('fn');
    div4.innerHTML = f;
}