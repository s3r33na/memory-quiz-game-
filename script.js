const cards = document.querySelectorAll(".card");
let movesDisplay = document.querySelector('.move-counter'); // Select the move counter display element


let matchedCard=0;
let cardOne, cardTwo;
let move= 0;
let disableCard = false;

function flipcard(e){

let clickedcard = e.target; //getting user click card 

 if(clickedcard !== cardOne && !disableCard){
    clickedcard.classList.add("flip");
        if (!cardOne){
            //return the value of the card one to clickcard
        
            return cardOne =clickedcard;
        
        }
    cardTwo= clickedcard;
    disableCard = true;
    let cardOneImg =cardOne.querySelector("img").src,
    cardTwoImg= cardTwo.querySelector("img").src;
    matchCard(cardOneImg,cardTwoImg);
           // Increment the move counter for every pair of card flips, regardless of match
           move++; 
           movesDisplay.innerText = `Moves: ${move}`; // Update the move display
   

 }


}

function  matchCard(img1, img2)
{

    if(img1 === img2){ //if the two cards match 
        matchedCard++
      


        if(matchedCard == 8){

            setTimeout(() => {
            
    
                return shuffleCard();
            }, 900);
    
    
           
        }

    cardOne.removeEventListener("click", flipcard);
    cardTwo.removeEventListener("click", flipcard);

    cardOne=cardTwo="";// set them in the blank if they match 
    return  disableCard = false;
    }
        setTimeout(() => {
            
    
            //to add A shake style to the two cards after 400ms 
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
        }, 400);


        setTimeout(() => {
            
    
            //to remove the style shake and flip from both if they are not a match 
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne=cardTwo="";// set them in the blank if they match 
        disableCard = false;
        }, 1000);


}


function shuffleCard(){
    
  
 
    
   
        setTimeout(() => {
                let matchedCard=0;
        cardOne, cardTwo ="";
        move = 0; // Reset move count when shuffling cards
        movesDisplay.innerText = `Moves: ${move}`; // Reset move display
        let arr =[1, 2, 3, 4, 5, 6, 7, 8,  1, 2, 3,  4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1: -1);
        
            
            cards.forEach((card, index) => {
                card.classList.remove("flip");
                let imgTag = card.querySelector("img");
                imgTag.src = `pics/${arr[index]}.png`
                card.addEventListener("click", flipcard);
                });
    
           
        }, 5000);
}
shuffleCard();

cards.forEach(card => {
 
    //we will add onclick event for all of the cards 
    card.addEventListener("click" , flipcard );
});

