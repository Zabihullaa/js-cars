let box = document.querySelector('.box')

let items = document.querySelectorAll('.items img')
let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.change-color')

items.forEach(el=>{
    el.addEventListener('click', function() {
        let attribute = this.getAttribute('src');
        document.querySelector(".img").setAttribute('src', attribute)
        wrapper.style.display = 'flex'  
    })
})