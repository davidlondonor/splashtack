// scroll indicator

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// scroll indicator


$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
  });
});

function openSideDrawer() {
  document.getElementById("side-drawer").style.left = "0";
  document.getElementById("side-drawer-void").classList.add("d-block");
  document.getElementById("side-drawer-void").classList.remove("d-none");
}

function closeSideDrawer() {
  document.getElementById("side-drawer").style.left = "-336px";
  document.getElementById("side-drawer-void").classList.add("d-none");
  document.getElementById("side-drawer-void").classList.remove("d-block");
}
