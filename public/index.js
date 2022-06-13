addBtn = document.getElementById('submit');

form = document.querySelector('form');

const inputName = document.querySelector('input[name="name"]');
const inputPrice = document.querySelector('input[name="price"]');
const serviceDescription = document.getElementById('serviceDescription');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = createInputObject();
    const formDataString = JSON.stringify(formData);
    login(formDataString);
});

function createInputObject() {
    const formData = {
       serviceName: inputName.value,
       membershipPrice: inputPrice .value,
       serviceDescription: serviceDescription.value
    };
    return formData;
}
async function login(formDataString) {
   const result = await fetch('http://127.0.0.1:9000/memberships', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: formDataString
    })
    if (result.ok) {
        window.location.replace("http://127.0.0.1:9000/memberships.html");  
    } else {
        alert('Blogai');
    }
}