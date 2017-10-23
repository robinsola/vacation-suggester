$(document).ready(function() {
  $("form#quiz").submit(function(event) {
      var comfort = parseInt($("select#comfort").val());
      var meal = parseInt($("select#meal").val());
      var activity = parseInt($("select#activity").val());
      var book = parseInt($("select#book").val());
      var philosophy = parseInt($("select#philosophy").val());

      var result = (comfort + meal + activity + book + philosophy);

      if (result <= 45) {
        $('#shire').fadeIn();
      } else if (result >= 46 && result <= 75) {
        $('#starship').fadeIn();
      } else if (result >= 76 && result <= 125) {
        $('#overlook').fadeIn();
      } else {
        $('#bathhouse').fadeIn();
      }

      $("#quiz").hide();
      $(".jumbotron").hide();
      event.preventDefault();
  });
});
