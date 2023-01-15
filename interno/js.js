function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
      change.target.classList.add('element-img');
      change.target.classList.add('element-comp2');
    }
    else{
        change.target.classList.remove('element-show');
        change.target.classList.remove('element-img');
        change.target.classList.remove('element-comp2');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.div-text');
for (let elm of elements) {
  observer.observe(elm);
}
let options2 = { threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntry, options2);
let elements2 = document.querySelectorAll('.img1');
for (let elm2 of elements2) {
  observer2.observe(elm2);
}
let options3 = { threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntry, options3);
let elements3 = document.querySelectorAll('.complect-2');
for (let elm3 of elements3) {
  observer2.observe(elm3);
}
