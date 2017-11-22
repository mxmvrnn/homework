/* (function(){    
    var a = document.createElement("p");
        a . innerHTML = 'Привет, мир!'; 

        list.insertBefore(a , list.children[2]);
    
})();

function prepend(container1, newElement1){ 
    var a = document.createElement(newElement1);
        // b = document.getElementById(container1);

        a . innerHTML = 'Привет, мир!'; 

        container1.insertBefore(a , container1.children[2]);
    
    };     
    prepend(divv,"p"); */ 

    /* function removeChildren(elem) {
        var a = elem.childNodes;
        for (var i = 0; i < a.length-1; i++ ){            
            if (a[i].nodeType == 3) {
                elem.removeChild(a[i]);         
            }   
        }
        //  elem.childNodes[1].innerHTML = '';
    };
    removeChildren(divv); */

    function removeChildren(elem) {
        var a = elem.childNodes;
            
        for (var i = 0; i < a.length-1; i++ ){
            if (a[i].nodeType == 3) {
                elem.removeChild(a[i]);         
            };
            var b = elem.childNodes[i].childNodes;            
            for(var j = 0 ; j < b.length; j ++){
                if (b[i].nodeType == 3) {
                    elem.removeChild(elem.childNodes[i].childNodes[j]);         
                }
            }

        }
        //  elem.childNodes[1].innerHTML = '';
    };
    removeChildren(divv);

