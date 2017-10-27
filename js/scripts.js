$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);

    var nameInput = $("input#name").val();

    var comfort = $("input:radio[name=comfort]:checked").val();
    var meal = $("input:radio[name=meal]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var book = $("input:radio[name=book]:checked").val();
    var philosophy = $("input:radio[name=philosophy]:checked").val();

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


    if (shire > starship && shire > overlook && shire > bathhouse) {
      $('#shire').fadeIn();
    } else if (starship > shire && starship > overlook && starship > bathhouse) {
      $('#starship').fadeIn();
    } else if (overlook > shire && overlook > starship && overlook > bathhouse) {
      $('#overlook').fadeIn();
    } else {
      $('#bathhouse').fadeIn();
    }

    $(".name").text(nameInput);

    $("#quiz").hide();
    $("h1, h4").hide();
    event.preventDefault();
  });
});
