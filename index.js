let submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit);

function onSubmit() {
  let ui = document.getElementById("ui").value;
  let check = /^(\d{4}|\d{6})$/.test(ui);

  console.log(check);
  if (check) {
    location.href = "https://www.ecellrgpv.com/";
  } else {
    alert("Please enter a valid pincode");
  }
}
