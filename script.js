let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; 
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerHTML;
    if (buttonText === '=') {

      string = eval(string);
      input.value = string;
    } else if (buttonText === 'AC') {
    
      string = "";
      input.value = string;
    } else if (buttonText === 'DEL') {
    
      string = string.slice(0, -1);
      input.value = string;
    } else {
      
      string += buttonText;
      input.value = string;
    }
  });
});