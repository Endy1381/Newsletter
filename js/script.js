let imgElement = document.querySelector('.img')
let fform = document.querySelector('.fform')
let success = document.querySelector('.success')
let hh = document.querySelector('.header-mobile')



// Get a reference to the image element








function handleClicka(){
    
    fform.style.display = 'none'
    success.style.display = 'flex'
    hh.style.display = 'none'

}

function handleClickb(){
    fform.style.display = 'flex'
    success.style.display = 'none'
    hh.style.display = 'flex'

}

