const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function sendForm() {
  document.getElementById("nameError").innerText = null;
  document.getElementById("emailError").innerText = null;
  document.getElementById("messError").innerText = null;
  let r1 = true;
  let r2 = true;
  let r3 = true;
  let name = document.getElementById("firstName").value;
  console.log("name" + name);
  if (name == null || name == "") {
    document.getElementById("nameError").innerText =
      "\u26A0" + "Name must be filled out!";
    r1 = false;
  }
  let email = document.getElementById("email").value;
  if (email == null || email == "") {
    document.getElementById("emailError").innerText =
      "\u26A0" + "Email must be filled out!";
    r2 = false;
  } else if (!email.match(mail)) {
    document.getElementById("emailError").innerText =
      "\u26A0" + "Email is not valid!";
    r2 = false;
  }
  let mess = document.getElementById("text").value;
  if (mess == null || mess == "") {
    document.getElementById("messError").innerText =
      "\u26A0" + "Message must be filled out!";
    r3 = false;
  } else if (mess.length < 5) {
    document.getElementById("messError").innerText =
      "\u26A0" + "You have to input at least five characters!";
    r3 = false;
  }
  if (r1 && r2 && r3) {
    document.getElementById("form1").reset();
    alert(
      "Your message has been sent, and I will reach out to you as soon as possible!"
    );
  }
}
