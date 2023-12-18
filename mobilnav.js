const allNavBtn = document.querySelectorAll('nav ul li');



    allNavBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById("check").checked = false;
        })
    });







