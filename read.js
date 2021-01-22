$(document).ready(function(){
    $(".btn").click(function(){
       /* $("span").toggle(500, function() {
            $(".btn").text("read less", function(){
                alert("read more");
            });
        });
        
        */
        
        $("span").slideToggle(500);
        $(this).text($(this).text() == 'read less' ? '...read more' : 'read less');
    })
});