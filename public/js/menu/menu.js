/**
 * Created by Lenovo on 2017/4/30.
 */
function Menu() {

}
var inputNameSel;
function clickEvent(e) {

        //length == ? 的公共部分
        var target = e.target;
        var menuBroad = target.parentNode.parentNode.parentNode;
        var submenu = menuBroad.getElementsByClassName("submenu-con");

        //为后面渲染后再点击添加子菜单判断需不需要
        if (menuBroad.getElementsByClassName("menu-con-board").length == 1){
            menuBroad.getElementsByClassName("menu-con-board")[0].style.display = "none";
        }

        var menuButton = menuBroad.getElementsByClassName("menu-button")[0];

        if (submenu.length == 0){
            var $addTipe = $("<div class='add-tipe'>已添加子菜单，仅可设置菜单名称。</div>")
            $addTipe.insertBefore(menuButton);

            var conBoard = new ConBoard();
            var subMenu = conBoard.boardCode;
            //替换input type=radio的name的值
            var inputName = /sub1-menu-type/g;
            // if (inputNameSel == 0){
            //     // //动态修改name
            //     // var subCon = document.getElementsByClassName("submenu-con");
            //     // for (var i=0;i<subCon.length;i++){
            //     //     alert($(subCon[i]).find("inpyt[type=radio]:eq(0)").attr("name"));
            //     // }
            //     var subMenuType = "sub"+parseInt(Math.random()*10000)+"-menu-type"
            //     $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);
            //
            //     // $((subMenu()+"").replace(inputName,"sub1-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 1){
            //
            //     // //动态修改name
            //     // var subCon = document.getElementsByClassName("submenu-con");
            //     // for (var i=0;i<subCon.length;i++){
            //     //     alert($(subCon[i]).find("inpyt[type=radio]:eq(0)").attr("name"));
            //     // }
            //     var subMenuType = "sub"+parseInt(Math.random()*10000)+"-menu-type"
            //     $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);
            //
            //     // $((subMenu()+"").replace(inputName,"sub6-menu-type")).insertBefore(menuButton);
            // }else if ( inputNameSel == 2){
            //     var subMenuType = "sub"+parseInt(Math.random()*10000)+"-menu-type"
            //     $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);
            //
            //     // $((subMenu()+"").replace(inputName,"sub11-menu-type")).insertBefore(menuButton);
            // }

            var subMenuType = "sub"+parseInt(Math.random()*100000)+"-menu-type"
            $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);


        }else if (submenu.length == 1){
            var conBoard = new ConBoard();
            var subMenu = conBoard.boardCode;

            //替换input type=radio的name的值
            var inputName = /sub1-menu-type/g;
            // if (inputNameSel ==0){
            //     $((subMenu()+"").replace(inputName,"sub2-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 1){
            //     $((subMenu()+"").replace(inputName,"sub7-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 2){
            //     $((subMenu()+"").replace(inputName,"sub12-menu-type")).insertBefore(menuButton);
            // }
            var subMenuType = "sub"+parseInt(Math.random()*100000)+"-menu-type"
            $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);


        }else if (submenu.length == 2){
            var conBoard = new ConBoard();
            var subMenu = conBoard.boardCode;

            //替换input type=radio的name的值
            var inputName = /sub1-menu-type/g;
            // if (inputNameSel ==0){
            //     $((subMenu()+"").replace(inputName,"sub3-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 1){
            //     $((subMenu()+"").replace(inputName,"sub8-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 2){
            //     $((subMenu()+"").replace(inputName,"sub13-menu-type")).insertBefore(menuButton);
            // }
            var subMenuType = "sub"+parseInt(Math.random()*100000)+"-menu-type"
            $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);


        }else if (submenu.length == 3){
            var conBoard = new ConBoard();
            var subMenu = conBoard.boardCode;

            //替换input type=radio的name的值
            var inputName = /sub1-menu-type/g;
            // if (inputNameSel ==0){
            //     $((subMenu()+"").replace(inputName,"sub4-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 1){
            //     $((subMenu()+"").replace(inputName,"sub9-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 2){
            //     $((subMenu()+"").replace(inputName,"sub14-menu-type")).insertBefore(menuButton);
            // }
            var subMenuType = "sub"+parseInt(Math.random()*100000)+"-menu-type"
            $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);

        }else if (submenu.length == 4){
            var conBoard = new ConBoard();
            var subMenu = conBoard.boardCode;

            //替换input type=radio的name的值
            var inputName = /sub1-menu-type/g;

            // if (inputNameSel ==0){
            //     $((subMenu()+"").replace(inputName,"sub5-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 1){
            //     $((subMenu()+"").replace(inputName,"sub10-menu-type")).insertBefore(menuButton);
            // }else if (inputNameSel == 2){
            //     $((subMenu()+"").replace(inputName,"sub15-menu-type")).insertBefore(menuButton);
            // }
            var subMenuType = "sub"+parseInt(Math.random()*100000)+"-menu-type"
            $((subMenu()+"").replace(inputName,subMenuType)).insertBefore(menuButton);

        }else {
            alert("子菜单数目已达上限");
        }

    var menuDelSub = new Menu();
    menuDelSub.delSubmenu();
    menuDelSub.showImgMen();
    menuDelSub.replyTuwen();
    menuDelSub.replyWord();
    menuDelSub.replyTupian();
    menuDelSub.delete();

};

