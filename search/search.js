let b = 1


document.querySelector('.colo').onclick = function () {
    if(b == 1){
        this.style.width = '10px';
        this.style.height = '10px';
        this.style.border = '2px solid black';
        this.style.bottom = '2px';
        this.style.borderRadius = '50%';
        document.getElementsByClassName('palka')[0].style.height = '8px';
        document.getElementsByClassName('palka')[0].style.width = '2px';
        document.getElementsByClassName('palka')[0].style.border = '0px';
        document.getElementsByClassName('palka')[0].style.top = '7px';
        document.getElementsByClassName('palka')[0].style.left = '12px';
        document.getElementsByClassName('back')[0].style.top = '-3px';
        document.getElementsByClassName('back')[0].style.color = 'black';
        div = document.createElement("div")
        div.classList.add("search");
        document.querySelector(".carta").append(div)
        search = document.createElement("input")
        search.style.outline = "0"
        search.style.outlineOffset = "0"
        search.style.marginLeft = "10px"
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
        this.style.bottom = '0px';
        document.getElementsByClassName('palka')[0].style.top = '70px';
        document.getElementsByClassName('palka')[0].style.left = '113px';
        document.getElementsByClassName('back')[0].style.color = 'white';
        document.getElementsByClassName('back')[0].style.top = '-70px';
        document.getElementsByClassName('palka')[0].style.height = '70px';
        document.getElementsByClassName('palka')[0].style.border = '3px solid black';
        document.querySelector(".search").remove(search)
        b=1
    }
}