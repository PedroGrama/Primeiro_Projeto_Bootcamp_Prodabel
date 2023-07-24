const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  function mascara_cpf(){
    var cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length ==7){
        cpf.value += "."
    }else if(cpf.value.length == 11){
        cpf.value += "-"
    }
}