describe("Gnib appointment booking", function() {
  it("should fill the form", function() {
    do {
      browser.url(
        "https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/AppSelect?OpenForm"
      );
      $("#Category").selectByValue("Work"); //Category - Work

      $("#SubCategory").selectByValue("Work Permit Holder"); //SubCategory - Work Permit

      $("#ConfirmGNIB").selectByValue("Renewal"); //gnib - renewal
      browser.pause(200);

      $("#GNIBNo").setValue("767432"); //gnib - card number
      browser.pause(200);

      $("#GNIBExDT").click(); //gnib - date of expiry
      browser.pause(500);

      var years = $$(".year").filter( //gnib - date of expiry YEAR
        year => year.getAttribute("textContent") == "2017"
      );
      years[0].click();
      browser.pause(200);

      var months = $$(".month").filter( //gnib - date of expiry MONTH
        month => month.getAttribute("textContent") == "Jun"
      );
      months[0].click();
      browser.pause(200);

      var days = $$(".day").filter( //gnib - date of expiry DAY
        day => day.getAttribute("textContent") == "1"
      );
      days[0].click();
      browser.pause(200);
      //console.log("gnib filled");

      $("#UsrDeclaration").click(); //agree with terms checkbox
      browser.pause(200);

      $("#GivenName").setValue("Oleksandra"); //Name

      $("#SurName").setValue("Pishcheiko"); //Surname
      browser.pause(200);
      //  console.log("name filled");

      $("#DOB").click(); //birthday date
      browser.pause(300);

      var prev = $$(".prev"); //birthday date - back two times on calendar
      prev[2].click();
      prev[2].click();
      browser.pause(300);

      var years = $$(".year").filter( //birthday date YEAR
        year => year.getAttribute("textContent") == "1997"
      );
      years[0].click();
      browser.pause(200);

      var months = $$(".month").filter( //birthday date MONTH
        month => month.getAttribute("textContent") == "Oct"
      );
      months[0].click();
      browser.pause(200);

      var days = $$(".day").filter(
        //birthday date DAY
        day => day.getAttribute("textContent") == "3"
      );
      days[0].click();
      // console.log("bday filled");

      $("#Nationality").selectByIndex(167); //Nationality - Ukrainian
      // console.log("Nationality filled");
      browser.pause(200);

      $("#Email").setValue("alpish2@gmail.com"); //Email
      browser.pause(200);

      $("#EmailConfirm").setValue("alpish2@gmail.com"); //Email confirm
      // console.log("emails filled");
      browser.pause(200);

      $("#FamAppYN").selectByIndex(2); //Family application - No
      // console.log("FamAppYN filled");
      browser.pause(200);

      $("#PPNoYN").selectByIndex(1); //Passport - Yes

      $("#PPNo").setValue("FG824840"); //Passport number
      // console.log("passport filled");

      $("#btLook4App").click();
      // console.log("find1 clicked");
      browser.pause(200);

      $("#AppSelectChoice").selectByValue("S"); //Date of appointment - closest to today
      // console.log("selected closest to today ");
      browser.pause(200);

      try {
        $("#btSrch4Apps").click();
        browser.$("td*=available"); //if there is message with word "available" - repeat after 20 sec
        console.log("No appointments");
        browser.pause(20000);
      } catch (NoSuchElementException) {
        console.log("MAYBE THERE IS A SLOT FOR YOU"); //if there is NO message with word "available" - stop and alert
        break;
      }
    } while (true);
  });
});
