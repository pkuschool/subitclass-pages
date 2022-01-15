const sitename=[
    "主页","自我介绍","文章","更新日志","作者的话",
    "彩蛋","代码","Apple","二次元","电脑硬件"
];
const sitehref={
    主页 : "./index.html",
    自我介绍 : "./self.html",
    文章 : "./article-guide.html",
    更新日志 : "./version-history.html",
    作者的话 : "./writer's-word.html",
    彩蛋 : "./writer's-more.html",
    代码 : "./article/Coding.html",
    Apple : "",
    二次元 : "",
    电脑硬件 : ""
};
let InSite = false;
const csmin = document.getElementById("csmin");
const csmout = document.getElementById("csmout");
if (InSite == false){
    $(csmout).css('background-color','rgb(122,122,122)');
    $(csmout).css('color','white');
    $(csmin).css('background-color','white');
    $(csmin).css('color','black');
}
else{
    $(csmout).css('background-color','white');
    $(csmout).css('color','black');
    $(csmin).css('background-color','rgb(122,122,122)');
    $(csmin).css('color','white');    
}
function ChangeSearchMode(inp){
    InSite = inp;
    if (InSite == false){
        $(csmout).css('background-color','rgb(122,122,122)');
        $(csmout).css('color','white');
        $(csmin).css('background-color','white');
        $(csmin).css('color','black');
    }
    else{
        $(csmout).css('background-color','white');
        $(csmout).css('color','black');
        $(csmin).css('background-color','rgb(122,122,122)');
        $(csmin).css('color','white');    
    }
}
function Search(){
    let SearchSuccess = false;
    const TXT = document.getElementById("SearchText").value;
    const Modal = document.getElementById("modal");
    $(Modal).css('display','block');
    if(InSite==false)
    {
        Modal.innerHTML =
        `<ion-icon name="close-circle-outline" style="right: 5px;top:5px;" onclick="CloseModal();"></ion-icon>`+
        `<iframe src="`+`https://cn.bing.com/search?q=`+TXT+`" style="width:100%;height:500px;margin-top:20px">
         </iframe>`;     
    }
    else{
        sitename.forEach(function(item){
            if(TXT == item)
            {
                SearchSuccess = true;
                window.location.href = sitehref[TXT];
            }
        });
        if(SearchSuccess == true){ SearchSuccess = false; }
        else{
            $(Modal).css('display','block');
            Modal.innerHTML =
            `<ion-icon name="close-circle-outline" style="right: 5px;top:5px;" onclick="CloseModal();"></ion-icon>`+
            `<p>未找到您搜索的页面</p>`;                   
        }
    }
}
function CloseModal(){
    const Modal = document.getElementById("modal");
    $(Modal).css('display','none');
}
