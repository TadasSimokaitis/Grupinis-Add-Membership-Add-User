async function fromDb () {
    const result = await fetch('http://127.0.0.1:9000/users')
    
    const json = await result.json()
    json.forEach(element => {
        const {name, surname, email, _id, membership } = element;
        const card = document.createElement('div');
        card.className = "card";
        const np = document.createElement('h3');
        const des = document.createElement('p');
        const cards = document.querySelector('div.cards');
        const deletebtn = document.createElement('button');


        cards.appendChild(card);
        card.appendChild(np).innerHTML = '$ ' + name + ' ' + surname;
        card.appendChild(des).innerHTML = email + membership.name;
        card.appendChild(deletebtn).innerHTML = 'Delete';
        deletebtn.addEventListener('click',async function(){
          await btDelete(_id); card.remove()
        } ) 
    });
}
fromDb ()

async function btDelete(users_id){
    const url = 'http://127.0.0.1:9000/users/' + users_id
    const deleted = await fetch(url,{method:'DELETE'})
}