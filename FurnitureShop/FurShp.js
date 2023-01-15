let ul = document.querySelector('.ul-prod')
let img = document.querySelector('.but-prod img')

let ul2 = document.querySelector('.ul-room')
let img2 = document.querySelector('.but-room img')

let a = 0;
let b = 0;

 document.querySelector('.but-prod').addEventListener('click', () => {
   
    if (a == 0) {
        ul.style.display = 'contents';
        img.style.transform = `rotateX(${this.d = (this.d | 0) + 180}deg)`;

        a = 1
    }
    else{
        ul.style.display = 'none';
        img.style.transform = `rotateX(${this.d = (this.d | 0) + 180}deg)`;
        a = 0
    }

 })

 document.querySelector('.but-room').addEventListener('click', () => {
   
    if (b == 0) {
        ul2.style.display = 'contents';
        img2.style.transform = `rotateX(${this.a = (this.a | 0) + 180}deg)`;

        b = 1
    }
    else{
        ul2.style.display = 'none';
        img2.style.transform = `rotateX(${this.a = (this.a | 0) + 180}deg)`;
        b = 0
    }

 })



//  slider


let c= 0 ;

let slin = document.querySelector('.line-slide');
let hercon = document.querySelector('.hero-content');


document.querySelector(".but-slid-1").disabled = true;
document.querySelector(".but-slid-2").disabled = true;


document.querySelector('.but-shop').addEventListener('click', () => {

    hercon.style.display = "none";

    document.querySelector(".but-slid-2").disabled = false;
    
})


let cirkls = document.querySelectorAll('.cir');
let circo = 0;
let circo2 = -1;



console.log(cirkls);




 document.querySelector('.but-slid-2').addEventListener('click', () => {
    c = c + 1020 ;
    circo += 1;
    circo2 = circo - 1;
    if (c == 3060) {
        document.querySelector(".but-slid-2").disabled = true;
    }
    document.querySelector(".but-slid-1").disabled = false;

    cirkls[circo2].style.backgroundColor = "#D8D8D8";
    cirkls[circo].style.backgroundColor = "#E89F71";

    slin.style.left = -c + 'px' ;
    console.log(c)
    console.log(circo)
    console.log(circo2)
})
 document.querySelector('.but-slid-1').addEventListener('click', () => {
    c = c - 1020 ;
    circo -= 1;
    circo2 = circo + 2;
    circo2 -= 1;
    if (c == 0) {
        document.querySelector(".but-slid-1").disabled = true;
    }
    cirkls[circo2].style.backgroundColor = "#D8D8D8";
    cirkls[circo].style.backgroundColor = "#E89F71";
    document.querySelector(".but-slid-2").disabled = false;

    slin.style.left = -c + 'px' ;
    console.log(c)
    console.log(circo)
    console.log(circo2+'c2')
})


