/**
 * Created by Lenovo on 2017/4/21.
 */
function materialStore() {
    
}

materialStore.prototype = {
    //显示，关闭素材库
    state: function () {
        document.getElementsByClassName("tittle")[0].addEventListener("click", function () {
            $(".menbang:eq(0)").css("display", "inline-block");
            $(".list:eq(0)").find("span:eq(0)").text($(".window-right-img").length);
        });

        document.getElementsByClassName("close-menbang")[0].addEventListener("click",function () {
            $(".menbang:eq(0)").css("display","none");
        });

        document.getElementsByClassName("res-can")[0].addEventListener("click",function () {
            $(".menbang:eq(0)").css("display","none");
        });
    },
    select: function () {
        document.getElementsByClassName("window-right")[0].addEventListener("click",function (e) {
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
        })
    },
    save: function () {
        document.getElementsByClassName("res-que")[0].addEventListener("click",function () {
            $("#picture").css("display","inline-block");
            var $rightImg = $(".w-r-i-select");
            if ($rightImg.length != 0){
                $(".menbang:eq(0)").css("display","none");

                var $pic = $("#preview");
                $pic.css("display","inline-block");

                var $src = $(".w-r-i-select:eq(0)").attr("src");
                $pic.attr("src",$src);

                $(".pass-div:eq(0)").css("display","none");
            }else {
                alert("请选择一张图片");
            }
        })
    },
}