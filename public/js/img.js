/**
 * Created by Lenovo on 2017/4/21.
 */
function img(){

}


img.prototype = {
    constructor: img,
    //显示两个框
    init1: function () {
        document.getElementById("change-img").addEventListener("click", function () {

            var test = /display: none/;
            if (test.test($("#picture").attr("style"))){
                //修改图片图标
                $(".tupian-img:eq(0)").css("backgroundPosition", "0 -90px");
                $(".wenzi-img:eq(0)").css("backgroundPosition", "0 0");

                if ($("#preview").attr("src")){

                    $(".pass-div:eq(0)").css("display", "none");
                    $("#picture").css("display","inline-block");
                    $("#preview").css("display","inline-block");
                    $("#delete").css("display","inline-block");

                }else {
                    //显示选择框
                    $(".pass-div:eq(0)").css("display", "inline-block");
                }

                var $write = $(".out-write:eq(0)");
                $write.css("display", "none");

                var $expression = $(".in-bot:eq(0)");
                $expression.css("display", "none");

                //(修改)按钮位置
                var $foot = $("footer:eq(0)");
                $foot.css("marginTop", "20px");

                //（修改）修改框的高度
                $(".out:eq(0)").css("height", "247px");
            }



        })
    },
    init2: function () {
        document.getElementById("change-img").addEventListener("click", function () {

            var test = /display: none/;
            if (test.test($("#picture").attr("style"))){
                //修改图片图标
                $(".tupian-img:eq(0)").css("backgroundPosition", "0 -90px");
                $(".wenzi-img:eq(0)").css("backgroundPosition", "0 0");

                if (localStorage.getItem("index2SaveImg")){

                    $(".pass-div:eq(0)").css("display", "none");
                    $("#picture").css("display","inline-block");
                    $("#preview").css("display","inline-block");
                    $("#preview").attr("src",localStorage.getItem("index2SaveImg"));
                    $("#delete").css("display","inline-block");

                }else {
                    //显示选择框
                    $(".pass-div:eq(0)").css("display", "inline-block");
                }

                var $write = $(".out-write:eq(0)");
                $write.css("display", "none");

                var $expression = $(".in-bot:eq(0)");
                $expression.css("display", "none");


                //(修改)按钮位置
                var $foot = $("footer:eq(0)");
                $foot.css("marginTop", "20px");

                //（修改）修改框的高度
                $(".out:eq(0)").css("height", "247px");
            }
        })
    },
    deleteImg: function () {
        document.getElementById("delete").addEventListener("click",function () {

            $(".pass-div:eq(0)").css("display","inline-block");

            $("#picture").css("display","none");
            $("#preview").attr("src","");
        });
    },
}
