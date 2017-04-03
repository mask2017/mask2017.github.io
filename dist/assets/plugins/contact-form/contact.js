/**
 * Contact form
 */

$(document).ready(function (e) {
  $('#form_sendemail').submit(function (e) {
    $.ajax({
      url: "https://xn--80ajdfbettat7cyb9e.xn--p1ai/zhaljuzi/SendMessage",
      type: 'POST',
      data: "name=" + $("#name").val() + "&tel=" + $("#tel").val() + "&message=" + $("#message").val() + "&sentTo=krutu2017@mail.ru",
      dataType: 'json',
      beforeSend: function (XMLHttpRequest) {
        //
        $('#form_sendemail .has-error').removeClass('has-error');
        $('#form_sendemail .help-block').html('').hide();
        $('#form_message').removeClass('alert-success').html('');
      },
      success: function (json, textStatus) {
        // if (json.error) {
        // Error messages
        // if (json.error.name) {
        //   $('#form_sendemail input[name="name"]').parent().addClass('has-error');
        //   $('#form_sendemail input[name="name"]').next('.help-block').html(json.error.name).slideDown();
        // }
        // if (json.error.email) {
        //   $('#form_sendemail input[name="email"]').parent().addClass('has-error');
        //   $('#form_sendemail input[name="email"]').next('.help-block').html(json.error.email).slideDown();
        // }
        // if (json.error.message) {
        //   $('#form_sendemail textarea[name="message"]').parent().addClass('has-error');
        //   $('#form_sendemail textarea[name="message"]').next('.help-block').html(json.error.message).slideDown();
        // }
        // }
        //
        if (textStatus == "success") {
          $('#form_message').addClass('alert-success').html("спасибо за ваш заказ").slideDown();

          setTimeout(function () {
            $('#form_message').slideUp("fast", function () {
              $(this).removeClass('alert-success').html('');
            });
          }, 4000);
          $('#form_sendemail')[0].reset();
        }

      },
      complete: function (XMLHttpRequest, textStatus) {
        //
      }
    });

    return false;
  });
});



