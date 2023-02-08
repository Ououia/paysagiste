sendd.addEventListener("click", function () {
  console.log("eventlistener");
  const nom = document.getElementById("nom").value;
  const emailfrom = document.getElementById("emailfrom").value;
  const objet = document.getElementById("objet").value;
  const mssg = document.getElementById("mssg").value;
  const emailto = "i.maperi@cci-formation.nc";
  console.log(
    "le nom est " +
      nom +
      " envoyé depuis " +
      emailfrom +
      " l'objet est " +
      objet +
      " le message est " +
      mssg
  );
  const all =
    "mailto:" +
    emailto +
    "?cc=" +
    emailfrom +
    "&" +
    "subject=" +
    objet +
    "&body=" +
    mssg;
  console.log(all);
  document.getElementById("sendd").setAttribute("href", all);
});
