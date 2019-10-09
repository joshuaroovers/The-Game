var LoopChoice1 = true; //LOOK / REST
var LoopChoiceA2 = true; //INSPECT DOOR / LOOK CELL / SCREAM
var LoopChoiceAA3 = true; //FORCE DOOR / KEY
var LoopChoiceAB3 = true; //INSPECT SINK / TOILET / MATTRES / WINDOW
var LoopChoiceAC3 = true; //SCREAM AGAIN
var LoopChoiceACY4 = true; // SCREAM AGAIN #2
var LoopChoiceAAB4 = true; //CALL HELP / NOISE
var LoopChoiceAABA5 = true; // TELL STRANGER Y/N
var LoopChoiceAABB5 = true;// APOLOGIZE / DISTRACT / NOTHING
var LoopChoiceABB4 = true; // GRAB OBJECT
var LoopChoiceABD4  = true; // PULL BAR
var LoopChoiceABDY5 = true; // GO OUT WINDOW
var LoopChoiceAABBB6 = true; // WHICH WAY GO
var LoopChoiceAABAY6 = true; //TALK WALL / BRICK

alert("You wake up in a stange place, you don't remember how you got here.")


while(LoopChoice1 === true){

    choice1 = prompt("What do you do? \n A: Look around B: Rest")
//#1
if(choice1 == "A" || choice1 == "a") 
{
    LoopChoice1 = false;
    alert("You look around.")
    alert("You are in some kind of prison cell")
    alert("Grey concrete walls with metal bars and metal door")
    alert("Through the bars you can see long hallway filled with cells like these")
 
    while(LoopChoiceA2 === true){

    ChoiceA2 = prompt("What do you do? \n A: Inspect the door B: Look around cell C: Scream")
//#2A
if(ChoiceA2 == "A" || ChoiceA2 == "a")
{
    LoopChoiceA2 = false;
    alert("The door looks old and rusty.\nso does the lock")
    
    while(LoopChoiceAA3 === true){

    ChoiceAA3 = prompt("What do you do\n A: Try to force the door B: Look for a key")
//#3AA
    if(ChoiceAA3 == "A" || ChoiceAA3 == "a")
    {
        LoopChoiceAA3 = false;
        alert("You decide to force the door")
        alert("You push the door.\nit doesn't budge")
        alert("You kick the door.\nstill nothing")
        alert("You take a few steps back and charge full speed towards the door")
        alert("The door stays in place.\nyou fall over and hit your head on the concrete floor")
    
    }
//#3AA
    else if(ChoiceAA3 == "B" || ChoiceAA3 == "b")
    {
        LoopChoiceAA3 = false;
        alert("You decide brute force won't open this door even if it is old\ninstead you try and look for the key")
        alert("When you are just about to start looking you hear something echoing through the hallway..")
        alert("The jingeling of metal.\nmaybe the keys!")

        while(LoopChoiceAAB4 === true)
        {

            ChoiceAAB4 = prompt("What do you do?\n A: Call for help B: Make loud noises")
//#4AAB
            if(ChoiceAAB4 == "A" || ChoiceAAB4 == "a")
            {
                LoopChoiceAAB4 = false;
                alert("You decide to Call for help")
                alert("\'Hey! is someone there?! Can you help me!\'")
                alert("You hear a voice..")
                alert("Are they laughing?")
                alert("\"HA, Help you?\"")
                alert("\"Ha, Ha\"")
                alert("\"With what exactly?\"")
                LoopChoiceAABA5 = true; //possible to repeat this path
                while(LoopChoiceAABA5 === true)
                {
                
                    ChoiceAABA5 = prompt("Tell the stranger?\n Y/N")
//#5AABA
                    if(ChoiceAABA5 == "Y" || ChoiceAABA5 == "y")
                    {
                        LoopChoiceAABA5 = false;
                        alert("You decide to tell them")
                        alert("\'I need the keys to my cell door!\'")
                        alert("\"Oh, and why is that?\"")
                        alert("\'I want to leave this place ofcourse!\'")
                        alert("\"Ooooh why didn't you say so earlier?\nI could have let you out hours ago!\"")
                        alert("\'Really?! Thank you so much!\'")
                        alert("\"HA! as if I'm going to let you out I'm the guard here you idiot\"")
                        alert("Your hope of getting out sinks into the ground")
                        alert("But suddenly you hear something smash onto the ground behinde you.")
                        alert("on of the bricks in the wall fell out!")
                        alert("\"psst, hey you\"")

                        while(LoopChoiceAABAY6 === true)
                        {

                            ChoiceAABAY6 = prompt("What do you do?\n A: Talk to the wall person B: put the brick back")
//#6AABAY
                            if(ChoiceAABAY6 == "A" || ChoiceAABAY6 == "a")
                            {
                                LoopChoiceAABAY6 = false;
                                alert("You decide to talk to the wall person")
                                alert("\"Ah, Yes hello you\"")
                                alert("\'Hi?\'")
                                alert("\"Can't help but have heard that you want to escape?\"")
                                alert("\'I do, yeah\'")
                                alert("\"Well, I gotta say it's pretty stupid to ask a guard\"")
                                alert("\'Wow, thanks\'")
                                alert("\"But it's good you did other wise I would have been able to help you\"")
                                alert("\'Help me, how?\'")
                                alert("\"Well, I've got the key right here! And I want you to have it\"")
                                alert("\'What! You have a key?! But why aren't you using it yourself to escape?! \'")
                                alert("\"Well you see, I am too old to be able to out run these guards. Yes I could get out but I would never be able to make it to the door\"")
                                alert("\"That's why I want you to have it.\"")
                                alert("\'Thank you!\'")
                                alert("\"No need. Now go\"")
                                alert("Filled with new hope you go and unlock the cell door")
                                alert("...")
                                alert("The key..")
                                alert("It broke in the lock.")
                                alert("I guess the key was heavily corroded")
                                alert("...")
                                alert("Well look on the bright side you they won't be able to execute you anymore")
                                alert("But that won't be nessesary since you will never be able to leave anyways")
                                break;

                            }
//#6AABAY
                            else if(ChoiceAABAY6 == "B" || ChoiceAABAY6 == "b")
                            {
                                LoopChoiceAABAY6 = false;
                                alert("You decide to put back the brick and ignore the wispers\nIt can't be trusted!")
                                alert("The guard comes back and takes you to your execution")
                            }
                        }
                    }
//#5AABA
                    else if (ChoiceAABA5 == "N" || ChoiceAABA5 == "n")
                    {
                        LoopChoiceAABA5 = false;
                        LoopChoiceAAB4 = true;
                        alert("Actually. Never mind!")
                        alert("\"Then shut up\"")
                    }
                }
              

            }
//#4AAB
            else if(ChoiceAAB4 == "B" || ChoiceAAB4 == "b")
            {   
                LoopChoiceAAB4 = false;
                alert("You decide to make some noise.\nsomeone must hear it!")
                alert("And someone does! You can already hear their footsteps coming your way")
                alert("\"COULD YOU NOT\"")
                alert("there is an angry guard standing infront of your cell.")
                alert("They have the keys!")
                alert("\"HEY ARE YOU DEAF? I AM TALKING TO YOU\"")
                LoopChoiceAABB5 = true //repeatable
                while(LoopChoiceAABB5 === true)
                {
                    ChoiceAABB5 = prompt("What do you do?\n A: appologize B: distract them C: say nothing")
//#5AABB
                    if(ChoiceAABB5 == "A" || ChoiceAABB5 == "a")
                    {
                       LoopChoiceAABB5 = false;
                       LoopChoiceAAB4 = true;
                       alert("\'Sorry, my bad\'")
                       alert("\"You better be sorry\"")
                       alert("The guard leaves again\nThat didn't really work out let's try something else")
                    }
//#5AABB
                    else if(ChoiceAABB5 == "B" || ChoiceAABB5 == "b")
                    {
                        LoopChoiceAABB5 = false;
                        alert("\'Look, over there!\'")
                        alert("\"This beter be important. Oh! it's a coin\"")
                        alert("You quickly snatch the keys of the guard")
                        alert("\"Thanks, now shut up and be quiet\"")
                        alert("The guard leaves again")
                        alert("Well, that was easy")
                        alert("You unlock the your cell door")

                        while(LoopChoiceAABBB6 === true)
                        {

                            ChoiceAABBB6 = prompt("Now wich way do you go?\n A: Left B: Right")
//#6AABBB //GOOD ENDING #Guard pickpocket
                            if(ChoiceAABBB6 == "A" || ChoiceAABBB6 == "a")
                            {
                                LoopChoiceAABBB6 = false;
                                alert("You decide to go left")
                                alert("You walk through the long hall way with many cells")
                                alert("And at the end. Another Door!")
                                alert("You open it...")
                                alert("IT'S THE EXIT!")
                                alert("You made it congratulations!!!\nAnd thank you for playing")
                            }
//#6AABBB
                            else if(ChoiceAABBB6 == "B" || ChoiceAABBB6 == "b")
                            {
                                LoopChoiceAABBB6 = false;
                                alert("You decide to go right")
                                alert("You walk through the long hall way with many cells")
                                alert("And at the end. Another Door!")
                                alert("You open it...")
                                alert("You are greeted with many weapons pointing in your direction..")
                                alert("Looks like you found the guards break room.")
                                alert("\"HOW DID YOU GET OUT OF YOUR CELL?!\"")
                                alert("\"WELL SINCE YOU ESCAPED WE ARE ALLOWED TO KILL ON SIGHT\nTHIS SHOULD BE FUN. NOW RUN WHILE YOU CAN\"")

                            }

                        }

                    }
//#5AABB
                    else if(ChoiceAABB5 == "C" || ChoiceAABB5 == "c")
                    {
                        LoopChoiceAABB5 = false;
                        alert("You decide to say nothing")
                        alert("\"ARE YOU MOKKING ME?\"")
                        alert("\"YOU'LL REGRET THAT\"")
                        alert("The guard takes you out of your cell and brings you to your excecution")
                        
                    }

                }
            }
        }
    }
    }
}
//#2A
else if(ChoiceA2 == "B" || ChoiceA2 == "b")
{
    LoopChoiceA2 = false;
    alert("You decide to look around the cell")
    alert("There is a sink, toilet, an old mattres on the ground and a window")

    while(LoopChoiceAB3 === true)
    {

        ChoiceAB3 = prompt("What do you do?\n A: Inspect the sink B: inspect the toilet C: Inspect mattres D: inspect window")
//#3AB
        if(ChoiceAB3 == "A" || ChoiceAB3 == "a")
        {
            
            alert("You decide to inspect the sink")
            alert("...")
            alert("Yup")
            alert("...")
            alert("That's a sink alright")
        }
//#3AB
        else if(ChoiceAB3 == "B" || ChoiceAB3 == "b")
        {
            
            alert("You decide to inspect the toilet")
            alert("...")
            alert("There seems to be something in the toilet..")

            while(LoopChoiceABB4 === true)
            {

                ChoiceABB4 = prompt("Grab it?\n Y/N")
//#4ABB
                if(ChoiceABB4 == "Y" || ChoiceABB4 == "y")
                {
                    LoopChoiceABB4 = false
                    LoopChoiceAB3 = true;
                    alert("You decide to grab the object..")
                    alert("It's a rock..")
                    alert("It's completly useless")
                    alert("And now your hand is wet")
                    alert("Congratulations you weirdo")
                }
//#4ABB
                else if(ChoiceABB4 == "N" || ChoiceABB4 == "n")
                {
                    LoopChoiceABB4 = false
                    LoopChoiceAB3 = true;
                    alert("You decide not to")
                    alert("Probably for the better")
                }

            }

        }
//#3AB
        else if(ChoiceAB3 == "C" || ChoiceAB3 == "c")
        {
            LoopChoiceAB3 = false;
            alert("You decide to inspect the mattres")
            alert("It actually looks kinda nice")
            alert("You let yourself fall onto the mattres.")
            alert("It's not soft..")
            alert("It's really really really hard..")
            alert("IT'S FILLED WITH ROCKS!?")
            alert("Everything hurts")
            alert("Everything slowely starts to fade away\n You can see a bright light")
        }
//#3AB
        else if(ChoiceAB3 == "D" || ChoiceAB3 == "d")
        {
            LoopCHoiceAB3 = false;
            alert("You decide to inspect the window")
            alert("It's barred up with large metal bars")
            alert("one of them is a bit crooked")
            alert("It might be loose!")
            LoopChoiceABD4 = true //repeatable
            while(LoopChoiceABD4 === true)
            {

                ChoiceABD4 = prompt("Try to pull out the bar?\n Y/N")
//#4ABD
                if(ChoiceABD4 == "Y" || ChoiceABD4 == "y")
                { 
                    LoopChoiceABD4 = false;
                    alert("You try to take out the bar")
                    alert("It worked!")
                    LoopChoiceABDY5 = true; //repeatable even tho it doesn't make complete sence
                    while(LoopChoiceABDY5 === true)
                    {

                        ChoiceABDY5 = prompt("Go out the window?\n Y/N")
//#5ABDY
                        if(ChoiceABDY5 == "Y" || ChoiceABDY5 == "y")
                        {
                            LoopChoiceABDY5 = false;
                            alert("You decide to go out the window")
                            alert("It's a 50 feet drop to the ground")
                            alert("You land on the ground..")
                            alert("But your legs are shattered and you pass out fairly quickly")
                        }
//#5ABDY
                        else if(ChoiceABDY5 == "N" || ChoiceABDY5 == "n")
                        {
                            LoopChoiceABDY5 = false;
                            LoopChoiceAB3 = true;
                            alert("It's probably to high to jump out of the window")
                        }
                    }

                }
//#4ABD
                else if(ChoiceABD4 == "N" || ChoiceABD4 == "n")
                { 
                    LoopChoiceABD4 = false;
                    LoopChoiceAB3 = true;
                    alert("Let's look around a bit first")
                }
            }
        }
    }
}
//#2A
else if(ChoiceA2 == "C" || ChoiceA2 == "c")
{
    LoopChoiceA2 = false;
    alert("You decide to Scream, maybe someone will hear you and help?")
    alert("\"COULD YOU SHUT UP\"")
    LoopChoiceAC3 = true; //this loop can be returned to so it needs to be set to true again
    while(LoopChoiceAC3 === true)
    {

        ChoiceAC3 = prompt("Scream again? Y/N")
//#3AC
        if(ChoiceAC3 == "Y" || ChoiceAC3 == "y")
        {
            LoopChoiceAC3 = false;
            alert("\"I SAID SHUT UP\"")
            
            while(LoopChoiceACY4 === true)
            {
                ChoiceACY4 = prompt("Scream again??? Y/N")
//#4ACY
                if(ChoiceACY4 == "Y" || ChoiceACY4 == "y")
                {
                    LoopChoiceACY4 = false;
                    alert("\"ALRIGHT THAT'S IT\"")
                    alert("You hear loud and angry footsteps coming closer and closer to your cell")
                    alert("It's a guard!")
                    alert("\"DO YOU THINK THAT IS FUNNY OR SOMETHING!?\"")
                    alert("\"WELL I HAVE SOMETHING FUNNY FOR YOU THEN\"")
                    alert("\"HEY GUYS COME HERE SOMEONE WANTS TO MEET THE GUILLOTINE EARLY\"")
                }
//#ACY
                else if (ChoiceACY4 == "N" || ChoiceACY4 == "n")
                {
                    LoopChoiceACY4 = false;
                    LoopChoiceA2 = true;
                    alert("Probably beter to not provoke this stranger any more")
                }
            }
        }
//#3AC
        else if (ChoiceAC3 == "N" || ChoiceAC3 == "n")
        {
            LoopChoiceAC3 = false;
            LoopChoiceA2 = true;
            alert("Probably for the beter to listen to the stranger or you might get in even more trouble")
        }
    }
}

}
}
//#1
else if(choice1 == "B" || choice1 == "b")
{
    
    LoopChoice1 = false;
alert("You decide to rest first")
alert("Zzz")
alert("zZz")
alert("zzZ")
alert("You wake up to hearing someone yell")
alert("\"Yes! the prisoner is over here!\"")
alert("\"Ha Ha, they didn't even atempt to escape\"")
alert("\"Well, have fun at the guillotine\"")
}
//#1
else if(choice1 == "C" || choice1 == "c")
{
    LoopChoice1 = false;
    alert("ͭ̈̄̾ͨ ͚͓̝̅ͬ̽̑̂ͪC̶̯̹̗͕̋̃ͅͅ ͈̻͖̣͖̹̻͛͒͛̒ ̪̗̪͍̮̽̏ͧ͞")
    alert("̝̭̮̅̂͗̈́͑T͔ͫ̔̐̑̊͆̀H͖͎̹̰̯̖̘͊̏͆A̖͈̻̤̱ͮ̽̇ͧ͐̚T̴ͧ ͍̋ͪ́̌̽W̏A̅͋S̩͉͐͆͐͗͌̋͡Ṅ͙̮ͥ̒͞'̦́T̰̺̭̝̘̖͂̚\n ͎͍̺ͧ͊͛̋͒A̤̜͓̓̔̈ͤN̴̲̯̹̠̙͇̖̒ͧͯ̓̀ ͇̘̻̀̂͋̉͐̀O͝P̵̲̤̘̳̯͗ͭ̐ͬ͂́̎T̫̻̙̰̥͍̎͗͠Ȉ̀ͤO͔̭̳̣̟͊̃̃͛̓ͦ͞N̪̺̓̑͡")
}

}
