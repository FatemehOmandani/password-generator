const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    let passOneEl = document.getElementById("passOne-el")
    let passTwoEl = document.getElementById("passTwo-el")
    
    let generate = false;
   

    function generateRandomPassword(){
        //set the length by the corrent value
        let passlength = document.getElementById("length").value;

        if(generate === false){
        let rndCharacters = [];
        for(let i = 0 ; i< passlength ; i++){
            let randomNr = Math.floor(Math.random() * characters.length);
            rndCharacters += characters[randomNr];
        }
        
        for(let i = 0 ; i<rndCharacters.length ; i++){
            passOneEl.textContent +=rndCharacters[i];
        
        }

        let rndCharactersTwo = [];
        for(let i = 0 ; i< passlength ; i++){
            let randomNrTwo = Math.floor(Math.random() * characters.length);
            rndCharactersTwo += characters[randomNrTwo];
        }
        
        for(let i = 0 ; i<rndCharactersTwo.length ; i++){
            passTwoEl.textContent +=rndCharactersTwo[i];
        
         }
         generate= true;
        }
        else{
            passOneEl.textContent = "";
            passTwoEl.textContent = "";
            generate=false;
            generateRandomPassword();
        }
        document.getElementById("status").innerText  = "";
        
        }

        function copyToClipboard(buttonId) {
           
            // Den Text des Buttons abrufen
            const text = document.getElementById(buttonId).textContent;
            
            // Text in die Zwischenablage kopieren
            navigator.clipboard.writeText(text).then(() => {
                // Erfolgsnachricht anzeigen
                document.getElementById("status").innerText  = "Text was copied!";
            }).catch(err => {
                // Fehlermeldung anzeigen, falls etwas schiefgeht
                document.getElementById("status").innerText  = "Error while copying.";
                console.error("Fehler:", err);
            });
            
}



    