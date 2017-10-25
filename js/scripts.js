$(document).ready(function() {
  $("form#quiz").submit(function(event) {
      var nameInput = $("input#name").val();

      var comfort = $("select#comfort").val();
      var meal = $("select#meal").val();
      var activity = $("select#activity").val();
      var book = $("select#book").val();
      var philosophy = $("select#philosophy").val();

      var shire = 0;
      var starship = 0;
      var overlook = 0;
      var bathhouse = 0;

      if (comfort === "shire") {
        shire += 1;
      } else if (comfort === "starship") {
        starship += 1;
      } else if (comfort === "overlook") {
        overlook += 1;
      } else if (comfort === "bathhouse") {
        bathhouse += 1;
      }

      if (meal === "shire") {
        shire += 1;
      } else if (meal === "starship") {
        starship += 1;
      } else if (meal === "overlook") {
        overlook += 1;
      } else if (meal === "bathhouse") {
        bathhouse += 1;
      }

      if (activity === "shire") {
        shire += 1;
      } else if (activity === "starship") {
        starship += 1;
      } else if (activity === "overlook") {
        overlook += 1;
      } else if (activity === "bathhouse") {
        bathhouse += 1;
      }

      if (book === "shire") {
        shire += 1;
      } else if (book === "starship") {
        starship += 1;
      } else if (book === "overlook") {
        overlook += 1;
      } else if (book === "bathhouse") {
        bathhouse += 1;
      }

      if (philosophy === "shire") {
        shire += 1;
      } else if (philosophy === "starship") {
        starship += 1;
      } else if (philosophy === "overlook") {
        overlook += 1;
      } else if (philosophy === "bathhouse") {
        bathhouse += 1;
      }


      if (shire >= 3) {
        $('#shire').fadeIn();
      } else if (starship >= 3) {
        $('#starship').fadeIn();
      } else if (overlook >= 3) {
        $('#overlook').fadeIn();
      } else {
        $('#bathhouse').fadeIn();
      }

      $(".name").text(nameInput);

      $("#quiz").hide();
      $(".jumbotron").hide();
      event.preventDefault();
  });
});
