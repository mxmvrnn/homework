function removeChildren(elem) {
        var a = elem.childNodes;
        for (var i = 0; i < a.length-1; i++ ){            
            if (a[i].nodeType == 3) {
                elem.removeChild(a[i]);         
            }   
        }
        //  elem.childNodes[1].innerHTML = '';
    };
    removeChildren(divv);