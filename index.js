let container = document.getElementById('container')


async function getUsers(){
    let response = await fetch("users.json")
    users = await response.json()
    return users
}

getUsers().then(users => {
    users.forEach(user => {
        userDiv = `
        <div class="user">
            <div class="username">
                <p>${user.username}</p>
            </div>
            <div class="active"></div>
        </div>`

        container.innerHTML += userDiv
    });

})






