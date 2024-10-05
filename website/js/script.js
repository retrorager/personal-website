// Cursor function
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Fixed header scroll
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 80) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// Typed function
$(document).ready(function () {
  var typed = new Typed("#type-it", {
    strings: ["Designer", "Developer", "Programmer", "Technician"],
    typeSpeed: 100,
    loop: true,
  });
});

VanillaTilt.init(
  document.querySelectorAll(".sci .linkedin a, .sci .github a"),
  {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  }
);

(function () {
  // Public Key
  emailjs.init({
    publicKey: "DxDbeTn58AuPzFcrf",
  });
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var templateParams = {
      from_name: name,
      email_id: email,
      subject: subject,
      message: message,
      to_name: "Evan",
    };
    console.log(templateParams);

    // Service ID, Template ID
    emailjs.send("service_90fkpew", "template_e3s923g", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("Failed...", error);
        alert("Message failed to send.");
      }
    );
  });

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".section-heading h3", { delay: 500, origin: "top" });
ScrollReveal().reveal(".experience-section1 .image", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".experience-section1 .text-box", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".experience-section2 .image2", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".experience-section2 .text-box2", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".experience-section3 .image3", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".experience-section3 .text-box3", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".contact-img", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".home-image", { delay: 500, origin: "right" });
ScrollReveal().reveal(".about-img", { delay: 500, origin: "right" });
ScrollReveal().reveal(".about-text h3", { delay: 500, origin: "left" });
ScrollReveal().reveal(".about-text p", { delay: 1800, origin: "top" });
ScrollReveal().reveal(".highlight1", { delay: 2300, origin: "bottom" });
ScrollReveal().reveal(".highlight2", { delay: 2800, origin: "bottom" });
ScrollReveal().reveal(".card_article1", { delay: 500, origin: "top" });
ScrollReveal().reveal(".card_article2", { delay: 1000, origin: "top" });
ScrollReveal().reveal(".card_article3", { delay: 1500, origin: "top" });
ScrollReveal().reveal(".phone-icon", { delay: 600, origin: "left" });
ScrollReveal().reveal(".phone", { delay: 700, origin: "left" });
ScrollReveal().reveal(".email-icon", { delay: 800, origin: "left" });
ScrollReveal().reveal(".email", { delay: 900, origin: "left" });
ScrollReveal().reveal(".location-icon", { delay: 1000, origin: "left" });
ScrollReveal().reveal(".location", { delay: 1100, origin: "left" });
ScrollReveal().reveal(".linkedin", { delay: 1100, origin: "bottom" });
ScrollReveal().reveal(".github", { delay: 1100, origin: "bottom" });

// Site Counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://7n4jxc552476knaju3lf2nzori0dplha.lambda-url.us-east-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = data;
}

updateCounter();
