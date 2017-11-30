function prepend(container1, newElement1){ 
    var a = document.createElement(newElement1);
        a.innerHTML = 'Привет, мир!';
    container1.insertBefore(a , container1.children[2]);
    
    };     
    prepend(divv,"p");