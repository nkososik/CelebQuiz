$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (age) {
      let celeb = "Needs Input"; // placeholder variable
      if (gender === "female" && age <= 25) {
        celeb = "Elizabeth Olson";
      } else if (gender === "non-binary" || age <= 21 ) {
        celeb = "Aja";
      } else if (gender === "male" && age >= 60) {
        celeb = "John Wayne";
      } else {
        celeb = "Mark Ruffalo"
      }


      $("#rate").text(celeb);
      $("#celebpick").show();
    } else {
      alert("Please enter your age. Be honest!");
    }

    event.preventDefault();
  });
});