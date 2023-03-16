const display = document.getElementById("display");

function getData(){
    fetch("http://127.0.0.1:5500/data.txt").then(res => res.text()).then(data => {
        console.log("Hello1")
        display.innerText = data;
    })

    console.log("Hello2")
}