function Myfun(age1 = 0, age2 = "Empty", age3 = "Empty") {
  const validAge = 18;
  if (age1 >= validAge) {
    console.log("your age is valid", age1);
  } else {
    console.log("your age is not valid", age1);
  }
  if (age2 >= validAge) {
    console.log("your age is valid", age2);
  } else {
    console.log("your age is not valid", age2);
  }
  if (age3 >= validAge) {
    console.log("your age is valid", age3);
  } else {
    console.log("your age is not valid", age3);
  }
}
Myfun(30);
