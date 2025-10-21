let number = document.getElementById('text');

function addsquare (square) {
    for (let i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', square);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';

        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteFigure);
       
        document.querySelector(".canvas").appendChild(div);
    }
}

function addtriangle (triangle) {
    for (let i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', triangle);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';
        div.style.right = String(Math.random()*1000+1) + 'px';

        div.addEventListener('click', changeColorTriangle);
        div.addEventListener('dblclick', deleteFigure);

        document.querySelector(".canvas").appendChild(div);
    }
}

function addcircle (circle) {
    for (var i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', circle);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';

        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteFigure);

        document.querySelector(".canvas").appendChild(div);
    }
}

function changeColor (event) {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    event.target.style.background = color;
}

function changeColorTriangle (event) {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    event.target.style.borderBottomColor = color;
}

function deleteFigure (event) {
    event.target.style.display = 'none';
}
