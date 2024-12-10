/*function readName(num){
        fetch('emulators/images.json')
            .then(response => response.json()) // Step 2: Parse the JSON data
            .then(data => {
                // Now 'data' is a JavaScript array or object
                
                const gameTitle = data[num];

                alert(gameTitle);
                
                return gameTitle;
                
            })
            .catch(error => console.error('Error fetching JSON for game name:', error));
            
      }      
      
      const tempthing = readName(1);
      alert(tempthing);
      
      function loadPreviousGames(){
        alert('test');
        //let previousGameOne = getCookieByName('previousEmuOne');
        let previousGameOne = 0;
        //let previousGameTwo = getCookieByName('previousEmuTwo');
        //let previousGameThree = getCookieByName('previousEmuThree');
        
        
        
        const gameOneContainer = document.getElementById('contPlayOneDiv');
        
        if(previousGameOne !== null){
          let gameTitle = 'hello';
          let gamePic;
            
            
            //fetch('emulators/images.json')
            //.then(response => responses.json()) // Step 2: Parse the JSON data
            //.then(data => {
            //      // Now 'data' is a JavaScript array or object
            //      gamePic = data[previousGameOne];
            //      alert(gamePic+"hello");
            //})
            //.catch(error => console.error('Error fetching JSON for game picture:', error));
                  
          alert(gameTitle+"hello");
          gameOneContainer.innerHTML = '<button class="rounded-lg game-link-container"><img src="../codys-shack-background-static.png" class="max-w-sm rounded-lg image-darken"><span style="cursor: pointer;" class="game-link-text text-4xl w-full font-bold">'+gameTitle+'</span></button>';        
        } else if(previousGameOne == null) {
          gameOneContainer.innerHTML = '<a href="#startplaying"><button class="rounded-lg game-link-container"><img src="../codys-shack-background-static.png" class="max-w-sm rounded-lg image-darken" style="opacity: 0.5"><span style="cursor: pointer;" class="game-link-text-nohover text-4xl w-full font-bold">Play some games,</span><span style="cursor: pointer;" class="game-link-text-small-nohover text-2xl w-full font-bold">they will show up here!</span></button></a>';
        } else {
          alert("We've detected an error loading in games, the site will now be reloaded in an attempt to fix the issue.")
          location.reload();
        }
        
        
        //gameOneContainer.innerHTML = blank; 
        //gameOneContainer.innerHTML = '<button class="rounded-lg game-link-container"><img src="../codys-shack-background-static.png" class="max-w-sm rounded-lg image-darken"><span style="cursor: pointer;" class="game-link-text text-4xl w-full font-bold">Placeholder</span></button>';
        
      }
      
      //loadPreviousGames();*/
