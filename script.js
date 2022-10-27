function validarForm() {
    let x = document.forms["myform"]["email"].value;
    if (x == "") {
      alert("Necesitamos un email de contacto");
      return false;
    }
  }