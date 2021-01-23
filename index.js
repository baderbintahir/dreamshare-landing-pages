//Takes you back to home page from partners page
$('.back-btn').click(() => {
    window.location.href = "./index.html";
})

// Shows all the male and female partners
$('.all-btn').click(() => {
    $('.male').show()
    $('.female').show()
})

// Shows only male partners
$('.male-btn').click(() => {
    $('.male').show()
    $('.female').hide()
})

// Shows only female partners
$('.female-btn').click(() => {
    $('.female').show()
    $('.male').hide()
})

// Removes the current clicked card
$('.partner-dismiss').on('click', function(){
    $(this).parents('.partner-card').fadeOut()
})

// set information on the new tab opened when click on view button
$('.view-btn').on('click', function(){
    $('.detail-box .partner-img').attr('src', $(this).parents('.partner-card').children('.partner-img').attr('src'))
    $('.detail-box .name').text($(this).parents('.partner-card').children('.name').text())
    $('.detail-box .bio').text($(this).parents('.partner-card').children('.bio').text())
    $('.view-details').show()
})

// closes the new tab when click on the cross button
$('.close-btn').on('click', function(){
    $('.view-details').hide()
})


// takes you to partners page when click on more partners page
$('.more-partners-btn').click(() => {
    window.location.href = "./partners.html";
})

// takes you to partners page when click button at 1st section of the page
$('.find-partner').click(() => {
    window.location.href = "./partners.html";
})


// Fade-In animation
// $('.fade').scrollFadeIn(500, 500);
// $('.fade').scrollFadeOut(500, 700);