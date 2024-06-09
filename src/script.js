// hamburger menu js
function Menu(e){
    let list = document.getElementById('nav-menu');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal( // upwaard
    ".up", 
    {
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    }
  );

  ScrollReveal().reveal( // towards right
    ".about, .rht",
    {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    }
  );

  ScrollReveal().reveal( // towards left
    ".lft",
    {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 300,
      easing: "ease-in-out",
      reset: true,
    }
  );
});


Email.send({
  Host : "smtp.gmail.com",
  Username : "sanchit.pahurkar@gmail.com",
  Password : "Jan*2304",
  To : 'sanchit.pahurkar@gmail.com',
  From : document.getElementById('email').value,
  Subject : "New Contact Form Enquiry",
  Body : "Name : " + document.getElementById('fname').value + " " + document.getElementById('lname') 
        + "<br>Email :" + document.getElementById('email').value 
        + "<br>Message : " + document.getElementById('msg').value
}).then(message => alert("Message sent successfully")
);