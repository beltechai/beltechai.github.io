let navToggle = false;

function generateLinks(page) {
  const innerHTML = `<div class="links">
    <div class="link ${page == "home" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}">
        <div class="title">Home</div>
      </a>
    </div>
    <div class="link ${page == "about" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}#about">
        <div class="title">About</div>
      </a>
    </div>
    <div id="product_modal" class="link ${page == "products" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}#product">
        <div class="title dropdown">Product</div>
      </a>
    </div>
    <div class="link ${page == "team" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}#team">
        <div class="title">Team</div>
      </a>
    </div>
    <div class="link ${page == "careers" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}#careers">
        <div class="title">Careers</div>
      </a>
    </div>
    <div class="link ${page == "contact" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}#contact">
        <div class="title">Contact</div>
      </a>
    </div>
    </div>`;
  return innerHTML;
}

function generateHeader(page) {
  const headerHTML =
    `<div class="content-lg">
    <div class="logo">
    <a href="${page == "home" ? "./" : "../"}"><img src="${page == "home" ? "./" : "../"
    }img/Logo.svg" alt="Beltech Logo" /></a>
    </div>
    ` +
    generateLinks(page) +
    `<div class="hamburger">
            <div class="line-1"></div>
            <div class="line-2"></div>
        </div>
        <div class="fill"></div>
    </div>
    `;
  return headerHTML;
}

function generateFooter(page) {
  const footerHTML = `<div class="content-lg">
  <div class="footer-wrapper">
  <div class="logo">
    <img src="${page == "home" ? "./" : "../"
    }img/LogoSymbolMono.svg" alt="Beltech Logo" />
  </div>
  <div class="quick-links">  
    <div class="col">
      <div class="title">Navigation</div>
      <a href="${page == "home" ? "./" : "../"}">Home</a>
      <a href="${page == "home" ? "./" : "../"}#product">Products</a>
      <a href="${page == "home" ? "./" : "../"}#team">Team</a>
      <a href="${page == "home" ? "./" : "../"}#careers">Careers</a>
    </div>
    <div class="col">
      <div class="title">Quick Links</div>
      <a href="${page == "home" ? "./" : "../"}#about">About</a>
      <a href="${page == "home" ? "./" : "../"}#contact">Connect</a>
    </div>
    <div class="col">
      <div class="title">Connect</div>
      <a href="https://www.linkedin.com/company/beltechai/" target="_blank">LinkedIn</a>
      <a href="https://angel.co/company/beltech-3" target="_blank">Angellist</a>
 
    </div>
  </div>
  <div class="socials">
  <a href="https://www.linkedin.com/company/beltechai/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://angel.co/company/beltech-3" target="_blank"><i class="fab fa-angellist"></i></a>

  </div>
  </div>
  <p class="sm">
    &copy; Copyright Beltech Green Pvt. Ltd. 2021
  </p>
</div>`;
  return footerHTML;
}

function headerScroll(page) {
  let i = $(window).scrollTop();
  if(page == "home"){
  if (i > 0) {
    $("header").addClass("min");
  } else {
    $("header").removeClass("min");
  }
}
}

function openNav(page) {
  $(".line-1").css("background", "#000000");
  $(".line-2").css("background", "#000000");
  $("nav").css("display", "block");
  $("nav").css("height", "100%");
  $("nav").css("width", "100%");
  setTimeout(function () {
    $("nav").css("opacity", "1");
  }, 100);
  $(".hamburger").addClass("close");
  navToggle = true;
}

function closeNav(page) {
  $(".line-1").css("background", "#ffffff");
  $(".line-2").css("background", "#ffffff");
  $("nav").css("opacity", "0");
  $("nav").css("height", "0");
  $("nav").css("width", "0");
  setTimeout(function () {
    $("nav").css("display", "none");
  }, 500);
  $(".hamburger").removeClass("close");
  headerScroll(page);
  navToggle = false;
}

