
function openHiddenContent(clickedElement){
    const hiddenContent=clickedElement.querySelector(".hidden-content");
    const icon=document.querySelectorAll("svg");
    if(hiddenContent.style.display==="none" ){
        hiddenContent.style.display="flex";
       
    }else{
        hiddenContent.style.display="none";
    }
};