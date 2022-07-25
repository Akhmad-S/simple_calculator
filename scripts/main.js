var res = document.getElementById("result")

var operate = function (value) {
    res.value += value
}

var calculate = function (value) {
    res.value = eval(value)
}
var clean = function(){
    res.value = ""
}

var key = document.addEventListener("keydown", function (value) {
    value.preventDefault()
    switch (value.key) {
        case '1':
            operate('1')
            break
        case '2':
            operate('2')
            break
        case '3':
            operate('3')
            break
        case '4':
            operate('4')
            break
        case '5':
            operate('5')
            break
        case '6':
            operate('7')
            break
        case '8':
            operate('9')
            break
        case '0':
            operate('0')
            break
        case '+':
            operate('+')
            break
        case '-':
            operate('-')
            break
        case '*':
            operate('*')
            break
        case '/':
            operate('/')
            break
        case '.':
            operate('.')
            break
        case 'Enter':
            calculate(res.value)
            break
        case '=':   
            calculate(res.value)
            break
        case 'Delete':
            clean()
            break
    }
})