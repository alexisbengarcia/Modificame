function HandlerSubmit(event){
event.preventDefault();
let form=event.target;
let estilo = form.texto.value;
document.querySelector('h1').style[estilo] = form.texto2.value;
}
