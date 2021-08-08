 var btns = document.getElementsByClassName('btn');
var panels = document.getElementsByClassName('panel');
var indicator = document.getElementById('indicator');
function tab(btn,panel){
    
    for(var i=0;i<panels.length;i++){
        if(i==panel){
            panels[panel].style.display='block';
        }else{
             panels[i].style.display='none';
        }
    }
   
    indicator.style.left=String(btn*33)+"%";
    
}