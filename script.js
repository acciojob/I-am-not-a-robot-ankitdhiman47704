let image_arr = document.querySelectorAll("img");
let arr = new Array();
let btn = document.getElementById("verify");
let count = 0
let para = document.getElementById("para");
let reset_btn = document.getElementById("reset")
let image_selected = new Array();
for (let i = 0; i < image_arr.length; i++) {
    arr.push(image_arr[i].src);
    image_arr[i].addEventListener("click", function (e) {
        image_arr[i].setAttribute("id", "img-hover")
        image_selected.push(image_arr[i].src)
        console.log(i); // selected index number
        count++;
        if (count == 2) {


            btn.style.display = "block";
            btn.addEventListener("click" , check)
            

            
        }
        else {
            btn.style.display = "none";
        }
        reset_btn.style.display = "block"
        
        // e.target.classList.toggle("img-hover");
    })
}

reset_btn.addEventListener("click" ,function(){
    window.location.reload();
})

let random_index = Math.floor(Math.random() * arr.length)
arr.push(arr[random_index]);

let img5 = document.createElement("img")
img5.src = arr[random_index];
let div = document.getElementById("container")
div.append(img5);



img5.addEventListener("click", function () {
    console.log(5); // selected index number
    img5.setAttribute("id", "img-hover")
    image_selected.push(img5.src);
    if (count == 2) {


        btn.style.display = "block";
        btn.addEventListener("click" , check)
    }
    else {
        btn.style.display = "none";
    }
    reset_btn.style.display = "block"
    count++;
})






function check(){
    if (image_selected[0] === image_selected[1]) {
        para.innerText = " You are a human. Congratulations!"
    }
    else {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
}
