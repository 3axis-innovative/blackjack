function addCard(){



		//Get selected values
		var cardSuit = document.querySelector('input[name="suit"]:checked').value;
		var cardRank = document.querySelector('input[name="rank"]:checked').value;
		var cardOwner = document.querySelector('input[name="owner"]:checked').value;
		//Create card object
		var card = {suit:cardSuit, rank:cardRank, owner:cardOwner};

		//Cards left array (used for counting)
		//if(card.rank = "jack"){
			//cardsArray[1] = cardsArray[1]-1;
			//card.rank = 10;
		//}
		//else if(card.rank = "ace"){
			//cardsArray[11] = cardsArray[1]-1;
		//}
		//else if(card.rank = "king"){
			//cardsArray[12] = cardsArray[1]-1;
			//card.rank = 10;
		//}
		//else if(card.rank = "queen"){
			//cardsArray[0] = cardsArray[1]-1;
			//card.rank = 10;
		//}
		//else{
			//cardsArray[card.rank] = cardsArray[card.rank] - 1;
		//}




		//Save object locally
		if(card.owner != "users"){
			//Store JSON string value of object (required for storage) & display card
			localStorage.setItem('faceup', JSON.stringify(card));
			document.getElementById("dealerCardText").innerHTML = "Dealer has: "+ cardRank + " of "+ cardSuit;

		}
		else{
			//Check if first card exists, if it does, add a second card
			if(localStorage.getItem('card1') === null){
				localStorage.setItem('card1', JSON.stringify(card));
				document.getElementById("card1Text").innerHTML = "You have: "+ cardRank + " of "+ cardSuit;
			}
			else if(localStorage.getItem('card2') === null){
				localStorage.setItem('card2', JSON.stringify(card));
				document.getElementById("card2Text").innerHTML = " and a: "+ cardRank + " of "+ cardSuit;
				theDecision = makeMove();
				document.getElementById("moveText").innerHTML ="You should "+ theDecision + " bro.";
			}
			//if there are already two cards
			else if(localStorage.getItem('card1') != null && localStorage.getItem('card2') != null){
				
				alert("error! cards full!")
			}
		}


	}