/**
 * Created by Lenovo on 2017/4/25.
 */

function saveDelete() {

};

saveDelete.prototype = {
    delet: function () {
        $(".del")[0].addEventListener("click",function () {
            $.ajax(
                {
                    url:"http://testb.uoffer.net:8088/postecho",
                    type:"post",
                    data:{
                        condition:{
                            msgType:"event",
                            event:"subscribe"
                        },
                        reply:null,
                        ctrl:"delete"
                    },
                    success: function (data) {
                        alert(JSON.stringify(data));
                    },
                    error: function (err) {

                    }
                }
            );
        });
    }
}
