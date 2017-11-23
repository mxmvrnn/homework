function removeChildren(elem) {
    var a = elem.childNodes;
    var length = a.length;
    for (var i = 0; i < length; i++ ){            
        if (a[i].nodeType == 3) {
            elem.removeChild(a[i]);         
        } else {
            removeChildren(a[i]);
        }
    }
    //  elem.childNodes[1].innerHTML = '';
};
removeChildren(div3);


/* function recRemoveChild(elem){
    var a = elem.childNodes,
        b = elem.children,
        c = elem.lastChild;
        while(a.length){
            for (var i = 0; i < a.length-1; i++ ){            
                if (a[i].nodeType == 3) {
                elem.removeChild(a[i]);
                elem = c      
            } 
        }

        
}
 */
