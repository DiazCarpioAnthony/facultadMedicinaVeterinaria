
$(document).ready(function(){
    $('#check').on('change', function(e){
        e.preventDefault();
        if (this.checked) {
            $(".menu-responsive").css({"z-index": "2"});
        } else {
            setTimeout(function(){
                $(".menu-responsive").css({"z-index": "0"});
              }, 2000);
            
        }
    });
})