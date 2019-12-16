
const jquery = require('jquery');

$ = window.$ = window.jQuery = jquery;

require("bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap-table");
require("bootstrap-table/dist/bootstrap-table.min.css");
require("@fortawesome/fontawesome-free/css/all.css");
require("./styles.css");

$(document).ready(function() {
      console.log('hello');
      let counter = 0;
      $(".pop").popover({
        animation: true,
        html: true,
        content: function(){
          return $('#popover_content_wrapper').html();
       },
        placement: "left"
      });
      $("#c-03").click(function(){
        if (counter === 0){
          $("#c-04").removeClass("far fa-plus-square");
          $("#c-04").addClass("far fa-minus-square");
          counter += 1;
          console.log(counter);
        }
        else if (counter === 1){
          $("#c-04").removeClass("far fa-minus-square");
          $("#c-04").addClass("far fa-plus-square");
          counter -= 1;
          console.log(counter);
        }  
      });
});
