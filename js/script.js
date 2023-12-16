$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    pagination: true,
    paginationSpeed: 1000,
    navigation: true,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
  $("#navigation").sticky({
    topSpacing: 75,
  });
});
// Contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asa.zeyd@gmail.com",
    Password: "23FCFA4CF198B825D889A86E2A496B11543B",
    To: "asa.zeyd@gmail.com",
    From: "asa.zeyd@gmail.com",
    Subject: "This is the subject",
    Body: "",
  }).then((message) => alert(message));
};
