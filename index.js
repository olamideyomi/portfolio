/*------------------- toggle icon navbar -------------*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*------------------- scroll sections avtive link -------------*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*------------------- sticky navbar -------------*/

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*=============== remove toggle icon and navbar when click navbar link (scroll) ================*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*------------------- scroll reveal-------------*/

ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .service-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img, ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*------------------- typed js-------------*/

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Software Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*------------------- email validation with emailjs-------------*/
function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById("contact-form");
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;
  const mobile = form.mobile.value;
  const templateParams = {
    from_name: name,
    email: email,
    subject: subject,
    message: message,
    mobile: mobile,
  };
  emailjs.init("3U-UBSd1LTN-iaHMU"); // Replace with your EmailJS user ID
  emailjs.send("service_3pvly9r", "template_a66adst", templateParams).then(
    function (response) {
      console.log("SUCCESS", response);
      showAlert("Your message has been sent successfully!");
      form.reset();
    },
    function (error) {
      console.log("FAILED", error);
      showAlert("Oops! Something went wrong. Please try again later.");
    }
  );
}

function showAlert(message) {
  const alertElement = document.getElementById("alertMessage");
  alertElement.innerHTML = message;
  alertElement.classList.add("show");

  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertElement.classList.remove("show");
  }, 3000);
}

