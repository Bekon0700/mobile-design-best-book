$(document).on('load', function() {
    $('.active').removeClass('active')
})

$('.nav-name').each(function(index, val) {
    let navBtn = $(this).text()
    if(window.location.pathname.includes(navBtn.toLowerCase())){
        $(this).parent().addClass('active')
    }
})

window.onload = function() {
    setTimeout(() => {
        $('.transition').removeClass('transition-active')
    }, 500)
}

$('.single-nav').on('click', function(e) {
    console.log(45185415)
    e.preventDefault()
    $('.transition').addClass('transition-active')
    console.log(this.href)
    setTimeout(() => {
        window.location.href = this.href
    }, 500)
})