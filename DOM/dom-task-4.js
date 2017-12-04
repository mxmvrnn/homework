var childList ={};

function countChild(elem) { 
    var elemChildren = elem.children;
    var length = elemChildren.length;
    for (var i = 0; i < length; i++ ){            
        if (elemChildren[i].children !== 0) {
            alert('kek');
    } else {
            alert('makek');
            // countChild(elemChildren[i-1]);
        }
    }
    //  elem.childNodes[1].innerHTML = '';
};
countChild(div1);