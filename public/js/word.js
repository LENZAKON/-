/**
 * Created by Lenovo on 2017/4/21.
 */
function word() {

};

word.prototype = {
    init: function () {
        document.getElementById("change-wenzi").addEventListener("click",function () {

            //隐藏掉“删除”两字
            $("#delete").css("display","none");

            //修改文字图标
            $(".tupian-img:eq(0)").css("backgroundPosition","0 -60px");
            $(".wenzi-img:eq(0)").css("backgroundPosition","0 -30px");

            //如果是点击其他的图标再返回 （图片）
            if ($(".pass-div:eq(0)")){

                $("#preview").css("display","none");

                $(".pass-div:eq(0)").css("display","none");
                $("#picture").css("display","none");

                var $write = $(".out-write:eq(0)");


                $write.css("display","block");
                $write[0].focus();

                var $expression = $(".in-bot:eq(0)");
                $expression.css("display","block");

                //(修改)按钮位置
                var $foot = $("footer:eq(0)");
                $foot.css("marginTop","-150px");

                //（修改）修改框的高度
                $(".out:eq(0)").css("height","200px");
            }

        })
    },
    wordNum:function () {
        var $len = $(".out-write:eq(0)").text().length;
        var $totalLeng = $(".in-bot:eq(0)").find("i:eq(1)").text();
        setInterval(function () {
            var $length = $(".out-write:eq(0)").text().length;
            if ($len != $length){
                $(".in-bot:eq(0)").find("i:eq(1)").text($totalLeng - $length);
                $len = $(".in-bot:eq(0)").find("i:eq(1)").text();
            }
        },0)
    },
};

