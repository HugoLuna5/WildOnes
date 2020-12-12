//Funcion para permitir solo caracteres predeterminados
function NumText(string){
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}
  
 // Funcion para limitar el numero de caracteres de un textarea o input
function limitar(e, contenido, caracteres)
        {
            // obtenemos la tecla pulsada
            var unicode=e.keyCode? e.keyCode : e.charCode;
            // Permitimos las siguientes teclas:
            // 8 backspace
            // 46 suprimir
            // 13 enter
            // 9 tabulador
            // 37 izquierda
            // 39 derecha
            // 38 subir
            // 40 bajar
            if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
                return true;

            // Si ha superado el limite de caracteres devolvemos false
            if(contenido.length>=caracteres)
                return false;
            return true;
        }
		
//comprobador de captcha
function Captcha(a) {
    var response = grecaptcha.getResponse();

    if(response.length == 0){
        alert("Check the Captcha!");
        return false;
      event.preventDefault();
    } else {
      alert("Checking Data... 100% of 100%!");
      return true;
    }
  }
  
  var alv = true; //deshabilitar o habilitar clic derecho & teclas / false=deshabilitado
  if (alv){  
//deshabilitar clic derecho
var mostrarMensaje = false;        
var mensaje = "This function is disabled.";         
function noClick() {
  if (mostrarMensaje) {
    alert(mensaje);
  }
}            
document.onmousedown = noClick;        
document.oncontextmenu = new Function("return false");
//deshabilitar teclas predeterminadas
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
  if (mostrarMensaje) {
    alert(mensaje);
  }
            return false;
        } else {
            return true;
        }
};
}


var _0x108d=["\x74\x65\x78\x74\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x2D\x32\x70\x78\x20\x31\x70\x78\x20\x68\x73\x6C\x28\x30\x2C\x30\x25\x2C\x30\x25\x29\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x77\x68\x69\x74\x65\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x35\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x32\x70\x78\x20\x35\x70\x78\x3B\x63\x6F\x6C\x6F\x72\x3A","\x25\x63\xA1\x44\x65\x74\x65\x6E\x74\x65\x21","\x23\x46\x46\x30\x30\x30\x30","\x6C\x6F\x67","\x25\x63\x45\x73\x74\x61\x20\x66\x75\x6E\x63\x69\xF3\x6E\x20\x64\x65\x6C\x20\x6E\x61\x76\x65\x67\x61\x64\x6F\x72\x20\x65\x73\x74\xE1\x20\x70\x65\x6E\x73\x61\x64\x61\x20\x70\x61\x72\x61\x20\x64\x65\x73\x61\x72\x72\x6F\x6C\x6C\x61\x64\x6F\x72\x65\x73\x2E\x20\x53\x69\x20\x61\x6C\x67\x75\x69\x65\x6E\x20\x74\x65\x20\x69\x6E\x64\x69\x63\xF3\x20\x71\x75\x65\x20\x63\x6F\x70\x69\x61\x72\x61\x73\x20\x79\x20\x70\x65\x67\x61\x72\x61\x73\x20\x61\x6C\x67\x6F\x20\x61\x71\x75\xED\x20\x70\x61\x72\x61\x20\x68\x61\x62\x69\x6C\x69\x74\x61\x72\x20\x75\x6E\x61\x20\x66\x75\x6E\x63\x69\xF3\x6E\x20\x64\x65\x20\x6C\x61\x20\x77\x65\x62\x20\x6F\x20\x70\x61\x72\x61\x20\x68\x61\x63\x6B\x65\x61\x72\x20\x6C\x61\x20\x63\x75\x65\x6E\x74\x61\x20\x64\x65\x20\x61\x6C\x67\x75\x69\x65\x6E\x2C\x20\x73\x65\x20\x74\x72\x61\x74\x61\x20\x64\x65\x20\x75\x6E\x20\x66\x72\x61\x75\x64\x65\x2E\x20\x53\x69\x20\x6C\x6F\x20\x68\x61\x63\x65\x73\x2C\x20\x65\x73\x74\x61\x20\x70\x65\x72\x73\x6F\x6E\x61\x20\x70\x6F\x64\x72\xE1\x20\x61\x63\x63\x65\x64\x65\x72\x20\x61\x20\x74\x75\x20\x63\x75\x65\x6E\x74\x61\x2E","\x74\x65\x78\x74\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x2D\x30\x70\x78\x20\x30\x20\x62\x6C\x61\x63\x6B\x2C\x20\x30\x20\x30\x70\x78\x20\x62\x6C\x61\x63\x6B\x2C\x20\x30\x70\x78\x20\x30\x20\x62\x6C\x61\x63\x6B\x2C\x20\x30\x20\x2D\x30\x70\x78\x20\x62\x6C\x61\x63\x6B\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x20\x77\x68\x69\x74\x65\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x62\x6C\x61\x63\x6B\x3B\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x36\x70\x78\x3B","\x25\x63\x2D\x57\x69\x6C\x64\x20\x4F\x6E\x65\x73\x20\x4C\x61\x74\x69\x6E"];var tpl=_0x108d[0];console[_0x108d[3]](_0x108d[1],tpl+ _0x108d[2]);console[_0x108d[3]](_0x108d[4],_0x108d[5]);console[_0x108d[3]](_0x108d[6],_0x108d[5])

