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




// theme toggle


// document.addEventListener('DOMContentLoaded', function () {
//   const themeToggle = document.getElementById('theme-toggle');
//   const themeOptions = document.getElementById('theme-options');
//   const themeButtons = themeOptions.querySelectorAll('button[data-theme]');
  
//   const applyTheme = (theme) => {
//     if (theme === 'system') {
//       document.documentElement.classList.remove('dark');
//       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         document.documentElement.classList.add('dark');
//       }
//     } else if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   };

//   const savedTheme = localStorage.getItem('theme') || 'system';
//   applyTheme(savedTheme);

//   themeToggle.addEventListener('click', () => {
//     themeOptions.classList.toggle('hidden');
//   });

//   themeButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//       const selectedTheme = event.target.getAttribute('data-theme');
//       applyTheme(selectedTheme);
//       themeOptions.classList.add('hidden');
//     });
//   });

//   // Listen to system theme changes
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
//     if (localStorage.getItem('theme') === 'system') {
//       applyTheme('system');
//     }
//   });
// });
