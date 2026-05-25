const heroBtn = document.querySelector(".hero-btn")
const modalCloseBtn = document.querySelector(".modal-close-btn")

heroBtn.addEventListener('click', () => {
    document.body.classList.add('is-modal-open')
})

modalCloseBtn.addEventListener('click', () => {
     document.body.classList.remove('is-modal-open')
})

