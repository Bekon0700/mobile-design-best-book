const w = $('body').width()
const h = $('body').height()

let currNavId = 0;
let isNeg = true;

$('.homepage').addClass('homepage')

$('.single-nav').on('click', function(e) {
    $('.homepage').removeClass('homepage')
    let targetNavId = +$(this).data('navid')
    
    $('.page').each(function(id, val) {
        if(targetNavId == id) {
            $(this).animate({
                left: "0%",
                opacity: 1,
            }, 1000)
            $(this).css('visibility', 'visible')
        }

        if(currNavId == id) {
            $(this).animate({
                left: isNeg ? "100%" : "-100%",
                opacity: 0
            }, 1000, function() {
                isNeg = +$(this).css('left').split('p')[0] < 0 ? true : false;
            })
            // $(this).css('visibility', 'hidden')
        }
    })
    
    currNavId = targetNavId;
})