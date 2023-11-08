// Exercise: Array Sum and Average

// const numbers = [10, 15, 20, 25, 30];
// let sum = 0;
// for (let i=0; i < numbers.length; i ++) {
//     sum += numbers [i];
// }
// const average = sum / numbers.length;
// console.log ("Sum: " + sum);
// console.log ("Average: " + average);

function createButtons() {

    const container = document.createElement('div');
    
    document.body.appendChild(container);
    for (let i = 1; i <= 9; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      
      (function(buttonNumber) {
        button.addEventListener('click', function() {
          alert("Button " + buttonNumber + " was clicked.");
        });
      })(i);
      
      container.appendChild(button);
    }
  }
  
  createButtons();
  