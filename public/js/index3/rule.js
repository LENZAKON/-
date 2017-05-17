/**
 * Created by Lenovo on 2017/4/21.
 */
function rule() {

};

//用来判断规则的方框数
var rulrItem = document.getElementsByClassName("rule-item");
//清除新克隆方框的关键字和回复文字
var clearCloneKeyRec;
//每一个克隆的rule的id
// var cloneRuleId = 99 + document.getElementsByClassName("rule").length;
var totalRule = document.getElementsByClassName("rule");
var ruleIdMin = 1000;
for (var i=0;i<totalRule.length;i++){
    ruleIdMin = Math.max(ruleIdMin,parseInt(totalRule[i].getAttribute("id")));
}

rule.prototype = {
    addKeyWord: function () {
        var addKeyItem = document.getElementsByClassName("add-key-item");
        for (var i=0;i<addKeyItem.length;i++){
            addKeyItem[i].addEventListener("click",function (e) {

                $(".dialog-header:eq(0)").find("p:eq(0)").text("添加关键字");
                $(".dialog-wenzi:eq(0)").text("");
                $(".menbang:eq(0)").attr("style","display:inline-block");
                //为点击“添加关键字”模板的按钮
                var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                var keyWordBroad = new keyWordBorad();
                keyWordBroad.Save(id);
                keyWordBroad.cancel();
                keyWordBroad.close();
                keyWordBroad.wordNum();
            });
        }
    },
    replyWord: function () {
    
        var wenziChange = document.getElementsByClassName("wenzi-change");
        for (var i=0;i<wenziChange.length;i++){
            wenziChange[i].addEventListener("click",function (e) {
                var ruleId = this.parentNode.parentNode.parentNode.parentNode.id;

                if (document.getElementById(ruleId).getElementsByClassName("wenzi-react-word").length == 0 && document.getElementById(ruleId).getElementsByClassName("insert").length == 0){
                    document.getElementsByClassName("dialog-wenzi")[1].innerText = "";
                    document.getElementsByClassName("menbang")[1].style.display = "inline-block";
                    //为点击确认“回复文字”添加模板的按钮
                    var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                    var replyWordBroad = new replyWordBroud();
                    replyWordBroad.save(id);
                    replyWordBroad.cancel();
                    replyWordBroad.close();
                    replyWordBroad.wordNum();

                }else {
                    alert("请先删除掉原来的文字或图片回复.");
                    var keywordrow = new keyWordRrow();
                    keywordrow.edit();
                }
            })
        }
    },
    replyImg: function () {

        var imgChange = document.getElementsByClassName("img-change");
        for (var i=0;i<imgChange.length;i++){

            document.getElementsByClassName("img-change")[i].addEventListener("click",function (e) {

                var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                if (document.getElementById(id).getElementsByClassName("wenzi-react-word").length == 0 && document.getElementById(id).getElementsByClassName("insert").length == 0){
                    var replyImg = new replyImgBroad();
                    replyImg.state();
                    replyImg.select();
                    replyImg.save(id);
                }else {
                    alert("请先删除掉原来的文字或图片回复.");
                }

            })

        }
    },
    save: function () {

            var firstRuleButton = document.getElementsByClassName("fist-rule");

            for (var i=0;i<firstRuleButton.length;i++){
                firstRuleButton[i].onclick = function (e) {
                    if ($(this).parent().parent().parent().parent().find(".con:eq(0)").val() == "") {
                        alert("请输入规则名");
                    }else if ($(this).parent().parent().parent().parent().find(".add-key-word").length == 0){
                        alert("请输入关键字");
                    } else {

                        var ruleName = $(this).parent().parent().parent().parent().find(".con:eq(0)").val();

                        var keyWord = $(this).parent().parent().parent().parent().find(".add-key-word").find(".key-word-con");
                        var keyWords = [];
                        var keyWordId = $(this).parent().parent().parent().parent().find(".add-key-word");
                        var keywordsIds = [];

                        for (var g=0;g<keyWordId.length;g++) {
                            keywordsIds.push(keyWordId[g].getAttribute("id"));
                        }

                        for (var i=0;i<keyWord.length;i++){
                            keyWords.push(keyWord[i].innerText);
                        }
                        var replywordID = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").attr("id");

                        var reactWord = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").find(".key-word-con:eq(0)").text();
                        var totalId = this.parentNode.parentNode.parentNode.parentNode.id;

                        //回复图片
                        var replyImgID = $(this).parent().parent().parent().parent().find(".insert:eq(0)").attr("id");
                        var reactImg = $(this).parent().parent().parent().parent().find(".insert:eq(0)").find("img:eq(0)").attr("src");

                        //回复文字
                        if ($("#"+totalId).find(".wenzi-react-word").length != 0){

                            //发送数据
                            $.ajax(
                                {
                                    url:"http://testb.uoffer.net/api/replymanage",
                                    type:"post",
                                    data:{
                                        condition:{
                                            msgType: 'text',
                                            ruleName: ruleName,
                                            keywords: keyWords.join('|'),
                                            keywordsID: keywordsIds,
                                            replyID: replywordID,
                                            totalID : totalId,
                                        },
                                        reply: reactWord,
                                        ctrl: 'update'
                                    },
                                    success: function (data) {

                                    },
                                    error: function (e) {

                                    }
                                }
                            );
                        }
                        if ($("#"+totalId).find(".insert").length != 0){
                            //发送数据
                            $.ajax(
                                {
                                    url:"http://testb.uoffer.net/api/replymanage",
                                    type:"post",
                                    data:{
                                        condition:{
                                            msgType: 'text',
                                            ruleName: ruleName,
                                            keywords: keyWords.join('|'),
                                            keywordsID: keywordsIds,
                                            replyID: replyImgID,
                                            totalID : totalId,
                                        },
                                        reply: {
                                            replyType: "imgge",
                                            replyContent:  reactImg
                                        },
                                        ctrl: 'update'
                                    },
                                    success: function (data) {

                                    },
                                    error: function (e) {

                                    }
                                }
                            );
                        }

                        var firstRule = this.parentNode.parentNode.parentNode.parentNode;
                        //回复数量
                        firstRule.getElementsByClassName("wenzi-num")[0].innerText = firstRule.getElementsByClassName("res-wenzi")[0].innerText;
                        firstRule.getElementsByClassName("tupian-num")[0].innerText = firstRule.getElementsByClassName("res-tupian")[0].innerText;
                        firstRule.getElementsByClassName("yuyin-num")[0].innerText = firstRule.getElementsByClassName("res-yuyin")[0].innerText;
                        firstRule.getElementsByClassName("shiping-num")[0].innerText = firstRule.getElementsByClassName("res-shipin")[0].innerText;
                        firstRule.getElementsByClassName("tuwen-num")[0].innerText = firstRule.getElementsByClassName("res-tuwen")[0].innerText;
                        firstRule.getElementsByClassName("total-num")[0].innerText = parseInt(firstRule.getElementsByClassName("wenzi-num")[0].innerText) + parseInt(firstRule.getElementsByClassName("tupian-num")[0].innerText) + parseInt(firstRule.getElementsByClassName("yuyin-num")[0].innerText) + parseInt(firstRule.getElementsByClassName("shiping-num")[0].innerText) + parseInt(firstRule.getElementsByClassName("tuwen-num")[0].innerText);

                        //把关键字放到简版上
                        var addKeyId = e.target.parentNode.parentNode.parentNode.parentNode.id;
                        var addKey = document.getElementById(addKeyId);

                        //清除简版上已有的关键字
                        var keyTotalWord = addKey.getElementsByClassName("key-total-word")[0];
                        while (keyTotalWord.hasChildNodes()) {
                            keyTotalWord.removeChild(keyTotalWord.firstChild);
                        }

                        var keyWords = addKey.getElementsByClassName("add-key-word");
                        for (var i = 0; i < keyWords.length; i++) {
                            var span = document.createElement("span");
                            span.style.marginRight = "20px";
                            span.innerText = keyWords[i].innerText.split("关")[0];
                            keyTotalWord.appendChild(span);
                        }
                    }
                }
            }
    },
    del: function () {
        var delButton = document.getElementsByClassName("del");
        for (var i=0;i<delButton.length;i++){
            delButton[i].addEventListener("click",function (e) {

                var ruleName = $(this).parent().parent().parent().parent().find(".con:eq(0)").val();
                var keyWord = $(this).parent().parent().parent().parent().find(".add-key-word").find(".key-word-con");
                var keyWords = [];
                var keyWordId = $(this).parent().parent().parent().parent().find(".add-key-word");
                var keywordsIds = [];

                for (var g=0;g<keyWordId.length;g++) {
                    keywordsIds.push(keyWordId[g].getAttribute("id"));
                }

                for (var i=0;i<keyWord.length;i++){
                    keyWords.push(keyWord[i].innerText);
                }
                var replyID = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").attr("id");

                // var reactWord = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").find(".key-word-con:eq(0)").text();
                var totalId = this.parentNode.parentNode.parentNode.parentNode.id;

                //发送删除消息
                $.ajax({
                    url:"http://testb.uoffer.net/api/replymanage",
                    type:"post",
                    data:{
                        condition:{
                            msgType: 'text',
                            ruleName: ruleName,
                            keywords: keyWords.join('|'),
                            keywordsID: keywordsIds,
                            replyID: replyID,
                            totalID : totalId,
                        },
                        ctrl: 'delete'
                    }
                })

                var parent = $(this).parent().parent().parent().parent();
                if (document.getElementsByClassName("rule").length > 1){
                    parent.remove();
                }else {
                    parent.find(".con:eq(0)").val("");
                    parent.find(".add-key-word").remove();
                    parent.find(".wenzi-react-word").remove();
                    parent.find(".insert").remove();

                    //删除数字
                    parent.find(".res-wenzi:eq(0)").text(0);
                    parent.find(".res-tupian:eq(0)").text(0);
                    parent.find(".res-yuyin:eq(0)").text(0);
                    parent.find(".res-shipin:eq(0)").text(0);
                    parent.find(".res-tuwen:eq(0)").text(0);

                    //删除简版
                    parent.find(".key-total-word").html("");
                    parent.find(".total-num:eq(0)").text(0);
                    parent.find(".wenzi-num:eq(0)").text(0);
                    parent.find(".tupian-num:eq(0)").text(0);
                    parent.find(".yuyin-num:eq(0)").text(0);
                    parent.find(".shipin-num:eq(0)").text(0);
                    parent.find(".tuwen-num:eq(0)").text(0);
                }
            })
        }
    },
    addRule :function ()    {
        document.getElementsByClassName("add-rule")[0].onclick = function () {
            //显示所点击的保存第一个为新生成的rule，不用变成简版
            document.getElementsByClassName("total-res")[0].style.display = "none";
            document.getElementsByClassName("total-rule")[0].style.display = "inline-block";
            //下面所有的要变成简版
            //在下面生成新的规则节点再设置下面的变成简版
            //再创建一个新加规则的框
            var cloneRule = document.getElementsByClassName("rule")[0].cloneNode(true);
            cloneRule.id = ++ruleIdMin;
            //点击克隆出来的rule的保存按钮
            cloneRule.getElementsByClassName("rule-save")[0].onclick = function (e) {
                if ($('#'+cloneRule.id).find(".con:eq(0)").val() == "") {
                    alert("请输入规则名");
                }else if ($('#'+cloneRule.id).find(".add-key-word").length == 0){
                    alert("请输入关键字");
                } else {

                    var ruleName = $(this).parent().parent().parent().parent().find(".con:eq(0)").val();

                    var keyWord = $(this).parent().parent().parent().parent().find(".add-key-word").find(".key-word-con");
                    var keyWords = [];
                    var keyWordId = $(this).parent().parent().parent().parent().find(".add-key-word");
                    var keywordsIds = [];

                    for (var g=0;g<keyWordId.length;g++) {
                        keywordsIds.push(keyWordId[g].getAttribute("id"));
                    }

                    for (var i=0;i<keyWord.length;i++){
                        keyWords.push(keyWord[i].innerText);
                    }
                    var replyID = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").attr("id");

                    var reactWord = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").find(".key-word-con:eq(0)").text();
                    var totalId = this.parentNode.parentNode.parentNode.parentNode.id;

                    //发送数据
                    $.ajax(
                        {
                            url:"http://testb.uoffer.net/api/replymanage",
                            type:"post",
                            data:{
                                condition:{
                                    msgType: 'text',
                                    ruleName: ruleName,
                                    keywords: keyWords.join('|'),
                                    keywordsID: keywordsIds,
                                    replyID: replyID,
                                    totalID : totalId,
                                },
                                reply: reactWord,
                                ctrl: 'update'
                            },
                            success: function (data) {

                            },
                            error: function (e) {

                            }
                        }
                    );

                    //回复数量
                    cloneRule.getElementsByClassName("wenzi-num")[0].innerText = cloneRule.getElementsByClassName("res-wenzi")[0].innerText;
                    cloneRule.getElementsByClassName("tupian-num")[0].innerText = cloneRule.getElementsByClassName("res-tupian")[0].innerText;
                    cloneRule.getElementsByClassName("yuyin-num")[0].innerText = cloneRule.getElementsByClassName("res-yuyin")[0].innerText;
                    cloneRule.getElementsByClassName("shiping-num")[0].innerText = cloneRule.getElementsByClassName("res-shipin")[0].innerText;
                    cloneRule.getElementsByClassName("tuwen-num")[0].innerText = cloneRule.getElementsByClassName("res-tuwen")[0].innerText;
                    cloneRule.getElementsByClassName("total-num")[0].innerText = parseInt(cloneRule.getElementsByClassName("wenzi-num")[0].innerText) + parseInt(cloneRule.getElementsByClassName("tupian-num")[0].innerText) + parseInt(cloneRule.getElementsByClassName("yuyin-num")[0].innerText) + parseInt(cloneRule.getElementsByClassName("shiping-num")[0].innerText) + parseInt(cloneRule.getElementsByClassName("tuwen-num")[0].innerText);

                    //把关键字放到简版上
                    var addKeyId = e.target.parentNode.parentNode.parentNode.parentNode.id;
                    var addKey = document.getElementById(addKeyId);

                    //清除简版上已有的关键字
                    var keyTotalWord = addKey.getElementsByClassName("key-total-word")[0];
                    while (keyTotalWord.hasChildNodes()){
                        keyTotalWord.removeChild(keyTotalWord.firstChild);
                    }

                    var keyWords = addKey.getElementsByClassName("add-key-word");
                    for (var i=0;i<keyWords.length;i++){
                        var span = document.createElement("span");
                        span.style.marginRight = "20px";
                        span.innerText = keyWords[i].innerText.split("关键字")[0];
                        addKey.getElementsByClassName("key-total-word")[0].appendChild(span);
                    }
                }

            }
            //点击添加新加规则的“关键字连接”出现蒙版
            cloneRule.getElementsByClassName("add-key-item")[0].onclick = function (e) {
                document.getElementsByClassName("menbang")[0].style.display = "inline-block";
                document.getElementsByClassName("dialog-wenzi")[0].innerText = "";
                //为点击“添加关键字”模板的确认按钮
                var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                var keyWordBroad = new keyWordBorad();
                keyWordBroad.Save(id);
                keyWordBroad.cancel();
                keyWordBroad.close();
                keyWordBroad.wordNum();
            }

            //点击删除按钮
            cloneRule.getElementsByClassName("del")[0].onclick = function (e) {
                var ruleName = $(this).parent().parent().parent().parent().find(".con:eq(0)").val();
                var keyWord = $(this).parent().parent().parent().parent().find(".add-key-word").find(".key-word-con");
                var keyWords = [];
                var keyWordId = $(this).parent().parent().parent().parent().find(".add-key-word");
                var keywordsIds = [];
                for (var g=0;g<keyWordId.length;g++) {
                    keywordsIds.push(keyWordId[g].getAttribute("id"));
                }
                for (var i=0;i<keyWord.length;i++){
                    keyWords.push(keyWord[i].innerText);
                }
                var replyID = $(this).parent().parent().parent().parent().find(".wenzi-react-word:eq(0)").attr("id");
                var totalId = this.parentNode.parentNode.parentNode.parentNode.id;
                //发送删除消息
                $.ajax({
                    url:"http://testb.uoffer.net/api/replymanage",
                    type:"post",
                    data:{
                        condition:{
                            msgType: 'text',
                            ruleName: ruleName,
                            keywords: keyWords.join('|'),
                            keywordsID: keywordsIds,
                            replyID: replyID,
                            totalID : totalId,
                        },
                        ctrl: 'delete'
                    }
                })
                var parent = $(cloneRule.getElementsByClassName("del")[0].parentNode.parentNode.parentNode.parentNode);
                if (document.getElementsByClassName("rule").length > 1){
                    parent.remove();
                }else {
                    parent.find(".con:eq(0)").val("");
                    parent.find(".add-key-word").remove();
                    parent.find(".wenzi-react-word").remove();
                    parent.find(".insert").remove();

                    //删除数字
                    parent.find(".res-wenzi:eq(0)").text(0);
                    parent.find(".res-tupian:eq(0)").text(0);
                    parent.find(".res-yuyin:eq(0)").text(0);
                    parent.find(".res-shipin:eq(0)").text(0);
                    parent.find(".res-tuwen:eq(0)").text(0);

                    //删除简版
                    parent.find(".key-total-word").html("");
                    parent.find(".total-num:eq(0)").text(0);
                    parent.find(".wenzi-num:eq(0)").text(0);
                    parent.find(".tupian-num:eq(0)").text(0);
                    parent.find(".yuyin-num:eq(0)").text(0);
                    parent.find(".shipin-num:eq(0)").text(0);
                    parent.find(".tuwen-num:eq(0)").text(0);
                }
            }

            //点击添加新规则的“回复文字”出现蒙版
            cloneRule.getElementsByClassName("wenzi-change")[0].onclick = function (e) {

                if(cloneRule.getElementsByClassName("wenzi-react-word").length == 0 && cloneRule.getElementsByClassName("insert").length == 0){
                    document.getElementsByClassName("dialog-wenzi")[1].innerText = "";
                    document.getElementsByClassName("menbang")[1].style.display = "inline-block";

                    //为点击确认“回复文字”添加模板的按钮
                    var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

                    var replyWordBroad = new replyWordBroud();
                    replyWordBroad.save(id);
                    replyWordBroad.cancel();
                    replyWordBroad.close();
                    replyWordBroad.wordNum();
                }
                else {
                    alert("请先删除掉原来的文字或图片回复.");
                }

            }

            //点击添加新规则的“回复图片”出现蒙版
            cloneRule.getElementsByClassName("img-change")[0].onclick = function (e) {

                if (cloneRule.getElementsByClassName("wenzi-react-word").length == 0 && cloneRule.getElementsByClassName("insert").length == 0){

                }else {
                    alert("请先删除掉原来的文字或图片回复");
                }

            }

            //点击新加关键字的确定按钮时要添加的是当前规则里的关键字
            var addRule = document.getElementsByClassName("add-rule")[0];
            $(addRule).after(cloneRule);

            //把克隆里节点的内容全部清空
            var totalRule = document.getElementsByClassName("rule")[0].getElementsByClassName("total-rule")[0];
            //清除关键字
            var keyWords = totalRule.getElementsByClassName("key-word");
            clearCloneKeyRec = keyWords.length;
            for (var i = 0; i < clearCloneKeyRec; i++) {
                keyWords[0].parentNode.removeChild(keyWords[0]);
            }

            //清除克隆出来的规则名
            var ruleName = document.getElementsByClassName("rule")[0].getElementsByClassName("con")[0];
            ruleName.value = "";

            //清除里面的回复图片
            $(cloneRule.getElementsByClassName("insert")).remove();

            //所有数字置0
            var em = document.getElementsByClassName("rule")[0].getElementsByTagName("em");
            for (var g = 0; g < em.length; g++) {
                em[g].innerText = 0;
            }
            //将简版里的关键字清除
            var parentNode = cloneRule.getElementsByClassName("key-total-word")[0];
            while (parentNode.hasChildNodes()){
                parentNode.removeChild(parentNode.firstChild);
            }

            rulrItem = document.getElementsByClassName("rule");

            //把下面旧规则变成简版
            for (var p = 1; p < rulrItem.length; p++) {
                document.getElementsByClassName("total-res")[p].style.display = "inline-block";
                document.getElementsByClassName("total-rule")[p].style.display = "none";
            }

            for (var o = 0; o < rulrItem.length; o++) {
                document.getElementsByClassName("rule-item")[o].onclick = function () {

                    if (this.parentNode.getElementsByClassName("total-res")[0].style.display == "none") {

                        this.parentNode.getElementsByClassName("total-res")[0].style.display = "inline-block";
                        this.parentNode.getElementsByClassName("total-rule")[0].style.display = "none";
                    } else {

                        this.parentNode.getElementsByClassName("total-res")[0].style.display = "none";
                        this.parentNode.getElementsByClassName("total-rule")[0].style.display = "inline-block";
                    }
                }

            }
        }
    },
    simpleRule : function () {
        for (var o = 0; o < rulrItem.length; o++) {
            document.getElementsByClassName("rule-item")[o].onclick = function () {
                if (this.parentNode.getElementsByClassName("total-res")[0].style.display == "none") {
                    this.parentNode.getElementsByClassName("total-res")[0].style.display = "inline-block";
                    this.parentNode.getElementsByClassName("total-rule")[0].style.display = "none";
                } else {
                    this.parentNode.getElementsByClassName("total-res")[0].style.display = "none";
                    this.parentNode.getElementsByClassName("total-rule")[0].style.display = "inline-block";
                }
            }

        }
    },

    //数据加载后
    editKeyWord: function () {
        var changeWord = document.getElementsByClassName("save-key-change");
        var id;
        for (var i=0;i<changeWord.length;i++){
            changeWord[i].addEventListener("click",function (e) {

                //为点击“添加关键字”模板的按钮
                // var id = e.target.parentNode.parentNode.parentNode.parentNode.id;
                var keyWordBroad = new keyWordBorad();
                // keyWordBroad.Save(id);
                keyWordBroad.cancel();
                keyWordBroad.close();
                keyWordBroad.wordNum();

                $(".dialog-header:eq(0)").find("p:eq(0)").text("添加关键字");
                var parentID = id = this.parentNode.parentNode.id;

                $(".dialog-wenzi:eq(0)").text($(document.getElementById(parentID)).find(".key-word-con:eq(0)").text());
                $(".menbang:eq(0)").attr("style","display:inline-block");


                //点击蒙版确定
                document.getElementsByClassName("save")[0].onclick = function (e) {
                    $(document.getElementById(id)).find(".key-word-con").text(document.getElementsByClassName("dialog-wenzi")[0].innerText);
                    document.getElementsByClassName("menbang")[0].style.display = "none";
                }
            })
        }
    },

    editReplyWord: function () {
        var editReplyWord = document.getElementsByClassName("save-reply-change-word");
        var id;
        for (var i=0;i<editReplyWord.length;i++){
            editReplyWord[i].addEventListener("click",function (e) {
                var replyWordBoard = new replyWordBroud();
                replyWordBoard.close();
                replyWordBoard.cancel();
                replyWordBoard.wordNum();

                $(".dialog-header:eq(1)").find("p:eq(0)").text("添加关键字");
                var parentID = id = this.parentNode.parentNode.id;

                $(".dialog-wenzi:eq(1)").text($(document.getElementById(parentID)).find(".key-word-con:eq(0)").text());
                $(".menbang:eq(1)").attr("style","display:inline-block");

                document.getElementsByClassName("save-wenzi")[0].onclick = function (e) {

                    $(document.getElementById(id)).find(".key-word-con").text(document.getElementsByClassName("dialog-wenzi")[1].innerText);
                    document.getElementsByClassName("menbang")[1].style.display = "none";
                }

            })
        }

    },

    delReplyWord: function () {
        var wenziDelWord = document.getElementsByClassName("wenzi-del-word");
        for (var i=0;i<wenziDelWord.length;i++){
            wenziDelWord[i].addEventListener("click",function (e) {
                var parentID = e.target.parentNode.parentNode.id;
                var wenziNum = e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("res-wenzi")[0].innerText;
                e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("res-wenzi")[0].innerText = wenziNum - 1;
                $("#"+parentID).remove();
            })
        }
    },

    delReplyImg: function () {
        var saveImg = document.getElementsByClassName("save-img");
        for (var i=0;i<saveImg.length;i++){
            saveImg[i].addEventListener("click",function (e) {
                var id = e.target.parentNode.parentNode.id;
                var ruleId = e.target.parentNode.parentNode.parentNode.parentNode.id;
                document.getElementById(ruleId).getElementsByClassName("res-tupian")[0].innerText = parseInt( document.getElementById(ruleId).getElementsByClassName("res-tupian")[0].innerText) - 1;
                $("#"+id+"").remove();
            })
        }
    }
}
