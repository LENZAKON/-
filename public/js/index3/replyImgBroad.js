/**
 * Created by Lenovo on 2017/4/21.
 */
function replyImgBroad() {

}
var imgIdNumMin = 3000;
var imgReact = document.getElementsByClassName("insert");
for (var i=0;i<imgReact.length;i++){
    imgIdNumMin = Math.max(imgIdNumMin,parseInt(imgReact[i].getAttribute("id")));
}


replyImgBroad.prototype = {
    state: function () {
        //图片数量
        $(".list:eq(0)").find("span:eq(0)").text($(".window-right-img").length);

        document.getElementsByClassName("menbang")[2].style.display = "inline-block";
        document.getElementsByClassName("window")[0].style.display = "inline-block";

        document.getElementsByClassName("img-res-can")[0].onclick = function () {
            document.getElementsByClassName("img-menbang")[0].style.display = "none";
        }

        document.getElementsByClassName("close-menbang")[2].onclick = function () {
            document.getElementsByClassName("img-menbang")[0].style.display = "none";
        }

    },
    select: function () {
        $(".window-right:eq(0)").click(function (e) {
            var target = e.target;
            var $hasChoNum = $(".has-cho-num:eq(0)");
            if ($hasChoNum.text() != 0){
                $(".has-cho-num:eq(0)").text("0");
            }
            if (target.nodeName == "IMG"){
                //修改显示的图片的数量
                $hasChoNum.text(parseInt($(".has-cho-num:eq(0)").text())+1);
            }else {
                $hasChoNum.text(0);
                var $resQue = $(".res-que:eq(0)");
                $resQue.attr("class","res-que");
            }
            var $rightImg = $(".window-right-img");
            $rightImg.each(function () {
                $(this).attr("class","window-right-img");
            })
            if (target.className == "window-right-img"){
                target.className = target.className + " w-r-i-select";
            }
            $rightImg.each(function () {
                if ($(this).attr("class") != "window-right-img"){
                    $(".res-que:eq(0)").attr("class","res-que res-que-que");
                }
            })
        });
    },
    save: function (id) {
        document.getElementsByClassName("res-que")[0].onclick = function () {

            var $rightImg = $(".w-r-i-select");
            if ($rightImg.length != 0){
                var imgDiv = $("<div class='insert' id='"+(++imgIdNumMin)+"'><div class='img-insert'><img src='"+$rightImg.attr("src")+"' class='img-insert-pic'><a href='javascript:void (0)' class='img-insert-pic-a'>删除</a><div></div>");
                var index = $(document.getElementById(id)).find(".rule-res:eq(0)");
                imgDiv.insertBefore(index);
                $(".img-menbang:eq(0)").css("display","none");
                //更新图片数量
                $(document.getElementById(id)).find(".res-tupian:eq(0)").text(parseInt($(document.getElementById(id)).find(".res-tupian:eq(0)").text())+1);

                //点击删除
                var deletePic = document.getElementsByClassName("img-insert-pic-a");
                for (var i = 0;i<deletePic.length;i++){
                    deletePic[i].onclick = function (e) {
                        var id = e.target.parentNode.parentNode.id;
                        var ruleId = e.target.parentNode.parentNode.parentNode.parentNode.id;
                        document.getElementById(ruleId).getElementsByClassName("res-tupian")[0].innerText = parseInt( document.getElementById(ruleId).getElementsByClassName("res-tupian")[0].innerText) - 1;
                        $("#"+id+"").remove();
                    }
                }
            }else {
                alert("请选择一张图片");
            }
        };
    }
}