function removeChildren(elem) {
    var elemChildren = elem.childNodes;
    var length = elemChildren.length;
    for (var i = length; i > 0; i-- ){            
        if (elemChildren[i-1].nodeType == 3) {
            elem.removeChild(elemChildren[i-1]);
                    
        } else {
            var elem = elemChildren[i];
            removeChildren(elem);            
        }
    }
    //  elem.childNodes[1].innerHTML = '';
};
removeChildren(body);