document.querySelector('.colo').onclick = function () {
    if(b == 1){
        this.style.width = '20px';
        this.style.height = '17px';
        this.style.border = '1px solid black';
        this.style.borderRadius = '1px';
        document.getElementsByClassName('palka')[0].style.height = '0px';
        document.getElementsByClassName('palka')[0].style.border = '0px';
        document.getElementsByClassName('back')[0].style.top = '-3px';
        document.getElementsByClassName('back')[0].style.color = 'black';
        div = document.createElement("div")
        div.classList.add("search");
        document.querySelector(".carta").append(div)
        search = document.createElement("input")
        search.style.outline = "0"
        search.style.outlineOffset = "0"
        search.style.border = "1px solid black"
        search.style.width = "100px"
        document.querySelector(".search").append(search)
        b=0
    }
    else{
        this.style.width = '100px';
        this.style.height = '100px';
        this.style.border = '8px solid black';
        this.style.borderRadius = '50%';
        this.style.backgroundColor = 'white';
        document.getElementsByClassName('back')[0].style.color = 'white';
        document.getElementsByClassName('back')[0].style.top = '-70px';
        document.getElementsByClassName('palka')[0].style.height = '70px';
        document.getElementsByClassName('palka')[0].style.border = '3px solid black';
        document.querySelector(".search").remove(search)
        b=0
        b=1
    }
}