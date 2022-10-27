function validarForm() {
    let x = document.forms["myform"]["email"].value;
    if (x == "") {
      alert("Necesitamos al menos un email de contacto");
      return false;
    }
  }