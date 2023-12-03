document.getElementById("footer").innerHTML = "© SHUBO ZHANG     " + Date()
function clickFunction() {
    alert("THIS IS SHUBO'S WEBSITE")
}
let btn = document.getElementById('btn-alert')

btn.onmouseover = () => {
    btn.innerText = 'You are so annoying!!!';
};

btn.onmouseleave = () => {
    btn.innerText = 'Hey, this is Shubo';
};

let count = 1;
document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    if (count%2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
    document.getElementById('txt-counter').innerHTML = "Number: " + count
}

for (let i = 0; i < 100; i = i + 1) {
    // create a new <li> element with the createElement() document method
    let listItem = document.createElement('li');
    // set the text content of the new <li> element
    if(i%2==0){
        listItem.textContent = 'odd';
        listItem.classList.add("odd")
        listItem.classList.remove("even")
    }
    else{
        listItem.textContent = 'even';
        listItem.classList.add("even")
        listItem.classList.remove("odd")
    }
    document.getElementById("numbers").appendChild(listItem)
    // append the <li> element to your ordered list
    // (your code here)
  }