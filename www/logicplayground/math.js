//Calculate users card sum
	function calculateSum(){
		//Get user's cards
		var userCard1 = JSON.parse(localStorage.getItem('card1'));
		var userCard2 = JSON.parse(localStorage.getItem('card2'));
		var userSum;

		//Determine if ace is in hand, if not, just add the ranks
		
		if(userCard1.rank == "ace"){
			var softPoints = true;
			userCard1.rank = 11;
		}
		if(userCard2.rank == "ace"){
			var softPoints = true;
			userCard2.rank = 11;
		}

		//To int
		var rank1 = parseInt(userCard1.rank,10);
		var rank2 = parseInt(userCard2.rank,10);
		//Inital sum
		userSum = rank1 + rank2;

		//Return the user's sum, if they should use softPoints or not & their ranks
		var sumArray = [userSum, rank1, rank2, softPoints];
		return sumArray;

	}

	function makeMove(){
		//Get the above user's sum & their ranks
		var sumArray = calculateSum();
		var userSum = sumArray[0];
		var rank1 = sumArray[1];
		var rank2 = sumArray[2];
		var softpoints = sumArray[3];
		var moveDecision;
		var cardFaceUp = JSON.parse(localStorage.getItem('faceup'));
		//Ace is represented as 11 in this
		if(cardFaceUp.rank != "ace"){
			var faceValue = parseInt(cardFaceUp.rank,10);
		}
		else{
			var faceValue = 11;
		}
		//STEPS/RULES FROM THE MATH SPREADSHEET STRART HERE-------------------------------------
		//Step 1: Pairs
		if(rank1==rank2){
			//if double is 2 or 3
			if(rank1 == 2 || rank1 == 3){
				if(2 <= faceValue || faceValue <= 7){
					return "split";
				}
				else if(faceValue>7){
					return "hold";
				}
			}
			//if double is 4
			else if(rank1 == 4){
				if(faceValue == 5 || faceValue == 6){
					return "split";
				}
				else{
					return "hold";
				}
			}
			//if double is 5
			else if(rank1 == 5){
			    if(2 <= faceValue || faceValue <= 9){
			        return "double down";
			    }
			    else if(faceValue>9){
			        return "hit";
			    }
			}

			//if double is 6
			else if(rank1 == 6){
			    if(2 <= faceValue || faceValue <= 6){
			        return "split";
			    }
			    else if(faceValue>6){
			        return "hit";
			    }
			}
			//if double is 7
			else if(rank1 == 7){
			    if(2 <= faceValue || faceValue <= 7){
			        return "split";
			    }
			    else if(faceValue>7){
			        return "hit";
			    }
			}
			//if double is 9
			if(rank1 == 9){
			    if(2 <= faceValue <= 6 || faceValue == 8 || faceValue == 9){
			        return "split";
			    }
			    else if(faceValue == 7 || facevalue > 9){
			        return "stand";
			    }
			}
			//if double is 10
			else if(rank1 == 10){
			    return "stand";
			}
			//if double is 8 or ace
			else if(rank1 == 8 || rank1 == 11){
			    return "split";
			}
		}


		//Step 2: Aces
		if(rank1 != rank2 && (rank1 == 11 || rank2 == 11)){
			if(rank1 == 11){
				notAce = rank2;
			}
			else{
				notAce = rank1;
			}
			//A,2-3
			if(notAce == 2 || notAce == 3){
				if(2 <= faceValue <= 4 || faceValue > 6){
					return "hit";
				}
				else if(faceValue == 5 || faceValue == 6){
					return "double down";
				}
			}
			//A,4-5
			else if(notAce == 4 || notAce == 5){
				if(faceValue == 2 || faceValue == 3 || faceValue > 6){
					return "hit"
				}
				else if(4 <= faceValue <= 6){
					return "double down";
				}
			}
			//A,6
			else if(notAce == 6){
				if(faceValue == 2 || faceValue > 6){
					return "hit"
				}
				else if(3 <= faceValue <= 6){
					return "double down";
				}
			}
			//A,7
			else if(notAce == 7){
				if(faceValue == 2 || faceValue == 7 || faceValue == 8){
					return "stand";
				}
				else if(3 <= faceValue <= 6){
					return "double down";
				}
				else if(faceValue > 8){
					return "hit";
				}
			}
			//A,8-10
			else if(8 <= notAce <= 10){
				return "stand";
			}
		}
		//Sum calculation
		if(userSum >= 17){
			return "stand";
		}
		//User sum 13-16
		else if(13 <= userSum <= 16){
			if(2 <= faceValue <= 6){
				return "stand";
			}
			else if(faceValue > 6){
				return "hit";
			}
		}
		//User sum 12
		else if(userSum == 12){
			if(4 <= faceValue <= 6){
				return "stand";
			}
			else if(faceValue == 2 || faceValue == 3 || faceValue > 6){
				return "hit";
			}
		}
		//User sum 11
		else if(userSum == 11){
			if(2 <= faceValue <= 10){
				return "double down";
			}
			else if(faceValue > 10){
				return "hit";
			}
		}
		//User sum 10
		else if(userSum == 10){
			if(2 <= faceValue <= 9){
				return "double down";
			}
			else if(faceValue > 9){
				return "hit";
			}
		}
		//User sum 9
		else if(userSum == 9){
			if(3 <= faceValue <= 6){
				return "double down";
			}
			else if(faceValue == 2 || faceValue > 6){
				return "hit";
			}
		}
		//User sum 5-8
		else if(5 <= userSum <= 8){
			return "hit";
		} 
		

		//}
		
		return moveDecision;
	}
