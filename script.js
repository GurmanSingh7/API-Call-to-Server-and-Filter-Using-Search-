let users = [];
 
fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {  
        console.log(data);    
        users = data.users;      
        displayUsers(users);      
    }); 
 
function displayUsers(data) {
    const list = document.getElementById("list"); 
    list.innerHTML = "";

    data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.firstName + " " + user.lastName;
        list.appendChild(li);
    });
}

document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();

    let filtered = users.filter(user =>
        (user.firstName + " " + user.lastName).toLowerCase().includes(value)
    );

    displayUsers(filtered);
});
