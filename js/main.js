const lists = document.querySelectorAll('.navigation__list');

console.log(lists);

lists.forEach(list => {
    list.addEventListener('click', changeActive)
})

function changeActive() {
    lists.forEach(list => {
        list.classList.remove('active');
    })
    this.classList.add('active');
}