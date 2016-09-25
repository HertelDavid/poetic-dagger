$(document).ready(function(){
    setHeightOfSide();
    setScrollForLink();
});

$(window).resize(function(){
    setHeightOfSide();
});

function setHeightOfSide(){
    var heightOfWrapper = $(".content-wrapper").height();
    console.log(heightOfWrapper);
    $(".menu-container").height(heightOfWrapper + 5);
}

function setScrollForLink(){
    $(".splash-text").localScroll({duration: 700});
}
