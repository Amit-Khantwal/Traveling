// Navbar section start

function book() {
    document.querySelector('#bookes').style.color = "black";
    document.querySelector('#pakage').style.color = "blue";
    document.querySelector('#service').style.color = "blue";
    document.querySelector('#galery').style.color = "blue";
    document.querySelector('#homes').style.color = "blue";
    document.querySelector('#abouts').style.color = "blue";

}

function pakage() {
    document.querySelector('#bookes').style.color = "blue";
    document.querySelector('#pakage').style.color = "black";
    document.querySelector('#service').style.color = "blue";
    document.querySelector('#galery').style.color = "blue";
    document.querySelector('#homes').style.color = "blue";
    document.querySelector('#abouts').style.color = "blue";

}
function service() {
    document.querySelector('#bookes').style.color = "blue";
    document.querySelector('#pakage').style.color = "blue";
    document.querySelector('#service').style.color = "black";
    document.querySelector('#galery').style.color = "blue";
    document.querySelector('#homes').style.color = "blue";
    document.querySelector('#abouts').style.color = "blue";

}
function gallery() {
    document.querySelector('#bookes').style.color = "blue";
    document.querySelector('#pakage').style.color = "blue";
    document.querySelector('#service').style.color = "blue";
    document.querySelector('#galery').style.color = "black";
    document.querySelector('#homes').style.color = "blue";
    document.querySelector('#abouts').style.color = "blue";

}
function about() {
    document.querySelector('#bookes').style.color = "blue";
    document.querySelector('#pakage').style.color = "blue";
    document.querySelector('#service').style.color = "blue";
    document.querySelector('#galery').style.color = "blue";
    document.querySelector('#homes').style.color = "blue";
    document.querySelector('#abouts').style.color = "black";

}

// Navbar section end


//serch section start






//search section end


let flag = 0;

function controller(x) {

    flag = flag + x;

    slideShow(flag);
}


slideShow(flag);


function slideShow(num) {
    let slides = document.getElementsByClassName('slider');

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }else if(num < 0){
        num = 2;
        flag = 2;
    }

    for (let i of slides) {
        i.style.display = "none";
    }



    slides[num].style.display = "block";


}


//   second slide
let blag = 0;

function controlles(y) {

    blag = blag + y;

    slideShows(blag);
}





function slideShows(number) {
    let slides = document.getElementsByClassName('slides');

    if (number == slides.length) {
        blag = 0;
        number = 0;
    }else if(number < 0){
        number = 2;
        blag = 2;
    }

    for (let n of slides) {
        n.style.display = "none";
    }

    slides[number].style.display = "block";


}
slideShows(blag);

// third slide
let ex = 0;

function controllers(x) {

    ex = ex + x;

    slideShos(ex);
}


slideShos(ex);


function slideShos(num) {
    let slides = document.getElementsByClassName('sliders');

    if (num == slides.length) {
        ex = 0;
        num = 0;
    }else if(num < 0){
        num = 2;
        ex = 2;
    }

    for (let i of slides) {
        i.style.display = "none";
    }

    slides[num].style.display = "block";

}
// fourth slide
let tor = 0;

function controllers1(x) {

    tor = tor + x;

    slideShowing(tor);
}


slideShowing(tor);


function slideShowing(num) {
    let slides = document.getElementsByClassName('sliding');

    if (num == slides.length) {
        tor = 0;
        num = 0;
    }else if(num < 0){
        num = 2;
        tor = 2;
    }

    for (let i of slides) {
        i.style.display = "none";
    }

    slides[num].style.display = "block";


}

//   fifth slide

let fifth = 0;

function controllers2(x) {

    fifth = fifth + x;

    slideShowing1(fifth);
}


slideShowing1(fifth);


function slideShowing1(num) {
    let slides = document.getElementsByClassName('slided');

    if (num == slides.length) {
        fifth = 0;
        num = 0;
    }else if(num < 0){
        num = 2;
        fifth = 2;
    }

    for (let i of slides) {
        i.style.display = "none";
    }

    slides[num].style.display = "block";


}

// sixth slide
let sixth = 0;

function controllers3(x) {

    sixth = sixth + x;

    slideShowing2(sixth);

}


slideShowing2(sixth);


function slideShowing2(num) {
    let slides = document.getElementsByClassName('slideShow');

    if (num == slides.length) {
        sixth = 0;
        num = 0;
    }else if(num < 0){
        num = 2;
        sixth = 2;
    }
    

    for (let i of slides) {
        i.style.display = "none";
    }

    slides[num].style.display = "block";
}