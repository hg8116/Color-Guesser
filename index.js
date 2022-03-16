const mainText = document.querySelector(".main__text")
const blocks = document.querySelectorAll(".block")
const newColor = document.querySelector(".new__colors")
let ans

function randomNumber() { 
    return Math.floor(Math.random() * (256))
}

function genBlock(){
    mainText.textContent = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    const arr = []
    const guessClr = mainText.textContent
    ans = Math.floor(Math.random() * (6));
    console.log(ans)
    for (let i = 0; i < blocks.length; i++) {
        let blockClr = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
        blocks[i].style.setProperty("--block-clr", blockClr)
        // arr.push(blockClr)
    }

    blocks[ans].style.setProperty("--block-clr", guessClr)
    // console.log(arr)
}

newColor.addEventListener("click", ()=>{
    genBlock()
})

genBlock()



for(let i=0; i<blocks.length; i++){
    blocks[i].addEventListener("click", function(){
        console.log("clicked: " + i)
        if(i === ans){
            console.log("yes")
            alert("Well Done!, Correct answer👍")
            genBlock()
        }
        else{
            console.log("no")
            alert("Oh No!, Wrong answer! try again...")
        }
    })
}


