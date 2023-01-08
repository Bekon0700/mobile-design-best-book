const w = $('body').width()
const h = $('body').height()

let currNavId = 0;

$('.single-nav').on('click', function(e) {
    let targetNavId = +$(this).data('navid')

    let targetPageLeft = +$($('.page')[targetNavId]).css('left').split('p')[0]
    console.log(currNavId, targetNavId)
    console.log(targetPageLeft)

    if(currNavId < targetNavId && targetPageLeft < 0){
        $($('.page')[targetNavId]).css('left', '100%')
    }
    if(currNavId > targetNavId && targetPageLeft > 0){
        $($('.page')[targetNavId]).css('left', '-100%')
    }

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