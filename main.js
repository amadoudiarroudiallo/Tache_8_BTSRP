

document.addEventListener("click",function(e)
{
    if(e.target.classlist.contains ("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootsrap.Modal(document.getElementById
            ('gallery-modal'));
    
        myModal.show();
    }
    
})