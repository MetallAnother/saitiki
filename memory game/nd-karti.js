let a = 1
let b = 1
let c = 1
let d = 1
let ctOne = document.getElementById(1).id
let ctTwo = document.getElementById(2).id
let ctThr = document.getElementById(2).id
let ctFor = document.getElementById(1).id

let clik = 0


document.querySelector('.carta').onclick = function () {
    if(a == 1){
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        this.style.backgroundColor = 'rgb(52, 51, 51)';
        document.getElementsByClassName('ct')[0].style.display = 'none';
        console.log(ctOne)
        a=0
    }
    else{
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('ct')[0].style.display = 'flex';
        a=1
    }
}   
document.querySelector('.carta2').onclick = function () {
    if(b == 1){
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('t')[0].style.display = 'none';
        this.style.backgroundColor = 'rgb(52, 51, 51)';
        console.log(ctTwo)
        b=0
    }
    else{
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('t')[0].style.display = 'flex';
        b=1
    }
  }    
document.querySelector('.carta3').onclick = function () {
    if(c == 1){
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('t2')[0].style.display = 'none';
        this.style.backgroundColor = 'rgb(52, 51, 51)';
        console.log(ctThr)
        c=0
    }
    else{
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('t2')[0].style.display = 'flex';
        c=1
    }
  }    
document.querySelector('.carta4').onclick = function () {
    if(d == 1){
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('ct2')[0].style.display = 'none';
        this.style.backgroundColor = 'rgb(52, 51, 51)';
        console.log(ctFor)
        d=0
    }
    else{
        this.style.transform = `rotateY(${this.d = (this.d | 0) + 180}deg)`;
        document.getElementsByClassName('ct2')[0].style.display = 'flex';
        d=1
    }
  }    


  


