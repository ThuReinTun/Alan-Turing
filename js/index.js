$(document).ready(function () {
  // updating list
   $(".cbt-btn").click(function () {
     // $(this).css("color", "red");
    $(".cbt-btn").removeClass("cbt-selected");
    $(this).addClass("cbt-selected");
  // // updating data id
    var id = $(this).data("id");
    var cName = "#cbt-list-item-" + id;
  // // updating list item
    $(".contribution-list-item").removeClass("cbt-selected-item");
    $(cName).addClass("cbt-selected-item");
     // $(cName).focus();
     // document.getElementById(cName).scrollIntoView();
     // window.scrollTo(getPosition(cName));
  //    window.location = cName;
   });
});