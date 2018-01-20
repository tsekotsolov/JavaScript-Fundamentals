function emailValidator(input) {
  const regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;

  let test = regex.test(input);
  if (test) {
  return 'Valid';
  }
  return 'Invalid';
}
