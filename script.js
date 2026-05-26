(function () {
  const dots = document.querySelectorAll(".hero-dots .dot");
  const prevBtn = document.getElementById("hero-prev");
  const nextBtn = document.getElementById("hero-next");
  let active = 0;

  function setSlide(index) {
    active = (index + dots.length) % dots.length;
    dots.forEach((dot, i) => {
      dot.classList.toggle("dot--active", i === active);
    });
  }

  prevBtn?.addEventListener("click", () => setSlide(active - 1));
  nextBtn?.addEventListener("click", () => setSlide(active + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => setSlide(i));
    dot.style.cursor = "pointer";
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("nav-link--active"));
        link.classList.add("nav-link--active");
      }
    });
  });
})();
