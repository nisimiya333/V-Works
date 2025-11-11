document.addEventListener("DOMContentLoaded", () => {
  // .zisseki の中のすべての要素を取得
  const targets = document.querySelectorAll(".zisseki *");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 1回だけ発火
      }
    });
  }, {
    threshold: 0.2 // 20%見えたら反応
  });

  targets.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  // .zisseki の中のすべての要素を取得
  const targets = document.querySelectorAll(".irai *");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 1回だけ発火
      }
    });
  }, {
    threshold: 0.2 // 20%見えたら反応
  });

  targets.forEach(el => observer.observe(el));
});