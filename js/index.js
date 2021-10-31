function time_change() {
    var time = new Date();
    document.getElementById("time").innerHTML = time.getHours().toString().padStart(2, "0") + ":" + time.getMinutes().toString().padStart(2, "0") + ":" + time.getSeconds().toString().padStart(2,"0");
    document.getElementById("day").innerHTML = time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate();
};
function baidu_search() {
    var string = document.getElementById("search_box").value;
    open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&tn=baidulocal&rsv_spt=3&rn=50&cl=3&wd="+encodeURI(string), "_blank");
};
function bing_search() {
    var string = document.getElementById("search_box").value;
    open("https://cn.bing.com/search?q=" + encodeURI(string), "_blank");
};
function google_search() {
    var string = document.getElementById("search_box").value;
    open("https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=" + string.replace(/ /, "+"), "_blank");
};
function csdn_search() {
    var string = document.getElementById("search_box").value;
    open("https://so.csdn.net/so/search?q=" + encodeURI(string), "_blank");
};
function hyperlink_qi1() {
    open("https://www.baidu.com/", "_blank");
};
function hyperlink_qi2() {
    open("https://www.luogu.com.cn/", "_blank");
};
function hyperlink_qi3() {
    open("https://github.com/", "_blank");
};
function hyperlink_qi4() {
    open("https://latexlive.com/", "_blank");
};
