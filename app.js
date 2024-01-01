let openModalBtn = document.getElementById("openModalBtn");
let modalCloseBtn = document.getElementById("closeModalBtn");
let modalContainer = document.getElementById("modalContainer");
openModalBtn.addEventListener("click",function(){
   modalContainer.style.display = 'flex'
})
modalCloseBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none'
})
window.addEventListener('click', function (event) {
    // console.log(event.target)
    if(event.target == modalContainer){
        modalContainer.style.display = 'none'
    }
})