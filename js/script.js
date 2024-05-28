let imgElement = document.querySelector('.img')
let fform = document.querySelector('.fform')
let success = document.querySelector('.success')
let hh = document.querySelector('.header-mobile')



// Get a reference to the image element


// Function to update the image source
function updateImageSource() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 600) {
        // Set the new image source for mobile
        imgElement.src = '../assetsimages/illustration-sign-up-mobile.svg';
    } else {
        // Set the original image source for desktop
        imgElement.src = '../assets/images/illustration-sign-up-desktop.svg';
    }
}

// Initial check when the page loads
updateImageSource();

// Add an event listener for window resize
window.addEventListener('resize', updateImageSource);





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

