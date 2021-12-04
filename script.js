const sanvichbtn = document.querySelector(".sanvichbtn")

sanvichbtn.addEventListener("click", ()=>{

    document.querySelector(".side-bar").classList.toggle("off")
    document.querySelector(".sanvichbtn").classList.toggle("x")
    document.querySelector(".container").classList.toggle("change")

})

