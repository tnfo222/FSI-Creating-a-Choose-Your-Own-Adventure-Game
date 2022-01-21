let firstAnswer  = window.prompt('Do you head left, right, or straight?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
        It scampers off down a small hole, just large enough for you to crawl through. 
        Do you follow it, or continue on your path?`)
    if(secondAnswer === 'follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(thirdAnswer === 'stay') {
            let finalAnswer = window.prompt('You live happily amongst the cats for the rest of your days.')
        }
        else if(thirdAnswer === 'spread the word') {
            let finalAnswer = window.prompt('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }
    }
    else if(secondAnswer === 'continue') {
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
        if(thirdAnswer === 'ladder'){
            let finalAnswer = 'After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.'
        }
        else if(thirdAnswer === 'staircase'){
            let finalAnswer = 'After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.'
        }
    }
} 
else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
        On the other side of him, you see a shiny chest of treasure. Another path would 
        lead you away from the dragon altogether. Which path do you take?`)
    if (secondAnswer === 'Past the dragon'){
        let thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay, be sus, or run:')
            if (thirdAnswer === 'stay'){
                let finalAnswer = window.prompt('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
            }
            else if (thirdAnswer === 'be sus'){
                let finalAnswer = window.prompt('The dragon wakes up and turns you into treasure, and he puts you in his treasure chest!')
            }                
            else if(thirdAnswer === 'run'){
                let finalAnswer = window.prompt('Quickly, you run back to the cave\'s entrance. Sheepish, you return home.')
            }
    }
    else if (secondAnswer === 'away from the dragon'){
        let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
            if (thirdAnswer === 'draw it'){
                let finalAnswer = window.prompt('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
            }
            else if (thirdAnswer === 'pick it'){
                let finalAnswer = window.prompt('ou pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
            }
    }
}
else if(firstAnswer === 'straight'){
    let secondAnswer = window.prompt(`You walk a few feet in a forest and come across a skeleton. Do you observe or continue walking?`)
    if(secondAnswer === 'observe'){
        let thirdAnswer = window.prompt('You see a relic within its rib cage. Do you take it or leave it?')
        if(thirdAnswer === 'take it') {
            let finalAnswer = window.prompt('The skeleton grabs your arm and strips you of your flesh. You die. Not POGGERS.')
        }
        else if(thirdAnswer === 'leave it') {
            let finalAnswer = window.prompt('That relic was pretty, but you leave the relic with the skeleton and continue on down the path. ')
        }
    }
    else if(secondAnswer === 'continue walking'){
        let thirdAnswer = window.prompt('A Lowes comes into view. You noticed that it is run down. There is commotion inside the building. Do you investigate or not?')
        if(thirdAnswer == 'investigate'){
            let finalAnswer = window.prompt('Zombies come out and turn you into one of them. In unison, you all start shouting "ONE OF US"!, "ONE OF US"!')
        }
        else if(thirdAnswer == 'no'){
            let finalAnswer = window.prompt('Technoblade is very sad for not subscribing to his YouTube channel, but you do not become a zombie. So Cheers to you!')
        }
    }
}