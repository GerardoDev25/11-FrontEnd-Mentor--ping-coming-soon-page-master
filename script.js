const form = document.getElementById("form");
const input = document.getElementById("input");
const pError = document.querySelector(".error");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
         input.value
      )
   ) {
      pError.classList.add("error");
      input.style.border = "1px solid var(--Pale-Blue)";
   } else {
      pError.classList.remove("error");
      input.style.border = "1px solid red";
   }
});
