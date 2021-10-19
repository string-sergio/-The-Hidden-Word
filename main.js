function hiddenWord(num) {
  if (num > 99 && num <=  999999 ){
    let clave = ""
    let string_num = num.toString()
    
    for (let i = 0; i < string_num.length; i++)
      clave += diccionario(string_num[i])
    
    return clave
  }
  
  else 
    return false
}

function diccionario(letter){
  let array_diccionario = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"]
  return array_diccionario[parseInt(letter, 10)]
}

const result = hiddenWord(500)
console.log(result)
