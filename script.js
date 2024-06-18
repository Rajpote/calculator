let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
   button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
         try {
            string = eval(string);
         } catch (error) {
            string = "Error";
         }
         document.querySelector("input[type='text']").value = string;
         string = ""; // Reset the string after showing the result
      } else if (e.target.innerHTML == "C") {
         string = "";
         document.querySelector("input[type='text']").value = string;
      } else {
         string += e.target.innerHTML;
         document.querySelector("input[type='text']").value = string;
      }
   });
});
