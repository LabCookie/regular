function reglang_split(txt) {
  const regway = /"[^"]*"|%[^%]|<[^<]|#[^#]*#|./g;
  return txt.match(regway);
}
console.log(reglang_split('>"Hello, World!";'))  
