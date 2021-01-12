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
var divone = document.getElementById("one");
var shown = [];
var goatCanvas = document.getElementById('goatChart').getContext('2d');
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

        local();


        console.log(localStorage);
    }
}

function Images(name, image) {
    this.count = 0;
    this.name = name;
    this.image = "images/" + image
    allImages.push(this);
    this.countshow = 0;


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
function checkShow(imageName) {
    for (var i = 0; i < shown.length; i++) {
        if (shown[i].name === imageName) {
            return true;

        }

    }
    return false

}



function randomNum() {


    do {

        var left = Math.round(Math.random() * (allImages.length - 1));
        var picLeft = allImages[left].name;

    }
    while (checkShow(picLeft));


    do {
        var middel = Math.round(Math.random() * (allImages.length - 1));
        var right = Math.round(Math.random() * (allImages.length - 1));
        var picRight = allImages[right].name;
        var picMiddle = allImages[middel].name;



    } while (right === left || middel === left || right === middel || checkShow(picMiddle) || checkShow(picRight))
    shown = [];
    shown.push(allImages[right], allImages[middel], allImages[left])
    //console.log(shown);
    changePhoto(left, right, middel);
    allImages[middel].countshow++;
    allImages[right].countshow++;
    allImages[left].countshow++;




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
button.onclick = function () {

    if (firstTime) {
        var secondButton = document.createElement("button");
        secondButton.textContent = "reset";
        divone.appendChild(secondButton);
        secondButton.onclick = function () {
            window.location.reload();

        }
        var ourul = document.createElement("ul");
        ourul.setAttribute("id", "url1")
        divone.appendChild(ourul);

        //create button for reset 

        for (var i = 0; i <= allImages.length; i++) {
            var ourli = document.createElement("li");

            ourli.textContent = ` the result for  ${allImages[i].name} is ${allImages[i].count} and we show it ${allImages[i].countshow} times`;

            ourul.appendChild(ourli);
            firstTime = false;
        }


    }

    
}

function local() {

    localStorage.setItem("image-showing", JSON.stringify(allImages));

}


function checkAndRestore() {

    if (localStorage.length > 0) {
        allImages = JSON.parse(localStorage.getItem('image-showing'));

    }
}


function chart() {
    var arrayImageName = [];
    var arrayImageCount = [];
    var arrayImageCountShow = [];




    for (var i = 0; i < allImages.length; i++) {
        arrayImageName.push(allImages[i].name);
        arrayImageCountShow.push(allImages[i].countshow);
        arrayImageCount.push(allImages[i].count);

    }


    var myChart = new Chart(goatCanvas, {
        type: 'bar',
        data: {
            labels: arrayImageName, // array of labels (names of the goats)
            datasets: [
                {
                    label: '# of Goat Clicks',
                    data: arrayImageCount, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Time shown for the Goat',
                    data: arrayImageCountShow, // array of values (count for each goat when it was clicked)
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
checkAndRestore();