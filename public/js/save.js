/**
 * Created by Lenovo on 2017/4/21.
 */
function save() {

}

var reg1 = /<div(([\s\S])*?)>/g;
var reg2 = /<\/div>/g;


save.prototype = {
    saveWP1: function () {
        document.getElementsByClassName("save")[0].addEventListener("click",function () {


            // alert($(".out-write:eq(0)").html().replace(reg1,"/n").replace(reg2,""));

            $("footer").find(".del:eq(0)")[0].className = "del save-del";

            if ($(".out-write:eq(0)").css("display") == "block") {
                // localStorage.setItem("saveWord", $(".out-write:eq(0)").text());

                $.ajax(
                    {
                        url:"http://testb.uoffer.net/api/replymanage",
                        type:"POST",
                        data:{
                            condition:{
                                msgType:"event",
                                event:"subscribe"
                            },
                            reply:$(".out-write:eq(0)").html().replace(reg1,"\n").replace(reg2,""),
                            ctrl:"update"
                        },
                        success: function (data) {

                        },
                        error: function (err) {

                        }
                    }
                );

            }else if ($("#preview").css("display") == "inline-block"){
                $.ajax(
                    {
                        // url:"http://192.168.1.109:3030/post",
                        type:"post",
                        data:{
                            condition:{
                                msgType:"event",
                                event:"subscribe"
                            },
                            reply:{
                                replyType:"image",
                                replyContent:$("#preview").attr("src")
                            },
                            ctrl:"updata"
                        },
                        success: function (data) {

                        },
                        error: function (err) {

                        }
                    }
                );

            }
        })
    },
    saveWP2: function () {
        document.getElementsByClassName("save")[0].addEventListener("click",function () {
            if ($(".out-write:eq(0)").css("display") == "block") {
                localStorage.setItem("index2SaveWord", $(".out-write:eq(0)").text());
            }else if ($("#preview").css("display") == "inline-block"){
                try {
                    localStorage.setItem("index2SaveImg",$("#preview").attr("src"));
                }catch(e){
                    alert(e);
                }
            }
        })
    }
}