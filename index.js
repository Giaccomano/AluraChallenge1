const textArea = document.querySelector(".text-area");

const resultado = document.querySelector(".resultado");

function encriptar() {
  var texto = document.getElementById("texto").value;
  var reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  var resultado = "";
  textArea.value = "";
  /*resultado.style.backgroundImage = "none";*/

  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i).toLowerCase();
    if (letra in reemplazos) {
      resultado += reemplazos[letra];
    } else {
      resultado += letra;
    }
  }

  document.getElementById("resultado").value = resultado;
}

function desencriptar() {
  var texto = document.getElementById("texto").value;
  var reemplazos = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  textArea.value = "";
  var resultado = "";
  var i = 0;
  while (i < texto.length) {
    var found = false;
    for (var key in reemplazos) {
      if (texto.startsWith(key, i)) {
        resultado += reemplazos[key];
        i += key.length;
        found = true;
        break;
      }
    }
    if (!found) {
      resultado += texto.charAt(i);
      i++;
    }
  }

  document.getElementById("resultado").value = resultado;
}

function copiarTexto() {
  var texto = document.getElementById("resultado");
  texto.select();
  document.execCommand("copy");
  alert("Texto copiado");
}

var textarea = document.getElementById("texto");

textarea.onmouseup = function () {
  var selectedText = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  if (selectedText.length > 0) {
    document.getElementById("copiarSeleccion").style.display = "inline-block";
  } else {
    document.getElementById("copiarSeleccion").style.display = "none";
  }
};

function copiarSeleccion() {
  var seleccion = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );
  var copiar = document.createElement("textarea");
  document.body.appendChild(copiar);
  copiar.value = seleccion;
  copiar.select();
  document.execCommand("copy");
  document.body.removeChild(copiar);
  alert("Texto copiado");
}
