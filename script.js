// function customAlert(){
//     alert("<b>KARIMI MEDIA wants to send you notification</b>")
// }


// customAlert();


// document.querySelector(".dark_btn").onclick = function(){
//     document.body.setAttribute("class", "darkMood");
//     document.querySelector(".fa-moon").style.color = "yellow";
//     // document.getElementById("dark_btn").removeAttribute("class", "fa-solid fa-moon");
//     document.getElementById("dark_btn").setAttribute("class", "fa-solid fa-sun");

// };


// document.querySelector(".light_btn").addEventListener("dblclick", () => {
//     document.body.setAttribute("class", "lightMood");
//     document.querySelector(".fa-moon").style.color = "";
// });




// $(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });


window.addEventListener('load', function(){
    document.querySelector('iframe').style.display = 'none';
  });


window.addEventListener('load', function(){
    // Check if the user agent indicates a mobile device
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Redirect users to a different page or display a message
        // For example:
        alert("This website is not supported on mobile devices. Please visit from a computer or iPad.");
        // You can also redirect users to a different page
        // window.location.href = "alternative_page.html";
    } else {
        // If not a mobile device, continue to load the website content
        document.querySelector('iframe').style.display = 'block'; // Assuming the iframe should be displayed
    }
});

