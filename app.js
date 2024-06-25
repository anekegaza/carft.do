// <a href="https://storyset.com/online">Online illustrations by Storyset</a>
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  let back = document.querySelector(".btn-back");
  let bracket = document.querySelector(".btn-bracket");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      screen.value = eval(screen.value);
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  back.addEventListener("click", () => {
    let input = screen.value;
    if (screen.value === "") {
      screen.value = "";
    } else {
      screen.value = input.slice(0, -1);
    }
  });

  bracket.addEventListener("click", () => {
    let input = screen.value;
    if (screen.value === "") {
      screen.value = "";
    } else {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        screen.value += "(";
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")"))
      ) {
        screen.value += ")";
      }
    }
  });
  //
})();
