// случайный цвет
function randomColor(){
    var randColor='#'+rand()+rand()+rand();
    return randColor;
};

     
function rand(){
    var c=parseInt(Math.random()*255).toString(16);
    return (""+c).length==1?'0'+c:c;
};

// случайный размер
function randSize() {
    return Math.random() * 700 + "px";
}
// случайная позиция
function randPosition() {
    return Math.random() * 1000 + "px";
}
// функция создания дива, придания ему свойств 
(function () {

    var MyButton = document.getElementById('main-button');
    var divContainer = document.getElementById('div-container');

    MyButton.onclick = function(){
        // document.body.removeChild(myDiv);
        var myDiv = document.createElement('div');
        myDiv.className = 'dnd-div';
        myDiv.innerHTML = 'KEK MAKEK';
        divContainer.appendChild(myDiv);

        myDiv.style.position = 'absolute';
        myDiv.style.background = randomColor();
        myDiv.style.height = randSize();
        myDiv.style.width = randSize();
        myDiv.style.top = randPosition();
        myDiv.style.left = randPosition();
    }
}())


var dragObject = {};
var book = document.getElementById('div-container');
var dndDiv = document.getElementsByClassName('dnd-div');


book.onmousedown = function(e){
    /* if (e.which != 1) { 
        return; 
    } */
    var elem = e.target.closest('.dnd-div');
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    function moveAt(e) {
        elem.style.left = e.pageX - elem.offsetWidth / 2 + 'px';
        elem.style.top = e.pageY - elem.offsetHeight / 2 + 'px';
    }

    book.onmousemove = function(e) {
        moveAt(e);
    }

    elem.onmouseup = function() {
        book.onmousemove = null;
        ball.onmouseup = null;
        elem.style.zIndex = 1;
      }

}






