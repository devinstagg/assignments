const name = {
    name: ''
}

const changeName = () => {name.name = document.getElementById("name-input").value
    showname()
}
const showname = () => {
    document.getElementById("name").innerHTML = name.name
}

const popUp = () => {
    alert('Hello, my name is ' + name.name)
}
