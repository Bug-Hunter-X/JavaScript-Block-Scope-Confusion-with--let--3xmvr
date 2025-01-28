function myFunction() {
  let outerX = 10;
  if (true) {
    let innerX = 20; 
    console.log(innerX); // Output: 20
  }
  console.log(outerX); // Output: 10
}
//Alternative Solution
function myFunction(){
    let x = 10;
    if(true){
        x = 20;
        console.log(x);//Output 20
    }
    console.log(x);//Output 20
}