
// Get the modal
var modal = document.getElementById("pcmyModal");

// Get the button that opens the modal
var btn = document.getElementById("pcmyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pcclose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var mobilmodal = document.getElementById("myModal");

// Get the button that opens the modal
var mobilbtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var mobilspan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
mobilbtn.onclick = function() {
  mobilmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
mobilspan.onclick = function() {
  mobilmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mobilmodal) {
    mobilmodal.style.display = "none";
  }
}


//Side Bar
let menu = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let sidebarclose = document.querySelector("#sidebarclose")

menu.addEventListener('click' , () => {
  sidebar.style.visibility = "visible"
  sidebar.style.opacity = "1"
  sidebar.style.width = "100%"
})

sidebarclose.addEventListener('click',()=>{
  sidebar.style.visibility = "hidden"
  sidebar.style.opacity = "0"
  sidebar.style.width = "0%"
})


//ALL CATAGORIES BUTTON
$(document).ready(function(){

  $(".atext").click(function(){
    $(".categoriesbar").slideToggle();
  });

  $(".sbatext").click(function(){
    $(".sbcategoriesbar").slideToggle();
  });

  $(".Fruitsmbdropbtn").click(function(){
    $(".Fruitsdropdownli").slideToggle();
  })

  $(".Beveragesmbdropbtn").click(function(){
    $(".Beveragesdropdownli").slideToggle();
  })

  $(".lchome").click(function(){
    $(".sbfhome").slideToggle();
  })

  $(".lcshop").click(function(){
    $(".sbfShop").slideToggle();
  })

  $(".lchange").click(function(){
    $(".languagechange").slideToggle();
  })

  $(".lmoneychange").click(function(){
    $(".moneychange").slideToggle();
  })

});










