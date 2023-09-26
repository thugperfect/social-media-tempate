window.onload = function images(){

   
    

    let a = document.getElementById("sbox")
    let b=document.getElementsByClassName("ssbox");
    
    
    let widths = ["70px","90px","80px","65px","100px","95px","130px","75px","65px","95px","60px","120px"]
    let colors = ['red','yellow','green','pink','black','grey','gold','#ececec','brown','blue','lightblue','darkred','darkgreen','lightgreen',"darkblue","lightyellow","palevioletred",'white',"orange","#ecec"]
    for(i = 0;i<10000;i++){
        let bo = document.createElement("div");
        bo.className = "ssbox";
     
       
        a.appendChild(bo);    
    }
let aa = document.getElementsByClassName("ssbox")
let d=0;
for(c= 0;c<aa.length;c++){
    
    if(d != colors.length){
        aa[c].style.backgroundColor=colors[d];
        
        d++;
    }else{
        
        
        aa[c].style.backgroundColor=colors[d];
       
        d=0;
    }
}


let home = document.getElementById("home")

let nam=document.createElement("div")
nam.className="nam"
let limg = document.createElement("div")
limg.className="limg"
let lname = document.createElement("div")
lname.className="lname"

let llname = document.createElement("div")
llname.className="llname"
let lllname = document.createElement("div")
lllname.className="lllname"

nam.appendChild(limg)
nam.appendChild(lname)

lname.appendChild(llname)
lname.appendChild(lllname)
home.appendChild(nam)

let mstat =document.createElement("div")
mstat.className = "mstat"

let stat = document.createElement("div")
stat.className="status"
mstat.appendChild(stat)
home.appendChild(mstat)

for(ss = 0;ss<1000;ss++){

    
    
    
let sos = document.createElement("div")
sos.className="sos"
stat.appendChild(sos)


}

let hom = document.createElement("div");
home.appendChild(hom)
hom.style.width="100%"
hom.style.display="flex"
hom.style.flexDirection="column"
hom.style.alignItems="center"

for(ii = 0;ii<50;ii++){
    let bh = document.createElement("div");
    bh.className = "sybox";
    
    bh.style.width="100%";
    bh.style.height="70vh";
    bh.style.backgroundColor="#ecec";

    let bi = document.createElement("div");
    bi.className = "simgbox";
    let bhead = document.createElement("div");
    bhead.className = "sheadbox";
    let be = document.createElement("div")
    let bbhead = document.createElement('div');
    bbhead.className = "shead"
    let bimghead = document.createElement('div');
    bimghead.className = "simghead"
    let bconthead = document.createElement('div');
    bconthead.className = "sconthead"


    let bbbhead = document.createElement('div');
    bbbhead.className = "sshead"
    let bbbbhead = document.createElement('div');
    bbbbhead.className = "sshead"
   bh.appendChild(bi)
   bh.appendChild(bhead)
   bbhead.appendChild(bimghead)
   bbhead.appendChild(bconthead)
   bhead.appendChild(bbhead)
   bhead.appendChild(bbbhead)
   bhead.appendChild(bbbbhead)

    hom.appendChild(bh);    
}
let hhome = document.getElementsByClassName("sybox");
let s= document.getElementById("search");
let folist = document.getElementById("folist")

for(f=0;f<1000;f++){
    let falm = document.createElement("div")
    falm.className="falm"
    

    let fal = document.createElement("div");
    fal.className="fal"
    
    let fimg =document.createElement("div");
    fimg.className="fimg"

    let fcont = document.createElement("div");
    fcont.className= "fcont"
    let fname = document.createElement("div");
    fname.className = "fname"
    let ffname = document.createElement("div");
    ffname.className = "ffname";
    fcont.appendChild(fname)
    fcont.appendChild(ffname)
    fal.appendChild(fimg)
    fal.appendChild(fcont)
    falm.appendChild(fal)
    folist.appendChild(falm);



    



}
let ee=document.querySelector(".subars")
let east  =document.getElementsByClassName("logo")
let so = document.getElementsByClassName("sos")
let count = 0;
let boo = document.getElementsByClassName("ssbox")
ee.addEventListener("click",function(){
    count +=1;
    console.log(count)
  if(count == 10){
    stat.style.width="100%"
    
    for(soo = 0;soo<so.length;soo++){
        so[soo].style.border="5px solid black"
        so[soo].style.margin = "0px"
    }
    for(bboo = 0;bboo<boo.length;bboo++){
        boo[bboo].style.width="10px"
        

    }
    east[0].innerHTML="MF FOUND AN EASTER EGG"
    count = 0
    
  }
  else{
    stat.style.width="1000000px"
    
    for(soo = 0;soo<so.length;soo++){
        so[soo].style.border=""
        so[soo].style.margin = ""
    }
    for(bboo = 0;bboo<boo.length;bboo++){
        boo[bboo].style.width=""
        

    }
    east[0].innerHTML="ChatThru"

  }
});

}
function navigate(flag){

    let h = document.getElementById("home");
    let s =document.getElementById("search");
    let foll = document.getElementById("foll")
    let ms = document.getElementById("msearch");
    let ff = document.getElementById("friends");
    let fl = document.getElementById("folist");
    if(flag == 0){
        h.style.display="block"
        s.style.display  ="none"
        ff.style.display = "none"
        

    }
   if(flag == 1){
  
    s.style.display = "block";

    h.style.display = "none";
    ff.style.display = "none"
   }
   if(flag == 2){
    ff.style.display = "block"
    s.style.display="none"
    h.style.display = "none"
    foll.innerHTML = "followers"
    folist.style.display="block"
   }
   if(flag  == 3){
    
    foll.innerHTML="Requests"
    folist.style.display="block"
    ff.style.display = "block"
    s.style.display="none"
    h.style.display = "none"
    

   }
   if(flag == 4){
    
    foll.innerHTML="Chat"
    ff.style.display = "block"
    s.style.display="none"
    h.style.display = "none"
    folist.style.display ="block"
    



   }
   if(flag == 5){
    foll.innerHTML = "OnProgress..."
    ff.style.display = "block"
    s.style.display="none"
    h.style.display = "none"
    folist.style.display = "none"
    ms.style.display = "none"

   }



}

