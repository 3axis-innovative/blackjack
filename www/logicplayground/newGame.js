//Deck of cards for counting    NEXT___________________________________________________
	//get shoesize
//deck = Array(13).fill(4*shoeSize);


function newGameLoad(){
	//Get & store amount of players at table
	var otherPlayers = prompt("How many other players are at the table? (not including you or dealer)", "0");
	if (isNaN(otherPlayers)){
		alert("Make sure to input a number");
		var otherPlayers = prompt("How many other players are at the table? (not including you or dealer)", "1");
	}
	localStorage.setItem('otherPlayers', otherPlayers);
	
	//Get & store shoesize
	var shoeSize = prompt("How many decks are in the shoe?", "1");
	if (isNaN(shoeSize)){
		alert("Make sure to input a number");
		var shoeSize = prompt("How many decks are in the shoe?", "1");
	}
	localStorage.setItem('shoeSize', shoeSize);


	//Create cardNames array
	var cardNames = ["Queen", "Jack", "2", "3", "4","5","6","7","8","9","10","Ace","King"];
	localStorage.setItem('cardNames', JSON.stringify(cardNames));

	//Create local "shoe" database w/ all the cards and how many are remaining
 		var db = openDatabase('shoe', '1.0', 'all of the deck of cards in the shoe', 2 * 1024 * 1024); 
         var msg; 
    
         db.transaction(function (tx) { 
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (card, amount)');
            //Fill database with cards and how many of each
            var i;
            for (i = 0; i < 13; i++) { 
            	tx.executeSql('INSERT INTO LOGS (card, amount) VALUES ("'+cardNames[i]+'",'+(4*shoeSize)+')');
            	msg = '<p>Log message created and row inserted.</p>'; 
            	} 
            
            console.log(msg); 
         })

         db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) { 
               var len = results.rows.length, i; 
               msg = "<p>Found rows: " + len + "</p>"; 
               console.log(msg); 
      
               for (i = 0; i < len; i++) { 
                  msg = "<p><b>" + results.rows.item(i).log + "</b></p>"; 
                  console.log(msg); 
               } 
            }, null); 
         }); 

}


//Clear localstorage on load
document.addEventListener("DOMContentLoaded", function() {
  localStorage.clear();
  newGameLoad()
});
