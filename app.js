$(document).ready(function(){
  $("ul").on("click", "li", function(){
    $(this).hide();
  });
    $("button").click(function(){
      $("li:last").after("<li>To do do do dooo</li>");
  });
  });
/*
------TASK 10------
------TASK 9------
    $(document).ready(function(){
      $("input").keyup(function(){
        $("span").text($("input").val());
      });
    });
------TASK 8------
    $(document).ready(function(){
      $("div").hover(function(){
        $(this).animate({left: "500px"}),
        $(this).animate({left: "0px"});  
      });
    });
------TASK 7------
$(document).ready(function(){
  $("div").click(function(){
    $(this).css("background-color", "yellow");
  });
});
------TASK 6------
      $(document).ready(function(){
        $("button").click(function(){
          $("span").hide();
        });
      });
------TASK 5------
    $(document).ready(function () {
      $("button").click(function () {
        $(".introvert").hide();
      });
    });
------TASK 4------
    $(document).ready(function(){
      $("button").click(function(){
        $("#invisible").hide();
      });
    });
----TASK 2-3----
    $(document).ready(function(){
      $("button").click(function(){
        $("p").hide();
      });
      });
----TASK 1----
$("#criminal").click(function(){
    $(this).hide();
  });*/
