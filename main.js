const navBtn = document.querySelectorAll('.nav-slider-btn');
const videoSlides = document.querySelectorAll('.video-content');
const contents = document.querySelectorAll('.main-content');


let slideNav = function(index) {
    navBtn.forEach(btn => {
        btn.classList.remove('active')
    })
    videoSlides.forEach(video => {
        video.classList.remove('active')
    })
    contents.forEach(content => {
        content.classList.remove('active')
    })
    navBtn[index].classList.add('active')
    videoSlides[index].classList.add('active')
    contents[index].classList.add('active')

}

navBtn.forEach((bnt, i) => {
    bnt.addEventListener('click', () => {
        slideNav(i)
    })
})
// function checkactive() {
// navBtn.forEach(btn => {
//     btn.classList.remove('active')
// })
// }
// navBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         checkactive();
//         btn.classList.add('active')
//     })
// })