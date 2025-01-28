function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is different from the x declared outside
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}