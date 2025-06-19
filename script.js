function firstWord(s) {
  // Trim leading whitespace
  s = s.trim();

  // Find index of first space
  const index = s.indexOf(' ');

  // If there's no space, return the entire string
  if (index === -1) return s;

  // Otherwise, return the substring up to the first space
  return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
