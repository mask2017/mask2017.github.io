/**
 * Contact form
 */

$(document).ready(function (e) {
  $('#form_sendemail').submit(function (e) {
    $('#form_sendemail .has-error').removeClass('has-error');
    $('#form_sendemail .help-block').html('').hide();
    $('#form_message').removeClass('alert-success').html('');



    xmlhttp.send(JSON.stringify({
      'key': '64affcf9e3988e8594ba20e17d7d2005-us15',
      'message': {
        'from_email': 'mask2017.github.io@mail.ru',
        'to': [{ 'email': 'krutu2017@mail.ru', 'type': 'to' }],
        'autotext': 'true',
        'subject': 'Yeah!',
        'html': $(this).serialize()
      }
    }));

    // $.ajax({
    //   url: 'sendmail.php',
    //   type: 'POST',
    //   data: $(this).serialize(),
    //   dataType: 'json',
    //   beforeSend: function (XMLHttpRequest) {
    //     //
    //     $('#form_sendemail .has-error').removeClass('has-error');
    //     $('#form_sendemail .help-block').html('').hide();
    //     $('#form_message').removeClass('alert-success').html('');
    //   },
    //   success: function (json, textStatus) {
    //     if (json.error) {
    //       // Error messages
    //       if (json.error.name) {
    //         $('#form_sendemail input[name="name"]').parent().addClass('has-error');
    //         $('#form_sendemail input[name="name"]').next('.help-block').html(json.error.name).slideDown();
    //       }
    //       if (json.error.email) {
    //         $('#form_sendemail input[name="email"]').parent().addClass('has-error');
    //         $('#form_sendemail input[name="email"]').next('.help-block').html(json.error.email).slideDown();
    //       }
    //       if (json.error.message) {
    //         $('#form_sendemail textarea[name="message"]').parent().addClass('has-error');
    //         $('#form_sendemail textarea[name="message"]').next('.help-block').html(json.error.message).slideDown();
    //       }
    //     }
    //     //
    //     if (json.success) {
    //       $('#form_message').addClass('alert-success').html(json.success).slideDown();

    //       setTimeout(function () {
    //         $('#form_message').slideUp("fast", function () {
    //           $(this).removeClass('alert-success').html('');
    //         });
    //       }, 4000);
    //       $('#form_sendemail')[0].reset();
    //     }

    //   },
    //   complete: function (XMLHttpRequest, textStatus) {
    //     //
    //   }
    // });

    return false;
  });
});



var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4) {
    if (xmlhttp.status == 200) {
      $('#form_message').addClass('alert-success').html(json.success).slideDown();
      setTimeout(function () {
        $('#form_message').slideUp("fast", function () {
          $(this).removeClass('alert-success').html('');
        });
      }, 4000);
      $('#form_sendemail')[0].reset();
    }
    else if (xmlhttp.status == 500) { alert('Check apikey') }
    else {
      $('#form_sendemail input[name="name"]').parent().addClass('has-error');
      $('#form_sendemail input[name="name"]').next('.help-block').html(json.error.name).slideDown();

    }
  }
}
