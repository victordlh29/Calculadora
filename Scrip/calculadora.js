resultado = () => {
    let operacion1 = document.querySelector("#signo").value
    if (!operacion1) {
      alert("Selecione el signo de la operación.")
      return  
    }
    if (operacion1 == "+") {
        suma()
    }
    if (operacion1 == "-") {
        resta()
    }
    if (operacion1 == "*") {
        multiplicacion()
    }
    if (operacion1 == "/") {
        division()
    }
}

suma = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1||!num2) {
        alert('Ingrese un número')
        return
    }
    const msg = document.getElementById("msg")
    msg.style.display=""
    msg.innerHTML = "Resultado: " + (num1 + num2)
}

resta = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1||!num2) {
        alert('Ingrese un número')
        return
    }
    const msg = document.getElementById("msg")
    msg.style.display=""
    msg.innerHTML = "Resultado: " + (num1 - num2)
}

multiplicacion = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1||!num2) {
        alert('Ingrese un número')
        return
    }
    const msg = document.getElementById("msg")
    msg.style.display=""
    msg.innerHTML = "Resultado: " + (num1 * num2)
}
division = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1||!num2) {
        alert('Ingrese un número')
        return
    }
    const msg = document.getElementById("msg")
    msg.style.display=""
    msg.innerHTML = "Resultado: " + (num1 / num2)
}