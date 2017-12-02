var tree = document.getElementsByTagName('ul')[0];
    var treeLis = tree.getElementsByTagName('li');

tree.onclick = function(event) {
    var target = event.target;

    if (target.tagName != 'SPAN') {
      return;
    }

    
    var childContainer = target.parentNode.getElementsByTagName('ul')[0];
    if (!childContainer) return; // no children

    childContainer.hidden = !childContainer.hidden;
  }