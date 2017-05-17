/**
 * Created by Lenovo on 2017/4/21.
 */
function imgBroad() {

}

imgBroad.prototype = {
    state: function () {
        //图片数量
        $(".list:eq(0)").find("span:eq(0)").text($(".window-right-img").length);

        // document.getElementsByClassName("menbang")[0].style.display = "inline-block";
        document.getElementsByClassName("window")[0].style.display = "inline-block";

        document.getElementsByClassName("img-res-can")[0].onclick = function () {
            document.getElementsByClassName("img-menbang")[0].style.display = "none";
        }

        document.getElementsByClassName("close-menbang")[0].onclick = function () {
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
    save: function (e) {
        var target = e.target;
        document.getElementsByClassName("res-que")[0].onclick = function () {
            if (target.nodeName == 'A'){
                var imgSrc = document.getElementsByClassName("w-r-i-select")[0].getAttribute("src");
                $(target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-preview")[0]).attr("src",imgSrc);
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-picture")[0].style.display = "inline-block";
                target.parentNode.style.display = "none";
                target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-summary")[0].className = "tuwen-con-summary-has-img";
                target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-url")[0].className = "tuwen-con-url-has-img";

            }else if (e.target.nodeName == "SPAN"){
                var imgSrc = document.getElementsByClassName("w-r-i-select")[0].getAttribute("src");
                $(target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-img-preview")[0]).attr("src",imgSrc);
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-img-picture")[0].style.display = "inline-block";
                target.parentNode.style.display = "none";
            }
            document.getElementsByClassName("menbang")[0].style.display = "none";

            //点击删除图片按钮
            target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-delete")[0].onclick = function (e) {
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-img-select")[0].style.display = "block";
                target.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-picture")[0].style.display = "none";
                target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-summary-has-img")[0].className = "tuwen-con-summary";
                target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-con-url-has-img")[0].className = "tuwen-con-url";

                $(e.target.parentNode.getElementsByClassName("tuwen-preview")[0]).attr("src","");
            }

            target.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("tuwen-img-delete")[0].onclick = function (e) {
                e.target.parentNode.style.display = "none";
                $(e.target.parentNode.getElementsByClassName("tuwen-img-preview")[0]).attr("src","");
                target.parentNode.style.display = "inline-block";
            }

        }
    }
}

