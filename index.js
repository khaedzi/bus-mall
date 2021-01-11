// i will add fun con or the images

"use strict"
var leftImg = document.getElementById("left_goat_img");
var middelImg = document.getElementById("khaled");
var rightImg = document.getElementById("right_goat_img");
var h1Right = document.getElementById("right_goat_h2");
var h1Left = document.getElementById("left_goat_h2");
var h1Middel = document.getElementById("middel_goat_h2");
var test = document.getElementById("all_goats");
var allImages = [];
var trialsleft = 25;
var button = document.getElementById("button");
var divone=document.getElementById("one");

test.addEventListener("click", countGoats)



function countGoats(event) {

    var targetId = event.target.id;


    if (trialsleft !== 0) {
        if (targetId == 'left_goat_img' || targetId == "right_goat_img" || targetId == 'khaled') {

            var indecator = event.target.getAttribute('src');


            count(indecator);

            randomNum();
        }


    }

    else {

        test.removeEventListener("click", countGoats)
    }
}

function Images(name, image) {
    this.count = 0;
    this.name = name;
    this.image = "images/" + image
    allImages.push(this);
}
// Create all my images 
new Images("bag", "bag.jpg");
new Images("bananna", "banana.jpg");
new Images("bathroom", "bathroom.jpg");
new Images("boots", "boots.jpg");
new Images("breakfast", "breakfast.jpg");
new Images("bubblegum", "bubblegum.jpg");
new Images("chair", "chair.jpg");
new Images("cthulhu", "cthulhu.jpg");
new Images("dog-duck", "dog-duck.jpg");
new Images("dragon", "dragon.jpg");
new Images("pen", "pen.jpg");
new Images("pet-sweep", "pet-sweep.jpg");
new Images("scissors", "scissors.jpg");
new Images("shark", "shark.jpg");
new Images("sweep", "sweep.png");
new Images("tauntaun", "tauntaun.jpg");
new Images("unicorn", "unicorn.jpg");
new Images("usb", "usb.gif");
new Images("water-can", "water-can.jpg");
new Images("wine-glass", "wine-glass.jpg");

// i will do function to create ranom num

function randomNum() {

    var left = Math.round(Math.random() * (allImages.length - 1));

    // check we have not and repeted num 
    do {
        var middel = Math.round(Math.random() * (allImages.length - 1));
        var right = Math.round(Math.random() * (allImages.length - 1));
    }
    while (right === left || middel === left || right === middel) {
        changePhoto(left, right, middel);

    }
}



function changePhoto(left, right, middel) {
    leftImg.setAttribute("src", allImages[left].image)

    rightImg.setAttribute("src", allImages[right].image)
    middelImg.setAttribute("src", allImages[middel].image)
    h1Left.textContent = allImages[left].name;

    h1Middel.textContent = allImages[middel].name;
    h1Right.textContent = allImages[right].name;
}

//create function to claculate the count of click
function count(indecator) {
    for (var i = 0; i < allImages.length; i++) {
        if (indecator == allImages[i].image) {
            allImages[i].count++;
            trialsleft--;
        }

    }



}

randomNum();
var firstTime = true;
button.onclick =function(){

    if(firstTime){
    var secondButton=document.createElement("button");
    secondButton.textContent="reset";
    divone.appendChild(secondButton);
    secondButton.onclick=function(){
        window.location.reload();

    }
    var ourul=document.createElement("ul");
    ourul.setAttribute("id","url1")
    divone.appendChild(ourul);

    //create button for reset 
     
       for(var i=0; i<=allImages.length;i++){
           var ourli=document.createElement("li");

           ourli.textContent= ` the result for  ${allImages[i].name} is ${allImages[i].count}` ;

ourul.appendChild(ourli);
firstTime=false;
}
    }


}

