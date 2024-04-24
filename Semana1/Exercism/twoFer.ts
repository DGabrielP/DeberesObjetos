export function twoFer(name: string = 'you'): string {
 
  return `One for ${name}, one for me.`;

}
console.log(twoFer()); // Output: "One for you, one for me."
console.log(twoFer('Do-yun')); // Output: "One for Alice, one for me."
console.log(twoFer('Bohdan')); // Output: "One for Bohdan, one for me."
console.log(twoFer('Do-yun')); // Output: "One for Do-yun, one for me."
console.log(twoFer('Zaphod')); // Output: "One for Zaphod, one for me."

  
  
  