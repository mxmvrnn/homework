function removeChildren(elem) {
    var elemChildren = elem.childNodes;
    var length = elemChildren.length;
    for (var i = length; i > 0; i-- ){            
        if (elemChildren[i-1].nodeType == 3) {
            elem.removeChild(elemChildren[i-1]);
                    
        } else{
            // elem = elemChildren[i-1];
            removeChildren(elemChildren[i-1]);  
        }   
    }
    //  elem.childNodes[1].innerHTML = '';
};
removeChildren(body);

/* function removeChildren(elem) {
    var elemChildren = elem.childNodes;
    var length = elemChildren.length;
    for (var i = length; i > 0; i-- ){            
        if (elemChildren[i-1].nodeType == 3) {
            elem.removeChild(elemChildren[i-1]);
    } else {
            //var elem = elemChildren[i];
            removeChildren(elemChildren[i-1]);
        }
    }
    //  elem.childNodes[1].innerHTML = '';
};
removeChildren(body);  */ 

