/**
 * Created by Lenovo on 2017/4/21.
 */
function keyWordBorad() {

};

var ifChang = false;
// var idNum = 0+document.getElementsByClassName("add-key-word").length;
var addKeyWord = document.getElementsByClassName("add-key-word");
var idNumMin = 0;
for (var i=0;i<addKeyWord.length;i++){
    idNumMin = Math.max(idNumMin,parseInt(addKeyWord[i].getAttribute("id")));
}

var changeCon;
keyWordBorad.prototype = {
    Save: function (cloneRuleId) {

        document.getElementsByClassName("save")[0].onclick = function (e) {
            // alert(cloneRuleId);
            if (!ifChang) {
                var keyWord = document.createElement("div");
                keyWord.className = "key-word add-key-word";

                //插入关键词
                var keyWordCon = document.createElement("div");
                keyWordCon.className = "key-word-con";
                keyWordCon.innerText = document.getElementsByClassName("dialog-wenzi")[0].innerText;
                keyWord.appendChild(keyWordCon);

                //插入删除，编辑
                var keyWordEd = document.createElement("div");

                keyWord.id = ++idNumMin;
                keyWordEd.className = "key-word-ed";

                //a链接完全匹配，部分匹配
                var matchA = document.createElement("a");
                matchA.className = "match-a";
                matchA.innerText = "关键字未全匹配";
                keyWordEd.appendChild(matchA);

                //编辑
                var changeWord = document.createElement("i");
                changeWord.className = "change-word key-change-word";
                keyWordEd.appendChild(changeWord);

                //删除
                var delWord = document.createElement("i");
                delWord.className = "del-word key-del-word";
                keyWordEd.appendChild(delWord);

                keyWord.appendChild(keyWordEd);

                var index = document.getElementById(cloneRuleId).getElementsByClassName("rule-answer")[0];
                index.parentNode.insertBefore(keyWord, index);

                document.getElementsByClassName("menbang")[0].style.display = "none";
            } else if (changeCon != document.getElementsByClassName("dialog-wenzi")[0].innerText) {
                var keyWordList = document.getElementsByClassName("key-word");
                for (var g = 0; g < keyWordList.length; g++) {
                    var keyWordCon = keyWordList[g].innerText.split("关键字")[0];
                    if (keyWordCon == changeCon) {
                        keyWordList[g].getElementsByClassName("key-word-con")[0].innerText = document.getElementsByClassName("dialog-wenzi")[0].innerText;
                    }
                }

                document.getElementsByClassName("menbang")[0].style.display = "none";
                ifChang = false;
            }

            //关键字记录行
            var keywordrow = new keyWordRrow();
            keywordrow.edit();
            keywordrow.delete();
            keywordrow.match();

        };
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
            var $keyLength = $(".dialog-wenzi:eq(0)").text().length;
            $(".dialog-express:eq(0)").find("i:eq(1)").text(30 - $keyLength);
        }, 0);
    }
};
