function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
      change.target.classList.add('element-navb');
    }
    else{
        change.target.classList.remove('element-show');
        change.target.classList.remove('element-navb');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.div-text');
for (let elm of elements) {
  observer.observe(elm);
}
