class Calculator{
    constructor(previousOperandTextEelemant,currentOperandTextEelemant){
        this.previousOperandTextEelemant = previousOperandTextEelemant
        this.currentOperandTextEelemant = currentOperandTextEelemant
        this.clear()
    } 
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined


    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = number

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextEelemant.innerText = this.currentOperand

    }


}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector.All('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextEelemant = document.querySelectorAll( '[data-previous-operand]')
const currentOperandTextEelemant = document.querySelectorAll( '[data-current-operand]')

const calculator = new Calculator(previousOperandTextEelemant,currentOperandTextEelemant)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay() 
    })

    
})