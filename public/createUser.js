addBtn = document.getElementById('submit');

form = document.querySelector('form');

const usersName = document.querySelector('input[name="Name"]');
const usersSurname = document.querySelector('input[name="Last-Name"]');
const usersEmail = document.querySelector('input[name="Email-Address"]');
const membershipSelect = document.getElementById('Memberships');

async function dropdownDb () {
    const result = await fetch('http://127.0.0.1:9000/memberships');
    const json = await result.json();
    console.log(json)
    json.forEach(element => {
        const {name, _id} = element;
        const select = document.getElementById('Memberships');
        const options = document.createElement('option');
        options.value = _id;
        options.text = name;
        select.appendChild(options);
    });
}

dropdownDb ()

addBtn.addEventListener('click', (e) => {
    console.log('hello')
    e.preventDefault();
    const formData = createInputObject();
    const formDataString = JSON.stringify(formData);
    login(formDataString);
});

function createInputObject() {
    debugger
    const formData = {
        usersName:usersName.value,
        usersSurname:usersSurname.value,
        usersEmail:usersEmail.value,
        membershipId:membershipSelect.value
    };
    return formData;
}
async function login(formDataString) {
   const result = await fetch('http://127.0.0.1:9000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: formDataString
    })
    console.log(result)
    if (result.ok) {
        window.location.replace("http://127.0.0.1:9000/users.html");  
    } else {
        alert('Blogai');
    }
}