/**
 * Created by Lenovo on 2017/5/12.
 */
/**
 * Created by Lenovo on 2017/4/21.
 */


//图片上传的函数
function fileSelected() {
    var file = document.getElementById('tuwenFileToUpload').files[0];
    if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
//            document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
//            document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
//            document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
    }
//        var up = new uploadImg();
//        up.change();
}
function uploadFile() {
    var fd = new FormData();
    // console.dir(fd)
    fd.append("tuwenFileToUpload", document.getElementById('tuwenFileToUpload').files[0]);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.open("POST", "http://192.168.1.109:3030/upload");//修改成自己的接口

    xhr.send(fd);

    // $.ajax({
    //     type:"post",
    //     url:"http://192.168.1.109:3030/upload",
    //     data:{
    //         condition:{
    //             msgType:"event",
    //             event:"subscribe"
    //         },
    //         reply:{
    //             replyType:"image",
    //             replyContent:fd
    //         },
    //         ctrl:"updata"
    //     },
    //     success: function (data) {
    //
    //     },
    //     error: function (err) {
    //
    //     }
    // })

}

function uploadProgress(e){
    console.dir(e)
    if(e.lengthComputable){
        var percentComplete = Math.round(e.loaded * 100 / e.total)
        document.getElementById("tuwenProgressNumber").innerHTML = percentComplete.toString() + "%";

//            var up = new uploadImg();
//            up.change();
    }
    else {
        document.getElementById("tuwenProgressNumber").innerHTML = "unable to complete";
    }
}
function uploadComplete(e) {
    /* 服务器端返回响应时候触发event事件*/
    console.log(e.target.responseText);


    var pic = document.getElementById("preview");
    var picShow = document.getElementById("picture");
    var deleteA = document.getElementById("delete");

//        var sucaipic = document.createElement("img");
//        sucaipic.className = "window-right-img";
//
//        document.getElementsByClassName("window-right")[0].appendChild(sucaipic);

    document.getElementsByClassName("pass-div")[0].style.display = "none";
    pic.style.display = "inline-block";
    picShow.style.display = "inline-block";
    deleteA.style.display = "inline-block";

    document.getElementById("preview").src = JSON.parse(e.target.responseText).imgURL;

    var pic = document.createElement("img");
    pic.className = "window-right-img";
    pic.src = JSON.parse(e.target.responseText).imgURL;
    document.getElementsByClassName("window-right")[0].appendChild(pic);
}
function uploadFailed(e) {
    console.log("There was an error attempting to upload the file.");
}
function uploadCanceled(e) {
    console.log("The upload has been canceled by the user or the browser dropped the connection.");
}