document.querySelectorAll(".div-poem p").forEach((item)=>{
    if(item.innerHTML.trim().startsWith("“") || item.innerHTML.trim().startsWith("‘")){
        item.style.paddingRight = "16px";
        console.log(item.innerText)
    }
    if(item.innerHTML.trim().endsWith("”") || item.innerHTML.trim().startsWith("’") || item.innerHTML.trim().startsWith("，") || item.innerHTML.trim().startsWith("。")){
        item.style.paddingLeft = "16px";
        console.log(item.innerText)
    }
})
