(function($) {
     let createPost=function(e){
       $("")
       


     }





     $(".toggle-password").click(function() {

        $(this).toggleClass("zmdi-eye-off zmdi-eye");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

})(jQuery);