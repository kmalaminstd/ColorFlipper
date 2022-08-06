class AllSelectors{
    allSelectors(){
        const colorGenBtnElm = document.querySelector('#btn')
        const colorShowElm = document.querySelector('.color')
        const body = document.querySelector('body')

        return{
            colorGenBtnElm,
            colorShowElm,
            body
        }
    }
}

const allSelectors = new AllSelectors()
export default allSelectors