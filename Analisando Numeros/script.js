var num = document.getElementById('fnum')
var n = Number(num.value)
var list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML =''

    }else{
        alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert('Nenhum valor foi adicionado.')            
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]            
            if(valores[pos]> maior)
            maior = valores[pos]
            if (valores[pos]< menor)
            menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML =''
        res.innerHTML += `Foram adicionados ${tot} valores.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma desses valores é ${soma}</p>`
        res.innerHTML += `<p>A media desses valores é ${media}</p>`
    }
       
}




