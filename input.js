let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

const container = document.createElement('div');
document.body.appendChild(container); 

data.map(number => {
    const div = document.createElement('div'); 
    div.textContent = number; 
    div.style.padding = '10px'; 

   
    if (number > 50) {
        div.style.backgroundColor = 'green'; 
    } else {
        div.style.backgroundColor = 'red';
    }

    container.appendChild(div); 
});


