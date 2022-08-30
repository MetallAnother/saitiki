let b = 1

document.querySelector('.lang').onclick = function () {
if(b==1){
    document.getElementsByClassName('eng')[0].style.color = 'rgba(128, 128, 128, 0.369)';
    window.location.href = './index.html';
    document.getElementsByClassName('ru')[0].style.color = 'black';
    b=0
}
else{
    document.getElementsByClassName('eng')[0].style.color = 'black';
    window.location.href = '../index.html';
    document.getElementsByClassName('ru')[0].style.color = 'rgba(128, 128, 128, 0.369)';
    b=1
}

}