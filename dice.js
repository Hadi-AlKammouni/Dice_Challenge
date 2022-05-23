// Declaring array to pick a random number from it
const dice_array=[1,2,3,4,5,6]

// Declaring variables to simplify their usage later
let image_one=document.getElementsByClassName("img1")[0]
let image_two=document.getElementsByClassName("img2")[0]

// Declaring two variables to store the result of each player
let player_one = 0
let player_two= 0

// For loop that etirates only 2 times in order to pick randomly only 2 images
for (let i=0; i<2; i++){

    let random_dice = dice_array[Math.floor(Math.random() * dice_array.length)]

}    