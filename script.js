

const sanvichbtn = document.querySelector(".sanvichbtn")
let sideBarContainer =  document.querySelector(".container");
var sideBarOzu = document.querySelector(".side-bar");


// pre loader........

 var preLoader = document.getElementById("preLoader");
 window.addEventListener("load",()=>{
 preLoader.style.display = "none";
})



sideBarAction()

function sideBarAction(){
 sanvichbtn.addEventListener("click", (ev)=>{
     
     document.querySelector(".side-bar").classList.toggle("off")
     document.querySelector(".sanvichbtn").classList.toggle("x")
     document.querySelector(".container").classList.toggle("change")
     ev.stopPropagation();
    
})
}


// side bar close  with out side click .................


document.addEventListener('click', function() {

    if(!sideBarOzu.classList.contains("off") && sideBarContainer.classList.contains("change") && sanvichbtn.classList.contains("x") ){
            document.querySelector(".side-bar").classList.add("off")
            document.querySelector(".sanvichbtn").classList.remove("x")
            document.querySelector(".container").classList.remove("change")
    }
});
       



// this is were its get good  
//  on scroll change the whats and call item .....................

     let call = document.querySelector(".call");
     let whats = document.querySelector(".whatsapp");
     
window.onscroll = function() {scrollFunc()};
function scrollFunc(){
    if(document.documentElement.scrollTop > 2020 ){
     

        
        $(call).fadeOut();
        $(whats).fadeOut();
    }else{
        

        $(call).fadeIn();
        $(whats).fadeIn();
    }
}



// insta feed .............


// const instafeed = document.querySelector(".instafeeder");
// const instafeedBtn = document.querySelector(".instafeed-btn");

//  instafeedBtn.addEventListener("click", ()=>{
//          instafeed.style.visibility = "visible";
     
//   })

//  instafeedBtn.addEventListener("click", ()=>{
//      console.log("hi")
//     instafeed.classList.toggle("row")  
//     instafeedBtn.classList.toggle("moveup-btn")   
//   })

//   -------------pop up content pop ---------------




var popupCotainer = document.querySelector(".popup-contact") 
var popupCloseBtn = document.querySelector(".close-popup")
var popupBtn = document.querySelector(".btn")

popupBtn.addEventListener("click", ()=>{
    console.log("hi")
    popupCotainer.classList.toggle("popup-content-close")
})
popupCloseBtn.addEventListener("click", ()=>{
    popupCotainer.classList.toggle("popup-content-close")
})

// --------------------pop up servisler ----------------

const anakartTamiri = document.querySelector(".anakart-tamiri");
const sivitemaslicihazlar = document.querySelector(".sivi-temasli-cihazlar");
const ekrandegisimi = document.querySelector(".ekran-degisimi");
const verikurtarma = document.querySelector(".veri-kurtarma");
const yazilimsorunlari = document.querySelector(".yazilim-sorunlari");
const applewhatchtamiri = document.querySelector(".apple-whatch-tamiri");
const applewatchcam = document.querySelector(".apple-watch-cam");
const appletamircam = document.querySelector(".apple-tamir-cam");


const anakartonarim = document.querySelector(".anakartonarim");
const sivitemaslli = document.querySelector(".sivitemaslli");
const ekrandegisim = document.querySelector(".ekrandegisim");
const data = document.querySelector(".verikurtarma");
const yazilim= document.querySelector(".yazilimsorunlari");
const applewatch = document.querySelector(".applewatch");
const appletamir = document.querySelector(".appletamircam");
const muz = document.querySelector(".muz");





anakartTamiri.addEventListener("click",()=>{
    console.log("hello")
    anakartonarim.classList.add('visible')
})

sivitemaslicihazlar.addEventListener("click",()=>{
    console.log("hello")
    sivitemaslli.classList.add('visible')
})

ekrandegisimi.addEventListener("click",()=>{
    console.log("hello")
    ekrandegisim.classList.add('visible')
})

verikurtarma.addEventListener("click",()=>{
    console.log("hello")
    data.classList.add('visible')
})

yazilimsorunlari.addEventListener("click",()=>{
    console.log("hello")
    yazilim.classList.add('visible')
})

applewhatchtamiri.addEventListener("click",()=>{
    console.log("hello")
    applewatch.classList.add('visible')
})

applewatchcam.addEventListener("click",()=>{
    console.log("hello")
    appletamir.classList.add('visible')
})

appletamircam.addEventListener("click",()=>{
    console.log("hello")
    muz.classList.add('visible')
})


//  --------------------popup servisler close--------------------

// BIRUNE WINDOW BASTANE WINDOW

// let popupIn = document.querySelector(".popup-in > *");
// console.log(popupIn)

//  popupIn.addEventListener("mouseout",()=>{
    
//      anakartonarim.classList.remove("visible");
//      sivitemaslli.classList.remove("visible");
//      ekrandegisim.classList.remove("visible");
//      data.classList.remove("visible");
//      yazilim.classList.remove("visible");
//      applewatch.classList.remove("visible");
//      appletamir.classList.remove("visible");
//      muz.classList.remove("visible");


//  })


const closeServisler = document.querySelectorAll('span.close-servisler');
let i;



    for( i=0; i <= closeServisler.length ; i++){
    
    closeServisler[i].onclick = () => {

        console.log("oha");

        anakartonarim.classList.remove("visible");
        sivitemaslli.classList.remove("visible");
        ekrandegisim.classList.remove("visible");
        data.classList.remove("visible");
        yazilim.classList.remove("visible");
        applewatch.classList.remove("visible");
        appletamir.classList.remove("visible");
        muz.classList.remove("visible");



        }
    }

    