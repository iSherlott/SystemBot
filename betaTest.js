function verify1() {
  console.log(`Verify01`);
  return 1;
}
function verify2() {
  console.log(`Verify02`);
  return 2;
}
function verify3() {
  console.log(`Verify03`);
  return 3;
}

if (verify1() == 1 && verify2() == 4 && verify3() == 3) console.log(`Okey`);
