
document.getElementById('home').style.height = `${window.innerHeight}px`;
// document.getElementById('about').style.height = `${window.innerHeight}px`;


let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 100);
// });

var myNav = document.getElementById('nav-menu');
var myNav2 = document.getElementById('menu-icon');
console.log(myNav2);
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
    // myNav.classList.remove("nav-transparent");
  }
  else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};


menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");


darkmode.onclick = () => {
  console.log(darkmode);
  if (darkmode.classList.contains("bx-sun")) {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.remove("active");
  }
};

const resume = document.getElementById("resume-button-1");
resume.onclick = (e) => {
  // e.preventDefault()
  window.open("./Media/Priya-P-resume.pdf", "_blank")
  // console.log("Click");
}

const containerResume = document.getElementById("resume-button-2");
containerResume.onclick = (e) => {
  // e.preventDefault()
  window.open("./Media/Priya-P-resume.pdf", "_blank")
  // console.log("Click");
}


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const ContactPhoneNumber = document.getElementById("ContactPhoneNumber");


function handleSubmit(e) {
  e.preventDefault();
  console.log('submit clicked');

  document.getElementById('contactSubmit').innerHTML = `<i class="fa fa-refresh fa-spin"></i> Send`
  document.getElementById('contactSubmit').disabled = true;

  console.log([contactName.value, contactEmail.value, contactMessage.value]);

  const data = {
    service_id: 'service_cud71u7',
    template_id: 'template_ra4xl6w',
    user_id: 'EwOkQK6gbyJk_IKps',
    template_params: {
      'from_name': contactName.value,
      'to_name': 'Priya',
      'message': contactMessage.value,
      'from_email': contactEmail.value,
      'phone_number' : ContactPhoneNumber.value
    }
  };

  console.log(data);

  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {

    console.log('===>', res);
    return res.text()

  })
  .then(data => {

    console.log('=====>', data);

    if(data=='OK'){
      alert('Message Send Successfully.')
    }else{
      alert('Something Went Wrong! (Try After Some Time)')
    }

  })
  .catch(err => {

    console.log(err);

  })
  .finally(() => {
    document.getElementById('contactSubmit').innerHTML = `Send`
    document.getElementById('contactSubmit').disabled = false;
  })

}






  // typing text animation script
  // var typed = new Typed(".typing1", {
  //   strings: ['Full Stack Web Developer',"Node Js Backend Developer", "Day Dreamer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  const typed = new Typed('.typing1', {
    strings: ['','Full Stack Web Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    backdelay: 10000,
    loop: true
  })

  const colors = ['red', '#007bff', 'orange', 'magenta', 'cyan', '#0078ff']
  setInterval(()=>{
    document.querySelector('.typing1').style.color = colors[Math.floor(Math.random()*(colors.length))]
  },2000)



  // setInterval(()=>{
  //   document.querySelector('.logo').style.color = colors[Math.floor(Math.random()*(colors.length))]
  // },1000)

