document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  const links = document.querySelectorAll("a");
  for (const link of links) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        event.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  // Form validation
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const contact = document.querySelector('input[name="contact"]').value;
    const city = document.querySelector('input[name="city"]').value;

    if (!name || !email || !contact || !city) {
      event.preventDefault();
      alert("Please fill in all fields");
    }
  });
});

//after clicking the button it will right slide and make the text explore more
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const card = this.closest(".guidance-card");
      card.classList.add("active");
      setTimeout(() => {
        this.textContent = "Explore More";
        this.style.transform = "translateX(100%)";
        card.querySelector(".explore-text").style.display = "none"; // Hide the span
      }, 300);
    });
  });
});

//scroll youtube video
function scrollLeft() {
  document.getElementById("video-list").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollRight() {
  document.getElementById("video-list").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

//to scroll review part
let scrollAmount = 0;

function scrollLeft() {
  const reviews = document.querySelector(".reviews");
  const reviewCardWidth = document.querySelector(".review-card").offsetWidth;
  scrollAmount -= reviewCardWidth + 20; // 20 is the margin
  if (scrollAmount < 0) {
    scrollAmount = reviews.scrollWidth - reviews.clientWidth;
  }
  reviews.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

function scrollRight() {
  const reviews = document.querySelector(".reviews");
  const reviewCardWidth = document.querySelector(".review-card").offsetWidth;
  scrollAmount += reviewCardWidth + 20; // 20 is the margin
  if (scrollAmount >= reviews.scrollWidth) {
    scrollAmount = 0;
  }
  reviews.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

// Automatically scroll right every 3 seconds
setInterval(scrollRight, 3000);

//query for FAQ section
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const arrow = item.querySelector(".arrow");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.classList.remove("up");
    } else {
      // Close other open answers
      document
        .querySelectorAll(".faq-answer")
        .forEach((ans) => (ans.style.display = "none"));
      document
        .querySelectorAll(".arrow")
        .forEach((arrow) => arrow.classList.remove("up"));

      // Open the clicked question's answer
      answer.style.display = "block";
      arrow.classList.add("up");
    }
  });
});
