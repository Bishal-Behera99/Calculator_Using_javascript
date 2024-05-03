let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  //button is used to iterate in the array

  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector(".input").value = string;
    }
      else if(e.target.innerHTML=='M+'){

        string = string + e.target.innerHTML;
        document.querySelector(".input").value = string;

      }

    else {
      console.log(e.target);

      // we  fetch the element from e.target and  returns the html property through innerHTML and put it inside the string variable;
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
