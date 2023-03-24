const onDisplay = document.getElementById('operations')
let operations=''

function insert(valor) { 
  operations += valor;
  console.log('operations: ', operations)
  
  if ( valor == '/' || valor == '*'){
    
    const parcialOperation= operations.substring(0, operations.length -1);

    const parcialResult= eval(parcialOperation);

    operations= parcialResult + valor;
    
    valor= parcialResult + changeSynmbol(valor);
    
    onDisplay.innerHTML= '';
  }

  if (valor =='/100'){
    valor= changeSynmbol(valor);
  }
  changeSynmbol(valor)

  onDisplay.innerHTML += valor

}

function changeSynmbol(valor){
  if(valor == '/'){
    return valor = '÷'
  }

  if(valor == '*'){
    return valor = 'x'
  }

  if(valor == '/100'){
    return valor = '%'
  } 
}

function clean(){
  onDisplay.innerHTML= '';
  operations= '';
  
}

function backspace(){
  if(onDisplay.textContent){
    let changeDisplay= document.querySelector('.display').innerHTML;

    onDisplay.innerHTML= changeDisplay.substring(0, operations.length -1);

    operations= operations.substring(0, operations.length -1)
  }

}

function result(){
  onDisplay.innerHTML = eval(operations);
}