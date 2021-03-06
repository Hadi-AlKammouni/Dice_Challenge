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

    // First image
    if (i==0){
        switch (random_dice){

            case 1:
                image_one.src="assets/dice1.png"
                player_one=1
            break;
    
            case 2:
                image_one.src="assets/dice2.png"
                player_one=2
            break;
    
            case 3:
                image_one.src="assets/dice3.png"
                player_one=3
            break;
    
            case 4:
                image_one.src="assets/dice4.png"
                player_one=4
            break;
    
            case 5:
                image_one.src="assets/dice5.png"
                player_one=5
            break;
    
            case 6:
                image_one.src="assets/dice6.png"
                player_one=6
            break;
    
        }
    }

    // Second image
    else{
        switch (random_dice){

            case 1:
                image_two.src="assets/dice1.png"
                player_two=1
            break;
    
            case 2:
                image_two.src="assets/dice2.png"
                player_two=2
            break;
    
            case 3:
                image_two.src="assets/dice3.png"
                player_two=3
            break;
    
            case 4:
                image_two.src="assets/dice4.png"
                player_two=4
            break;
    
            case 5:
                image_two.src="assets/dice5.png"
                player_two=5
            break;
    
            case 6:
                image_two.src="assets/dice6.png"
                player_two=6
            break;

        }
    }
}

// Compare the results and introduce the winner or if the two players got equal points
if(player_one==player_two){
    document.getElementById("winner").innerHTML="Draw!"
} 
else if (player_one>player_two){
    document.getElementById("winner").innerHTML="???? Play 1 Win"
}
else{
    document.getElementById("winner").innerHTML="???? Play 2 Win"
}