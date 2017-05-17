/**
 * Created by Lenovo on 2017/5/10.
 */
var addMeun = function () {

};

addMeun.prototype = {
    add: function () {
        var addMeun = document.getElementsByClassName("add-menu")[0];
        var menuType = /menu-type/g
        addMeun.onclick = function (e) {
            var code = '<section> <div class="menu-form"> <div class="meun-info"> <span class="menu-name">菜单</span> <div class="menu-opra"> <a href="javascript:void(0)" class="menu-del">删除菜单</a> <a href="javascript:void(0)" class="menu-del add-submenu">添加子菜单</a> </div> </div> <div class="menu-con" style="display: inline-block"> <div class="menu-name-con"> <label>菜单名称</label> <div class="input-tip"> <span> <input type="text" class="con"> </span> <p>文字不超过4个汉字或8个字母</p> </div> </div> <div class="menu-con-board"> <div class="menu-reply-type" > <label>菜单内容</label> <div class="reply-type"> <label><input type="radio" name="menu-type" checked>发送消息</label> <label><input type="radio" name="menu-type">跳转网页</label> <label><input type="radio" name="menu-type">跳小程序</label> </div> </div> <div class="menu-reply-con"> <div class="reply-type-con"> <nav> <a href="javascript:void(0)" class="tuwen-reply"> <i class="tuwen-img tuwen-img-click">&nbsp;&nbsp;&nbsp;&nbsp;</i> <span>图文信息</span> </a> <a href="javascript:void(0)" class="wenzi-reply"> <i class="wenzi-img">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> <span>文字(不超30字)</span> </a> <a href="javascript:void(0)" class="tupian-reply"> <i class="tupian-img">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> <span>图片</span> </a> </nav> </div> <div class="tuwen-con" style="display: inline-block"> <div class="tuwen-con-tittle"> <label>标题：<input type="text" class="tuwen-tittle-text"></label> </div> <div class="tuwen-con-img"> <label>图片： <div class="tuwen-img-select"> <a href="javascript:void (0)">从素材库中选择</a><br> </div> </label> <div class="tuwen-picture" style="display: none"> <img class="tuwen-preview" src="" alt="" name="tuwen-pic" style="width: 100px;" /> <a href="javascript:void (0)" class="tuwen-delete">删除</a> </div> </div> <div class="tuwen-con-summary"> <label><span>简介：</span><textarea cols="23" rows="4"></textarea></label> </div> <div class="tuwen-con-url"> <label>url：<input type="text"></label> </div> </div> <div class="wenzi-con" contenteditable="true" style="display:none;"> </div> <div class="tupian-con" style="display:none;"> <div class="sucai-div"> <span class="tittle">从素材库中选择</span> </div> <div class="tuwen-img-picture" style="display: none;margin-top: 20px;margin-left: 20px"> <img class="tuwen-img-preview" style="width: 100px"> <a href="javascript:void (0)" class="tuwen-img-delete" style="color: #576477">删除</a> </div> </div> </div> </div> <div class="menu-button"> <button class="menu-save">保存</button> </div> </div> </div> </section>';
            var menuForm = document.getElementsByClassName("menu-form");

            if (menuForm.length == 0){

                $(document.body).append(code.replace(menuType,"menu-type1"));
                var addSub = document.getElementsByClassName("add-submenu");
                for (var i=0;i<addSub.length;i++){
                    addSub[i].removeEventListener("click",clickEvent);
                }
                var menu = new Menu();
                menu.addSubmenu();
                menu.simple();
                menu.replyTupian();
                menu.replyWord();
                menu.replyTuwen();
                menu.showImgMen();
                menu.delete();
                menu.save();

            }else if (menuForm.length == 1){
                $(document.body).append(code.replace(menuType,"menu-type2"));

                var addSub = document.getElementsByClassName("add-submenu");
                for (var i=0;i<addSub.length;i++){
                    addSub[i].removeEventListener("click",clickEvent);
                }
                var menu = new Menu();
                menu.addSubmenu();
                menu.simple();
                menu.replyTupian();
                menu.replyWord();
                menu.replyTuwen();
                menu.showImgMen();
                menu.delete();
                menu.save();

            }else if (menuForm.length == 2){
                $(document.body).append(code.replace(menuType,"menu-type3"));

                var addSub = document.getElementsByClassName("add-submenu");
                for (var i=0;i<addSub.length;i++){
                    addSub[i].removeEventListener("click",clickEvent);
                }
                var menu = new Menu();
                menu.addSubmenu();
                menu.simple();
                menu.replyTupian();
                menu.replyWord();
                menu.replyTuwen();
                menu.showImgMen();
                menu.delete();
                menu.save();

            }else {
                alert("菜单数目已达上限");
            }
        }
    }
}

var addMeun = new addMeun();
addMeun.add();