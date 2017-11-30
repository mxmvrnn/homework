function randomColor(){ 
    var randColor='#'+rand()+rand()+rand();
    return randColor;
};

     
function rand(){
    var c=parseInt(Math.random()*255).toString(16);
    return (""+c).length==1?'0'+c:c;
};


function randSize() {
    return Math.random() * 700 + "px";
}

function randPosition() {
    return Math.random() * 1000 + "px";
}

(function () {

    var MyButton = document.getElementById('main-button');
    MyButton.onclick = function(){
        // document.body.removeChild(myDiv);
        var myDiv = document.createElement('div');
        myDiv.innerHTML = 'Привет, мир!';
        
    
    
        document.body.appendChild(myDiv)
        myDiv.style.position = 'absolute';
        myDiv.style.background = randomColor();
        myDiv.style.height = randSize();
        myDiv.style.width = randSize();
        myDiv.style.top = randPosition();
        myDiv.style.left = randPosition();
    
    
        /* document.body.removeChild(myDiv); */
    }
}()) 


/* (function(){
    var myDiv = document.createElement('div');
    myDiv.innerHTML = 'Привет, мир!';


    document.body.appendChild(myDiv)
    myDiv.style.background = randomColor();
    myDiv.style.height = randSize();
    myDiv.style.width = randSize();
    myDiv.style.top = randPosition();
    myDiv.style.left = randPosition();



}()) */