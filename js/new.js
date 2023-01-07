const w = $('body').width()

let currNavId = 0;

$('.single-nav').on('click', function(e) {
    displayAllPage()
    let targetNavId = +$(this).data('navid')
    hidePage(currNavId, targetNavId)
    
    const scrollPos = w * targetNavId
    console.log(currNavId, targetNavId, w, scrollPos)
    $('.wwww').scrollLeft(scrollPos)
    $('.single-nav').removeClass('active')
    $(this).addClass('active')
    
    currNavId = targetNavId;
})

function hidePage(current, target){
    console.log(current, target)
    let pages = $('.page')
    for(let i=0; i<=3; i++){
        if(i != current && i != target){
            $(pages[i]).addClass('d-none')
            // $(pages[i]).css('display','none')
        }
    }
}

function displayAllPage() {
    let pages = $('.page')
    for(let i=0; i<=3; i++){
        $(pages[i]).removeClass('d-none')
    }
}