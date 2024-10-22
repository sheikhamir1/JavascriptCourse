const btnEnable = document.getElementById("btn1");
const btnEnable2 = document.getElementById("btn2");
//   console.log(btnEnable);

function addH2() {
  const h2Element = document.createElement("h2");
  const h2Text = document.createTextNode(
    "we are successfully created HTML element with javascript"
  );
  h2Element.appendChild(h2Text);
  const targetElement = document.querySelector("#div1");
  targetElement.appendChild(h2Element);

  //   style the h2 element
  h2Element.style.backgroundColor = "crimson";
  h2Element.style.color = "white";
  h2Element.style.padding = "10px";
  h2Element.style.textAlign = "center";
  h2Element.style.fontFamily = "cursive";
  h2Element.style.borderRadius = "8px";
  h2Element.style.display = "none";

  // console.log("parent div", targetElement);
  console.log("added child h2 ", h2Element);
  btnEnable.disabled = false;
  btnEnable2.disabled = true;
}
function showH2() {
  const target = document.getElementsByTagName("h2")[0];
  target.style.display = "block";
  btnEnable.disabled = true;
  setTimeout(() => {
    btnEnable.style.display = "none";
    btnEnable2.style.display = "none";
  }, 3000);
}
