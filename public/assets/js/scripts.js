// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBtn").on("click", function(event) {
      var id = $(this).data("id");
  
      var didAte = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: didAte
      }).then(
        function() {
          console.log("changed devoured to didAte");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger: $("#burger-request").val().trim()
      };
      console.log(newBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger" + newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).parent().data("id");
  
    //   Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });