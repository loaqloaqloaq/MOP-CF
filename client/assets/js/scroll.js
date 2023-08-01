function onScroll(){
    var cellContents = document.querySelectorAll(".cell-content");
    for (var i = 0; i < cellContents.length; i++) {
        var windowHeight = window.innerHeight;       
        var elementTop = cellContents[i].getBoundingClientRect().top;
        var elementVisible = 10;
        if (elementTop < windowHeight - elementVisible) {
        cellContents[i].classList.add("active");    
        }
    }
}

window.removeEventListener('scroll', onScroll);  