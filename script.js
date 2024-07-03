const numberInput = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const outputText = document.getElementById('output')

const conversionTable = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
}

let conversionTerms = Object.keys(conversionTable)
                        .map(term=>parseInt(term))
                        .sort((a,b) => b-a)

function handleConvertBtnClick() {
    const inputText = numberInput.value
    if (!checkInputText(inputText)) {
        numberInput.value = ''
        return
    }
    const inputInt = parseInt(inputText)
    const roman = convertToRoman(inputInt)
    outputText.innerText = roman
}

function convertToRoman(num) {
    if (num===0) {
        return ''
    }
    const maxTerm = conversionTerms.find(term=>term<=num)
    return conversionTable[maxTerm] + convertToRoman(num-maxTerm)
}

function checkInputText(text) {
    if (!text) {
        outputText.innerText = "Please enter a valid number"
        return false
    } else {
       const inputInt = parseInt(text)
       if (!(inputInt>=1)) {
            outputText.innerText = "Please enter a number greater than or equal to 1"
            return false
       } else if (!(inputInt<=3999)) {
            outputText.innerText = "Please enter a number less than or equal to 3999"
            return false
       }
    }
    return true
}

convertBtn.addEventListener('click', handleConvertBtnClick)