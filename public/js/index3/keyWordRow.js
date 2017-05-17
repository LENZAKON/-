/**
 * Created by Lenovo on 2017/4/21.
 */
function keyWordRrow() {

};

keyWordRrow.prototype = {

    //编辑
    edit: function () {
        var changeWords = document.getElementsByClassName("key-change-word");

        for (var i = 0; i < changeWords.length; i++) {

            changeWords[i].onclick = function (e) {

                document.getElementsByClassName("dialog-wenzi")[0].focus();
                for (var j = 0; j <= 1000; j++) {
                    if (this.parentNode.parentNode.getAttribute("id") == j) {
                        document.getElementsByClassName("menbang")[0].style.display = "inline-block";
                        ifChang = true;

                        document.getElementsByClassName("dialog-wenzi")[0].innerText = document.getElementById(j + "").innerText.split("关键字")[0];

                        changeCon = document.getElementsByClassName("dialog-wenzi")[0].innerText;
                    }
                }
                //save按钮事件绑定的事件进行切换
                var keyWordBroad = new keyWordBorad();
                keyWordBroad.Save(e.target.parentNode.parentNode.parentNode.parentNode.id);
            }

        }
    },
    //删除
    delete: function () {
        var delWords = document.getElementsByClassName("key-del-word");
        for (var h = 0; h < delWords.length; h++) {
            delWords[h].onclick = function () {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                // var keyWords = document.getElementsByClassName("add-key-word");
                // for (var q = 0; q < keyWords.length; q++) {
                //     keyWords[q].id = q;
                // }
                // idNum = q;
            }
        }

    },
    //点击关键字匹配
    match: function () {
        var matchA = document.getElementsByClassName("match-a");
        for (var w = 0; w < matchA.length; w++) {
            matchA[w].onclick = function () {
                for (var j = 0; j < 1000; j++) {
                    if (this.parentNode.parentNode.getAttribute("id") == j) {

                        if (document.getElementById(j + "").getElementsByTagName("a")[0].innerText == "关键字未全匹配") {
                            document.getElementById(j + "").getElementsByTagName("a")[0].innerText = "关键字已全匹配";

                        } else {
                            document.getElementById(j + "").getElementsByTagName("a")[0].innerText = "关键字未全匹配";

                        }
                    }
                }
            }
        }
    }

}