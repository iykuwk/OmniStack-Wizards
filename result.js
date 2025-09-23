document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".fill");
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });


});

/

