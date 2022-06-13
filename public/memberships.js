async function fromDb () {
    const result = await fetch('http://127.0.0.1:9000/memberships');
    const json = await result.json();
    json.forEach(element => {
        const {name, price, description, _id } = element;
        const card = document.createElement('div');
        card.className = "card";
        const np = document.createElement('h3');
        const des = document.createElement('p');
        const cards = document.querySelector('div.cards');
        const deletebtn = document.createElement('button');


        cards.appendChild(card);
        card.appendChild(np).innerHTML = '$ ' + price + ' ' + name;
        card.appendChild(des).innerHTML = description;
        card.appendChild(deletebtn).innerHTML = 'Delete';
        deletebtn.addEventListener('click',async function(){
          await btDelete(_id); card.remove()
        } ) 
    });
}

fromDb ()

async function btDelete(memberships_id){
    const url = 'http://127.0.0.1:9000/memberships/' + memberships_id
    const deleted = await fetch(url,{method:'DELETE'})
}

