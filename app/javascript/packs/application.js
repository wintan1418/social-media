import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

//= require jquery
// Loads all Semantic javascripts
//= require semantic-ui

const scroll_bottom = () => {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

const submit_message = () => {
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
        }
    })
}

require("semantic-ui-sass")
$(document).on("turbolinks:load", () => {
    $(".ui.dropdown").dropdown();
    
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
});

export { scroll_bottom }