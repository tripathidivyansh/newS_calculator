(function () {
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.btn');
  const clear = document.querySelector('.btn-clear');
  const equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      const value = e.target.dataset.num;
      if (value !== undefined) {
        screen.value += value;
      }
    });
  });

  equal.addEventListener('click', function () {
    if (screen.value === '') {
      screen.value = "Enter value";
    } else {
      try {
        screen.value = eval(screen.value);
      } catch (err) {
        screen.value = "Error";
      }
    }
  });

  clear.addEventListener('click', function () {
    screen.value = "";
  });
})();
