const w = $('body').width()
const h = $('body').height()

let currNavId = 0;

// $('.homepage').addClass('homepage')

$('.single-nav').on('click', function(e) {
    // $('.homepage').removeClass('homepage')
    let targetNavId = +$(this).data('navid')

    console.log(currNavId, targetNavId)
    
    $('.page').each(function(id, val) {
        if(targetNavId == id) {
            $(this).animate({
                left: "0%",
                opacity: 1,
            }, 500)
            $(this).css('visibility', 'visible')
        }
        let makeLeft = targetNavId > currNavId ? "-100%" : "100%";
        console.log(makeLeft)
        if(currNavId == id) {
            $(this).animate({
                left: makeLeft,
                opacity: 0.5
            }, 500)
            // $(this).css('visibility', 'hidden')
        }
    })

    $('.single-nav').removeClass('active')
    $(this).addClass('active')
    
    currNavId = targetNavId;
})