let mediaQuery = window.matchMedia("(max-width: 620px)");

function handleMediaQuery(e) {
  if (e.matches) {
    $(".heading-container").html("Silver Jubilee Reunion<br>Class of '98");
  }
}

mediaQuery.addListener(handleMediaQuery);

handleMediaQuery(mediaQuery);
