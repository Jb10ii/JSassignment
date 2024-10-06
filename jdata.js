const form = document.getElementById('inputForm');
const itemList = document.getElementById('itemList');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const subject = document.getElementById('subject').value;

    
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `Name: ${name}, Age: ${age}, Favorite Subject: ${subject}`;

    
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove-btn');

    
    removeBtn.addEventListener('click', () => {
        itemList.removeChild(itemDiv); 
    });

    
    itemDiv.appendChild(removeBtn);

    
    itemList.appendChild(itemDiv);

    
    form.reset();
});