$(document).ready(function(){
  $("a").click(function(){
    alert("you are opening: "+$("a").attr("href"));                     
  });
});

/*
------TASK 20-----
------TASK 19------
    $(document).ready(function(){
      $("input").keyup(function(){
        $("span").text(
          $("input").val());
        
      });
    });
------TASK 18------
      $(document).ready(function(){
        $("button").click(function(){
          $("span").html("<em>even</em>");
        });
      });
------TASK 17------
    $(document).ready(function () {
      $("div").mouseenter(function () {
        $(this).text("Thanks, it's much better now");
      });
      $("div").mouseleave(function () {
        $(this).text("Oh nooo, the itching is back!");
    });
    });
------TASK 16------
    $(document).ready(function(){
      $("div").click(function(){
        $(this).animate({height: "50px"}).animate({width: "50px"}).animate({height: "150px"}).animate({width: "150px"});
      });
    });
------TASK 15------
    $(document).ready(function(){
      $("button").click(function(){
        $(this).fadeOut("slow", function(){
          alert("Mission completed!");
        });
      });
    });
------TASK 14------
    $(document).ready(function(){
      $("button").click(function(){
        $("#red").animate({left: "300px"});
      });
    });
------TASK 13------
    $(document).ready(function(){
      $("button").click(function(){
        $(".bunny").show("linear");
      });
    });
------TASK 12------
    $(document).ready(function(){
      $("button").click(function(){
        $(".bunny").hide(2000);
      });
    });

------TASK 11------
    $(document).ready(function(){
      $("button").click(function(){
      $("div").toggle();
     });
    });
------TASK 10------

$(document).ready(function(){
  $("ul").on("click", "li", function(){
    $(this).hide();
  });
    $("button").click(function(){
      $("li:last").after("<li>To do do do dooo</li>");
  });
  });
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
