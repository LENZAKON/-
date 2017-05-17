/**
 * Created by Lenovo on 2017/4/21.
 */
function replyWordBroud() {

}

// var wenziIdNum = 200 + document.getElementsByClassName("wenzi-react-word").length;
var wenziIdNumMin = 2000;
var weniziReactWord = document.getElementsByClassName("wenzi-react-word");
for (var i=0;i<weniziReactWord.length;i++){
    wenziIdNumMin = Math.max(wenziIdNumMin,parseInt(weniziReactWord[i].getAttribute("id")));
}

var wenziIfChang = false;
var wenziChangeCon;

replyWordBroud.prototype = {
    save: function (cloneRuleId) {

        document.getElementsByClassName("save-wenzi")[0].onclick = function (e) {
            var target = e.target;
            if ($(target.parentNode.parentNode.parentNode).find(".dialog-wenzi:eq(0)").text().length <= 30){
                if (!wenziIfChang) {
                    var keyWord = document.createElement("div");
                    keyWord.className = "key-word wenzi-react-word";

                    //插入关键词
                    var keyWordCon = document.createElement("div");
                    keyWordCon.className = "key-word-con";
                    keyWordCon.innerText = document.getElementsByClassName("dialog-wenzi")[1].innerText;
                    keyWord.appendChild(keyWordCon);

                    //插入删除，编辑
                    var keyWordEd = document.createElement("div");

                    keyWord.id = ++wenziIdNumMin;

                    keyWordEd.className = "key-word-ed";


                    //编辑
                    var changeWord = document.createElement("i");
                    changeWord.className = "change-word reply-change-word";
                    keyWordEd.appendChild(changeWord);

                    //删除
                    var delWord = document.createElement("i");
                    delWord.className = "del-word wenzi-del-word";
                    keyWordEd.appendChild(delWord);

                    keyWord.appendChild(keyWordEd);

                    if(document.getElementById(cloneRuleId)){
                        var index = document.getElementById(cloneRuleId).getElementsByClassName("rule-res")[0];
                        index.parentNode.insertBefore(keyWord, index);
                    }else {
                        alert("请关闭后重新打开");
                    }

                    document.getElementsByClassName("menbang")[1].style.display = "none";

                    //更新回复文字数量
                    document.getElementById(cloneRuleId).getElementsByClassName("res-wenzi")[0].innerText = parseInt(document.getElementById(cloneRuleId).getElementsByClassName("res-wenzi")[0].innerText) + 1;

                } else if (wenziChangeCon != document.getElementsByClassName("dialog-wenzi")[1].innerText) {

                    var keyWordList = document.getElementsByClassName("wenzi-react-word");
                    for (var g = 0; g < keyWordList.length; g++) {
                        var keyWordCon = keyWordList[g].getElementsByClassName("key-word-con")[0].innerText;

                        if (keyWordCon == wenziChangeCon) {
                            keyWordList[g].getElementsByClassName("key-word-con")[0].innerText = document.getElementsByClassName("dialog-wenzi")[1].innerText;
                        }
                    }

                    document.getElementsByClassName("menbang")[1].style.display = "none";

                    wenziIfChang = false;
                }

                //回复文字行
                var replywordrow = new replyWordRow();
                replywordrow.edit();
                replywordrow.delete();

            }else {
                alert("输入文字数目已超过限制");
            }
        }
    },


    close: function () {
        var $closeMenbang = $(".close-menbang");
        $closeMenbang.each(function () {
            $(this).click(function () {
                $(this).parent().parent().parent().css("display","none");
            });
        });
    },
    cancel: function () {
        var $resCan = $(".res-can");
        $resCan.each(function () {
            $(this).click(function () {
                $(this).parent().parent().parent().parent().css("display","none");
            });
        });
    },
    wordNum: function () {
        setInterval(function () {
            var $wenziLength = $(".dialog-wenzi:eq(1)").text().length;
            $(".dialog-express:eq(1)").find("i:eq(1)").text(30 - $wenziLength);
        }, 0);
    }

}
