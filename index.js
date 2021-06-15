/*console.log("Hello World", 4 - 6, "Another log");
console.warn("This is warning");
console.error("Error");

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 9)
console.log(c);

let a = ["fan", "camera", 34, null, true]
a.pop()
console.log(a.unshift("Harry"))
a.shift()
console.log(a)

let d = new Date();
console.log(d.getTime());
sel = document.querySelector('.container')
console.log(sel)

function clicked() {
    console.log("The button was clicked")
}
window.onload = function() {
    console.log("The page was loaded")
}

firstcontainer.addEventListener('click', function() {
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
    console.log("click hua");
})
firstcontainer.addEventListener('mouseover', function() {
    console.log("clicked on container")
}) */
lk = () => {
    console.log("I am your log");
}
localStorage.setItem('name', 'Harry')

localStorage
Storage  { name: "Harry", length: 1 }
localStorage.getItem('name')