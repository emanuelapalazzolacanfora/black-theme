const slides = document.querySelectorAll('.slide');

function slideShow(){
    // get current slide
    const current = document.querySelector('.active')
    //remove active class
    current.classList.remove('active');
    // if there is a nextElementSibling:
    if(current.nextElementSibling){
        //add active to next slide
        current.nextElementSibling.classList.add('active')
    } else {
        // add active to first one
        slides[0].classList.add('active')
    }

    setTimeout('slideShow()', "5000")
    // 8000 will make 8s per slide which will match our progress bar
}

// load the function when the website loads
window.onload = slideShow;