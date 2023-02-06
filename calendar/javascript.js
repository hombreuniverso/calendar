//Calendar Javascript
      //Reference the "select", "h1" and 'ul' tags and store in variables
      const selector = document.querySelector("select");
      const h1Tag = document.querySelector("h1");
      const list = document.querySelector("ul");

      //Create an event listener for the selector variable
      //On 'change' create and call arrow function to draw calendar
      selector.addEventListener("change", () => {
        //Store selected month in choice variable
        const choice = selector.value;

        //Declare/ Assign variable
        let days = 31;

        //Set days according to chosen month
        if (
          choice === "January" ||
          choice === "March" ||
          choice === "May" ||
          choice === "July" ||
          choice === "August" ||
          choice === "October" ||
          choice === "December"
        ) {
          days = 31;
        } else if (
          choice === "April" ||
          choice === "June" ||
          choice === "September" ||
          choice === "November"
        ) {
          days = 30;
        } else {
          days = 28;
        }

        //Call function inside arrow function
        drawCalendar(choice, days);
      });

      //Create function outside arrow function
      function drawCalendar(choice, days) {
        //Set h1 tag to chosen month
        h1Tag.textContent = choice;

        //Draw 'li' (which are days) dynamically
        list.innerHTML = "";
        for (let i = 1; i <= days; i++) {
          const listItem = document.createElement("li");
          listItem.textContent = i;
          list.appendChild(listItem);
        }
      }

      //Call function with attributes for a default month and days
      drawCalendar("January", 31); 
   
