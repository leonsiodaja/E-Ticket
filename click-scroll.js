//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 83;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 83;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});


// new

// get all tab links
const tabLinks = document.querySelectorAll('.tab-links a');
 
// loop through all tab links
for (const link of tabLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const tabId = this.getAttribute('href');
 
    // remove the active class from all tabs
    document.querySelectorAll('.tab').forEach(function(tab) {
      tab.classList.remove('active');
    });
 
    // add the active class to the clicked tab
    document.querySelector(tabId).classList.add('active');
 
    // remove the active class from all tab links
    document.querySelectorAll('.tab-links li').forEach(function(li) {
      li.classList.remove('active');
    });
 
    // add the active class to the clicked tab link
    this.parentElement.classList.add('active');
  });
}
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_5hfy97f";
  const templateID="template_mb1d298"

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
// new 


function sendmail() {
  var params = {
    name: document.getElementById("ticket-form-name").value,
    email: document.getElementById("ticket-form-email").value,
    message: document.getElementById("flexRadioDefault1").value,
    message: document.getElementById("flexRadioDefault2").value,
    message: document.getElementById("ticket-form-number").value,
    message: document.getElementById("ticket-form-message").value,
  };

  const serviceID = "service_5hfy97f";
  const templateID="template_mb1d298"

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}


