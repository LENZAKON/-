/**
 * Created by Lenovo on 2017/4/21.
 */
function replyWordRow() {
    
}

replyWordRow.prototype = {
    edit: function () {
        var changeWords = document.getElementsByClassName("reply-change-word");
        for (var i = 0; i < changeWords.length; i++) {

            changeWords[i].onclick = function (e) {
                document.getElementsByClassName("dialog-wenzi")[1].focus();
                for (var j = 2000; j <= 3000; j++) {

                    if (this.parentNode.parentNode.getAttribute("id") == j) {
                        document.getElementsByClassName("menbang")[1].style.display = "inline-block";
                        wenziIfChang = true;

                        document.getElementsByClassName("dialog-wenzi")[1].innerText = document.getElementById(j + "").innerText.split("关键字")[0];

                        wenziChangeCon = document.getElementsByClassName("dialog-wenzi")[1].innerText;

                    }
                }
                //对save事件进行切换
                var replyWordBroad = new replyWordBroud();
                replyWordBroad.save(e.target.parentNode.parentNode.parentNode.parentNode.id);

            }
        }
    },
    delete: function () {
        var delWords = document.getElementsByClassName("wenzi-del-word");
        for (var h = 0; h < delWords.length; h++) {
            delWords[h].onclick = function (e) {
                //要放在remove前面
                var rulrId = e.target.parentNode.parentNode.parentNode.parentNode.id;

                document.getElementById(rulrId).getElementsByClassName("first-res-wenzi")[0].innerText = parseInt(document.getElementById(rulrId).getElementsByClassName("first-res-wenzi")[0].innerText) - 1;

                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                // var keyWords = document.getElementsByClassName("wenzi-react-word");
                // for (var a = 0; a < keyWords.length; a++) {
                //     keyWords[a].id = a + 50;
                // }
                // wenziIdNum = a + 50;
            }
        }
    },

    
}