Menu.prototype = {
    delSubmenu: function () {
        var delSub = document.getElementsByClassName("del-submenu");
        for (var i=0;i<delSub.length;i++){
            delSub[i].onclick = function (e) {
                var target = e.target;
                var subConLen = target.parentNode.parentNode.getElementsByClassName("submenu-con").length;
                if (subConLen != 1){
                    $(target.parentNode).remove();
                }else if (subConLen == 1){
                    //显示主菜单输入面板
                    var menuBroad = target.parentNode.parentNode;
                    menuBroad.getElementsByClassName("menu-con-board")[0].style.display = "inline-block";

                    //删除已有子菜单提示及子菜单面板
                    var addTipe = menuBroad.getElementsByClassName("add-tipe")[0];
                    $(addTipe).remove();
                    $(target.parentNode).remove();
                }
            }
        }
    },

    replyWord: function () {
        var wenziReply = document.getElementsByClassName("wenzi-reply");
        for (var i=0;i<wenziReply.length;i++){
            wenziReply[i].onclick = function (e) {
                var target = e.target;
                var replyBoard = target.parentNode.parentNode.parentNode.parentNode;

                replyBoard.getElementsByClassName("wenzi-con")[0].style.display = "inline-block";
                replyBoard.getElementsByClassName("tuwen-con")[0].style.display = "none";
                replyBoard.getElementsByClassName("tupian-con")[0].style.display = "none";

                $(replyBoard.getElementsByClassName("wenzi-con")[0]).focus();
                //修改图标
                target.parentNode.parentNode.getElementsByClassName("wenzi-img")[0].className = "wenzi-img wenzi-img-click";
                target.parentNode.parentNode.getElementsByClassName("tuwen-img")[0].className = "tuwen-img";
                target.parentNode.parentNode.getElementsByClassName("tupian-img")[0].className = "tupian-img";
            }
        }
    },

    replyTuwen: function () {
        var tuwenReply = document.getElementsByClassName("tuwen-reply");
        for (var i=0;i<tuwenReply.length;i++){
            tuwenReply[i].onclick = function (e) {
                var target = e.target;
                var replyBoard = target.parentNode.parentNode.parentNode.parentNode;

                replyBoard.getElementsByClassName("wenzi-con")[0].style.display = "none";
                replyBoard.getElementsByClassName("tuwen-con")[0].style.display = "inline-block";
                replyBoard.getElementsByClassName("tupian-con")[0].style.display = "none";

                //修改图标
                target.parentNode.parentNode.getElementsByClassName("wenzi-img")[0].className = "wenzi-img";
                target.parentNode.parentNode.getElementsByClassName("tuwen-img")[0].className = "tuwen-img tuwen-img-click";
                target.parentNode.parentNode.getElementsByClassName("tupian-img")[0].className = "tupian-img";
            }
        }
    },

    replyTupian: function () {
        var tupianReply = document.getElementsByClassName("tupian-reply");
        for (var i=0;i<tupianReply.length;i++){
            tupianReply[i].onclick = function (e) {
                var target = e.target;
                var replyBoard = target.parentNode.parentNode.parentNode.parentNode;

                replyBoard.getElementsByClassName("wenzi-con")[0].style.display = "none";
                replyBoard.getElementsByClassName("tuwen-con")[0].style.display = "none";
                replyBoard.getElementsByClassName("tupian-con")[0].style.display = "inline-block";

                //修改图标
                target.parentNode.parentNode.getElementsByClassName("wenzi-img")[0].className = "wenzi-img";
                target.parentNode.parentNode.getElementsByClassName("tuwen-img")[0].className = "tuwen-img";
                target.parentNode.parentNode.getElementsByClassName("tupian-img")[0].className = "tupian-img tupian-img-click";

            }
        }
    },

    save: function () {
        var menuSave = document.getElementsByClassName("menu-save");
        for (var i=0;i<menuSave.length;i++){
            menuSave[i].onclick = function (e) {
                var target = e.target;
                //判断回复的是图文还是文字还是图片
                var menuCon = target.parentNode.parentNode.getElementsByClassName("menu-con");
                if (menuCon.length == 0){

                    var tuwenCon = target.parentNode.parentNode.getElementsByClassName("tuwen-con")[0];
                    var wenziCon = target.parentNode.parentNode.getElementsByClassName("wenzi-con")[0];
                    var tupianCon = target.parentNode.parentNode.getElementsByClassName("tupian-con")[0];
                    var complete = true;

                    var con = target.parentNode.parentNode.getElementsByClassName("con");
                    for (var g=0;g<con.length;g++){
                        if (con[g].value == ""){
                            complete = false;
                        }
                    }
                    if (tuwenCon.style.display == "inline-block"){
                        if (tuwenCon.getElementsByClassName("tuwen-con-tittle")[0].getElementsByClassName("tuwen-tittle-text")[0].value == "" ||
                            $(tuwenCon.getElementsByClassName("tuwen-con-img")[0].getElementsByClassName("tuwen-preview")[0]).attr("src") == "" ||
                            tuwenCon.getElementsByClassName("tuwen-con-summary-has-img")[0].getElementsByTagName("textarea")[0].value == "" ||
                            tuwenCon.getElementsByClassName("tuwen-con-url-has-img")[0].getElementsByTagName("input")[0].value == ""){
                            complete = false;
                        }

                    }else if (wenziCon.style.display == "inline-block"){
                        if (wenziCon.innerText == "" || wenziCon.innerText.length > 30){
                            complete = false;
                        }
                    }else if (tupianCon.style.display == "inline-block"){
                        if ($(tupianCon.getElementsByClassName("tuwen-img-picture")[0].getElementsByClassName("tuwen-img-preview")[0]).attr("src") == ""){
                            complete = false;
                        }
                    }
                    if (complete){

                        var mainMenu = target.parentNode.parentNode;
                        if (mainMenu.getElementsByClassName("tuwen-con")[0].style.display == "inline-block"){
                            var subMenuTit = mainMenu.getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                            var tuwenTit = mainMenu.getElementsByClassName("tuwen-con-tittle")[0].getElementsByClassName("tuwen-tittle-text")[0].value;
                            var tuwenImgUrl = mainMenu.getElementsByClassName("tuwen-con-img")[0].getElementsByClassName("tuwen-preview")[0].src;
                            var tuwenDes = mainMenu.getElementsByClassName("tuwen-con-summary-has-img")[0].getElementsByTagName("textarea")[0].value;
                            var tuwenUrl = mainMenu.getElementsByClassName("tuwen-con-url-has-img")[0].getElementsByTagName("input")[0].value;



                            $.ajax({
                                url:"",
                                type:"post",
                                data:{

                                },
                                success: function () {

                                },
                                error:function () {

                                }
                            })


                        }else if (mainMenu.getElementsByClassName("wenzi-con")[0].style.display == "inline-block"){
                            var subMenuTit = mainMenu.getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                            var wenziCon = mainMenu.getElementsByClassName("wenzi-con")[0].innerText;


                            $.ajax({
                                url:"",
                                type:"post",
                                data:{

                                },
                                success: function () {

                                },
                                error:function () {

                                }
                            })


                        }else if (mainMenu.getElementsByClassName("tupian-con")[0].style.display == "inline-block"){
                            var subMenuTit = mainMenu.getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                            var tupianUrl = mainMenu.getElementsByClassName("tupian-con")[0].getElementsByClassName("tuwen-img-preview")[0].src;
                            
                            $.ajax({
                                url:"",
                                type:"post",
                                data:{

                                },
                                success: function () {

                                },
                                error:function () {

                                }
                            })
                        }

                    }else {
                        alert("请按要求填写完整的菜单名称和回复内容");
                    }

                }else {
                    var complete = true;
                    var con = document.getElementsByClassName("con");
                    for (var g=0;g<con.length;g++){
                        if (con[g].value == ""){
                            complete = false;
                        }
                    }

                    for (var j=0;j<menuCon.length;j++){
                        var tuwenCon = menuCon[j].getElementsByClassName("tuwen-con")[0];
                        var wenziCon = menuCon[j].getElementsByClassName("wenzi-con")[0];
                        var tupianCon = menuCon[j].getElementsByClassName("tupian-con")[0];
                        if (tuwenCon.style.display == "inline-block"){
                            if (tuwenCon.getElementsByClassName("tuwen-con-tittle")[0].getElementsByClassName("tuwen-tittle-text")[0].value == "" ||
                                $(tuwenCon.getElementsByClassName("tuwen-con-img")[0].getElementsByClassName("tuwen-preview")[0]).attr("src") == "" ||
                                tuwenCon.getElementsByClassName("tuwen-con-summary-has-img")[0].getElementsByTagName("textarea")[0].value == "" ||
                                tuwenCon.getElementsByClassName("tuwen-con-url-has-img")[0].getElementsByTagName("input")[0].value == ""){
                                    complete = false;
                                }

                        }else if (wenziCon.style.display == "inline-block"){
                            if (wenziCon.innerText == "" || wenziCon.innerText.length > 30){
                                complete = false;
                            }
                        }else if (tupianCon.style.display == "inline-block"){
                            if ($(tupianCon.getElementsByClassName("tuwen-img-picture")[0].getElementsByClassName("tuwen-img-preview")[0]).attr("src") == ""){
                                complete = false;
                            }
                        }
                    }
                    if (complete){

                        var subMeun = target.parentNode.parentNode.getElementsByClassName("submenu-con");


                        for (var k=0;k<subMeun.length;k++){

                            if (subMeun[k].getElementsByClassName("tuwen-con")[0].style.display == "inline-block"){
                                var subMenuTit = subMeun[k].getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                                var tuwenTit = subMeun[k].getElementsByClassName("tuwen-con-tittle")[0].getElementsByClassName("tuwen-tittle-text")[0].value;
                                var tuwenImgUrl = subMeun[k].getElementsByClassName("tuwen-con-img")[0].getElementsByClassName("tuwen-preview")[0].src;
                                var tuwenDes = subMeun[k].getElementsByClassName("tuwen-con-summary-has-img")[0].getElementsByTagName("textarea")[0].value;
                                var tuwenUrl = subMeun[k].getElementsByClassName("tuwen-con-url-has-img")[0].getElementsByTagName("input")[0].value;

                                $.ajax({
                                    url:"",
                                    type:"post",
                                    data:{

                                    },
                                    success: function () {

                                    },
                                    error:function () {

                                    }
                                })


                            }else if (subMeun[k].getElementsByClassName("wenzi-con")[0].style.display == "inline-block"){
                                var subMenuTit = subMeun[k].getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                                var wenziCon = subMeun[k].getElementsByClassName("wenzi-con")[0].innerText;


                                $.ajax({
                                    url:"",
                                    type:"post",
                                    data:{

                                    },
                                    success: function () {

                                    },
                                    error:function () {

                                    }
                                })


                            }else if (subMeun[k].getElementsByClassName("tupian-con")[0].style.display == "inline-block"){
                                var subMenuTit = subMeun[k].getElementsByClassName("menu-name-con")[0].getElementsByClassName("con")[0].value;
                                var tupianUrl = subMeun[k].getElementsByClassName("tupian-con")[0].getElementsByClassName("tuwen-img-preview")[0].src;

                                $.ajax({
                                    url:"",
                                    type:"post",
                                    data:{

                                    },
                                    success: function () {

                                    },
                                    error:function () {

                                    }
                                })
                            }
                        }


                    }else {
                        alert("请按要求填写完整的菜单名称和回复信息");
                    }
                }

            }
        }
    },
    addSubmenu: function () {
        var addSub = document.getElementsByClassName("add-submenu");
        for (var i=0;i<addSub.length;i++){
            addSub[i].addEventListener("click",clickEvent);
            inputNameSel = i;
        }

    },
    delete: function () {
        var menuDel = document.getElementsByClassName("menu-del");
        for (var i=0;i<menuDel.length;i++){
            menuDel[i].onclick = function (e) {
                var target = e.target;
                $(target.parentNode.parentNode.parentNode).remove();
            }
        }
    },
    simple: function () {
        var meunInfo = document.getElementsByClassName("meun-info");
        for (var i=0;i<meunInfo.length;i++){
            meunInfo[i].onclick = function (e) {

                var target = e.target;
                var totalMenu = target.parentNode;

                if (e.target.className == "meun-info") {

                    //完全版变简版
                    if ($(totalMenu).find(".menu-con:eq(0)")[0].style.display != "none") {
                        $(target).find("a")[0].style.display = "none";
                        $(target).find("a")[1].style.display = "none";
                        $(totalMenu).find(".menu-con:eq(0)")[0].style.display = "none";
                    }
                    //简版变完全版
                    else if ($(totalMenu).find(".menu-con:eq(0)")[0].style.display == "none") {
                        $(target).find("a")[0].style.display = "inline-block";
                        $(target).find("a")[1].style.display = "inline-block";
                        $(totalMenu).find(".menu-con:eq(0)")[0].style.display = "inline-block";
                    }
                }
            }
        }
    },
    showImgMen: function () {
        var tuwenImgSelect = document.getElementsByClassName("tuwen-img-select");
        for (var i = 0;i<tuwenImgSelect.length;i++){
            tuwenImgSelect[i].onclick = function (e) {
                document.getElementsByClassName("menbang")[0].style.display = "inline-block";
                //显示图片素材库
                var imgBoard = new imgBroad();

                imgBoard.save(e);
                imgBoard.select();
                imgBoard.state();

            }
        }
        var tittle = document.getElementsByClassName("tittle");
        for(var i=0;i<tittle.length;i++){
            tittle[i].onclick = function (e) {
                document.getElementsByClassName("menbang")[0].style.display = "inline-block";
                //显示图片素材库
                var tuwenImgBoard = new imgBroad();
                tuwenImgBoard.save(e);
                tuwenImgBoard.select();
                tuwenImgBoard.state();
            }
        }
    },
    delImg: function () {
        var tuwenImgDel = document.getElementsByClassName("tuwen-delete");
        for (var i=0;i<tuwenImgDel.length;i++){
            tuwenImgDel[i].onclick = function (e) {
                var target = e.target;
                target.parentNode.parentNode.getElementsByClassName("tuwen-img-select")[0].style.display = "block";
                target.parentNode.parentNode.getElementsByClassName("tuwen-picture")[0].style.display = "none";
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-summary-has-img")[0].className = "tuwen-con-summary";
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-url-has-img")[0].className = "tuwen-con-url";
                $(e.target.parentNode.getElementsByClassName("tuwen-preview")[0]).attr("src","");
            }
        }
        var tupianImgDel = document.getElementsByClassName("tuwen-img-delete");
        for (var j=0;j<tupianImgDel.length;j++){
            tupianImgDel[j].onclick = function (e) {
                var target = e.target;
                target.parentNode.style.display = "none";
                $(target.parentNode.getElementsByClassName("tuwen-img-preview")[0]).attr("src","");
                target.parentNode.parentNode.getElementsByClassName("sucai-div")[0].style.display = "inline-block";
            }
        }
    }
}

var menu = new Menu();
menu.addSubmenu();
menu.simple();
menu.replyWord();
menu.replyTuwen();
menu.replyTupian();
menu.showImgMen();
menu.delSubmenu();
menu.delImg();
menu.delete();
menu.save();