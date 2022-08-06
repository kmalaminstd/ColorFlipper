import allSelectors from "./AllSelectors.js";

class Hex{
    initialize(){
        const {
                colorGenBtnElm,
                colorShowElm,
                body
        } = allSelectors.allSelectors()

        const colorLetter = this.colorSchem()

        colorGenBtnElm.addEventListener('click', () => {
            let hexCode = '#'
            for(let i = 0; i < 6; i++){
                const randomNum = this.getRandomNum()
                hexCode += colorLetter[randomNum]
            }
            body.style.backgroundColor = hexCode
            colorShowElm.textContent = hexCode
        })
        
    }

    getRandomNum(){
        const colorLetter = this.colorSchem()
        return Math.floor(Math.random() * colorLetter.length)
    }

    colorSchem(){
        const colorLetter = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        return colorLetter
    }
}

const hex = new Hex()
export default hex