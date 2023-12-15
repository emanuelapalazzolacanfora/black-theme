const cardsid = document.querySelectorAll('.cardid');

function cardidShow(){
    // get current slide
    const current = document.querySelector('.activid')
    //remove active class
    current.classList.remove('activid');
    // if there is a nextElementSibling:
    if(current.nextElementSibling){
        //add active to next slide
        current.nextElementSibling.classList.add('activid')
    } else {
        // add active to first one
        cardsid[0].classList.add('activid')
    }

    setTimeout('cardidShow()', "3000")
    // 8000 will make 3s per slide which will match our progress bar
}

// load the function when the website loads
window.onload =cardidShow;