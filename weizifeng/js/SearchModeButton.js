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