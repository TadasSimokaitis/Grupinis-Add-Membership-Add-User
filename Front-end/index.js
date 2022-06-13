const body = document.querySelector('body')
const btn = document.querySelector('button');
const main = document.getElementById('main');

btn.addEventListener('click', () => {
main.style.display = "none";
createMemberShip()
})

function createMemberShip() {
const form = document.createElement('form');
const inputName = document.createElement('input');
const inputNameLabel = document.createElement('label');
const inputPrice = document.createElement('input');
const inputPriceLabel = document.createElement('label');
const inputDescription = document.createElement('textarea');
const inputDescriptionLabel = document.createElement('label');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const cancelBtn = document.createElement('button');
const newBtn = document.createElement('button');

form.append(div1);
div1.append(inputNameLabel);
div1.append(inputName);

form.append(div2);
div2.append(inputPriceLabel)
div2.append(inputPrice);

form.append(div3);
div3.append(inputDescriptionLabel)
div3.append(inputDescription);

form.append(div4);
div4.append(cancelBtn);
div4.append(newBtn);

body.append(form);

inputNameLabel.setAttribute('for', 'name');
inputPriceLabel.setAttribute('for', 'price')
inputDescriptionLabel.setAttribute('for', 'description')

inputName.setAttribute('name', 'name');
inputPrice.setAttribute('name', 'price');
inputDescription.setAttribute('name', 'description');

inputNameLabel.innerHTML = "Name";
inputPriceLabel.innerHTML = "Membership price";
inputDescriptionLabel.innerHTML = "Description";

cancelBtn.innerHTML = "Cancel";
newBtn.innerHTML = "New Membership";

}


