
$(function() {
    var randomNumber = Math.round(Math.random() * 100);
    var $form = $('#guess-number');
    var $guessNumber = $('#guess');
    var $alert = $('.alert');
    
    var tries = 0;
      
    $form.submit(function(event){
        event.preventDefault();

      tries++;
      if($guessNumber.val() < randomNumber){          
           $alert.removeClass('d-none');          
           $alert.addClass('alert-danger');
           $alert.text('Try again with a bigger number');          
           $alert.addClass('text-danger');
           $guessNumber.val("");
        } else if($guessNumber.val() > randomNumber) {            
            $alert.removeClass('d-none');          
            $alert.addClass('alert-danger');
            $alert.text('Try again with a smaller number');          
            $alert.addClass('text-danger');
            $guessNumber.val("");
        } else {     
            $alert.removeClass('d-none');	    
            $alert.removeClass('alert-danger');        
            $alert.removeClass('text-danger');	        
            $alert.addClass('alert-success');
            $alert.html('Congrats you guessed the number <strong>' + randomNumber + ' </strong> from the <strong>' + tries + '</strong> th attempt!');       $alert.addClass('text-success');
      }
     });
    });
    