function generateDropDown(page){
  const dropDownList = `
  <a class="dropDown-element" id="tm">Traffic Mangement <i class="fas fa-caret-down"></i><i class="fas fa-caret-up"></i></a>
  <ul id="tm-1">
  <li><a href="${page == "home" ? "./traffic-mangement" : "../traffic-mangement"}#traffic-management">Smart Traffic Management</a></li>
  <li><a href="${page == "home" ? "./traffic-mangement" : "../traffic-mangement"}#traffic-violation">Traffic Violation Detection</a></li>
  </ul>
  <a class="dropDown-element" id="sec">Security <i class="fas fa-caret-down"></i><i class="fas fa-caret-up"></i></a>
  <ul id="sec-1">
  <li><a href="${page == "home" ? "./security" : "../security"}#crime-detection">Crime Detection</a></li>
  <li><a href="${page == "home" ? "./security" : "../security"}#tracking-suspected-criminals">Tracking of Suspected Criminals</a></li> 
  <li><a href="${page == "home" ? "./security" : "../security"}#women-safety">Women Safety </a></li>
  </ul>
  <a class="dropDown-element" id="sc">Smart City <i class="fas fa-caret-down"></i><i class="fas fa-caret-up"></i></a>
  <ul id="sc-1">
  <li><a href="${page == "home" ? "./smart-city" : "../smart-city"}#garbage-tracking">Garbage tracking</a></li>
  <li><a href="${page == "home" ? "./smart-city" : "../smart-city"}#public-infrastructure">Public infrastructure tracking</a></li> 
  <li><a href="${page == "home" ? "./smart-city" : "../smart-city"}#street-light">Smart Street Lights</a></li>
  <li><a href="${page == "home" ? "./smart-city" : "../smart-city"}#wifi">WiFi for the city</a></li>
  </ul>
  <a class="dropDown-element" id="pt">Public Transport <i class="fas fa-caret-down"></i><i class="fas fa-caret-up"></i></a>
  <ul id="pt-1">
  <li><a href="${page == "home" ? "./public-transport" : "../public-transport"}#smart-buses">Smart Buses</a></li>
  <li><a href="${page == "home" ? "./public-transport" : "../public-transport"}#smart-ticketing">Smart Ticketing</a></li> 
  <li><a href="${page == "home" ? "./public-transport" : "../public-transport"}#public-transportation">Public Transport Locator</a></li>
  </ul>
  <a class="dropDown-element"></a>
  `

  return dropDownList;
}


$(document).ready(function () {
  const page = $("header").attr("aria-label");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
  $("footer").html(generateFooter(page));
  $(".dropdown-content").html(generateDropDown(page))

  $(window).scroll(function () {
    if (!navToggle) {
      headerScroll(page);
    }
  });

  $("header").on("click", ".hamburger", function () {
    if (navToggle) {
      closeNav(page);
    } else {
      openNav(page);
    }
  });

  $(".fa-caret-up").css("display", "none");

  $( "#product_modal" ).hover(function() {
    $(".dropdown-content").css("display", "block");
  },function() {
    $(".dropdown-content").css("display", "none");
  });

  $( "#tm" ).click(function() {
    let x = document.getElementById("tm-1");
    if (x.style.display === "none") {
       x.style.display = "block";
       $("#tm .fa-caret-up").css("display", "inline");
       $("#tm .fa-caret-down").css("display", "none");
     } else {
       x.style.display = "none";
       $("#tm .fa-caret-down").css("display", "inline");
       $("#tm .fa-caret-up").css("display", "none");
    }
    $("#sec-1").css("display", "none");
    $("#sc-1").css("display", "none");
    $("#pt-1").css("display", "none");
  });

  $( "#sec" ).click(function() {
    let x = document.getElementById("sec-1");
    if (x.style.display === "none") {
       x.style.display = "block";
       $("#sec .fa-caret-up").css("display", "inline");
       $("#sec .fa-caret-down").css("display", "none");
     } else {
       x.style.display = "none";
       $("#sec .fa-caret-down").css("display", "inline");
       $("#sec .fa-caret-up").css("display", "none");
    }
    $("#tm-1").css("display", "none");
    $("#sc-1").css("display", "none");
    $("#pt-1").css("display", "none");
  });

  $( "#sc" ).click(function() {
    let x = document.getElementById("sc-1");
    if (x.style.display === "none") {
       x.style.display = "block";
       $("#sc .fa-caret-up").css("display", "inline");
       $("#sc .fa-caret-down").css("display", "none");
     } else {
       x.style.display = "none";
       $("#sc .fa-caret-down").css("display", "inline");
       $("#sc .fa-caret-up").css("display", "none");
    }
    $("#tm-1").css("display", "none");
    $("#sec-1").css("display", "none");
    $("#pt-1").css("display", "none");
  });

  $( "#pt" ).click(function() {
    let x = document.getElementById("pt-1");
    if (x.style.display === "none") {
       x.style.display = "block";
       $("#pt .fa-caret-up").css("display", "inline");
       $("#pt .fa-caret-down").css("display", "none");
     } else {
       x.style.display = "none";
       $("#pt .fa-caret-down").css("display", "inline");
       $("#pt .fa-caret-up").css("display", "none");
    }
    $("#tm-1").css("display", "none");
    $("#sec-1").css("display", "none");
    $("#sc-1").css("display", "none");
  });

  $( ".dropdown-content" ).hover(function() {
     $(".dropdown-content").css("display", "block");
    },function() {
       $(".dropdown-content").css("display", "none");
       $("#tm-1").css("display", "none");
       $("#sec-1").css("display", "none");
       $("#sc-1").css("display", "none");
       $("#pt-1").css("display", "none");
    });
});
