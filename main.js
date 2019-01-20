attachEvents = () => {
    document.querySelectorAll('.poke_button').forEach((element) => {
        element.addEventListener('click', () => {
            alert('Hello Crazy!')
        })
    })
}