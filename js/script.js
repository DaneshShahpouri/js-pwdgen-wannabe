let switchVersion = prompt("Digita '1' per la versione default, '2' per la versione contratta o '3'(o un qualsiasi valore) per la versione random");

if( switchVersion == "1" )
    {
    //Versione Default
    //------------------
    let userName = prompt("Come ti chiami?");

    let userLastname = prompt("Qual è il tuo cognome?");

    let UserColor =  prompt("Qual è il tuo colore preferito?");

    let passwordGenerator = userName + userLastname + UserColor + "5";

    console.log(passwordGenerator);

    }else if (switchVersion == "2")
        {
            //Versione Contratta
            //------------------
            console.log(prompt("Come ti chiami?") + prompt("Qual è il tuo cognome?") + prompt("Qual è il tuo colore preferito?") + "4");

        }else
            {
                //Versione Bonus con math random
                //--------------------
                let userName = prompt("Come ti chiami?");

                let userLastname = prompt("Qual è il tuo cognome?");

                let UserColor =  prompt("Qual è il tuo colore preferito?");
                
                let random = Math.floor(Math.random() * 100);

                let passwordGenerator_2 = userName + userLastname + UserColor + random;

                console.log(passwordGenerator_2);
            }
