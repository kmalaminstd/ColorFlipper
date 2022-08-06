import allSelectors from "./AllSelectors.js"

class UI{
    initialize(){
        const {
            colorGenBtnElm,
            colorShowElm,
            body
        } = allSelectors.allSelectors()
        const color = this.colorsSchem()

        colorGenBtnElm.addEventListener('click', () => {
            const randomNumber = this.getRandomNumber()
            body.style.backgroundColor = color[randomNumber]
            colorShowElm.textContent = color[randomNumber]
        })
    }

    colorsSchem(){
        const colors = ['red', 'green', 'rgba(133, 122, 200)', '#f15025']
        return colors
    }

    getRandomNumber(){
        const colors = this.colorsSchem()
        return Math.floor(Math.random() * colors.length)
    }
}

const ui = new UI()
export default ui