import React from "react"
import "./contactForm.scss"

function ContactForm() {
  //material contact form animation
  $(".contact-form")
    .find(".form-control")
    .each(function() {
      var targetItem = $(this).parent()
      if ($(this).val()) {
        $(targetItem)
          .find("label")
          .css({
            top: "10px",
            fontSize: "14px",
          })
      }
    })
  $(".contact-form")
    .find(".form-control")
    .focus(function() {
      $(this)
        .parent(".input-block")
        .addClass("focus")
      $(this)
        .parent()
        .find("label")
        .animate(
          {
            top: "10px",
            fontSize: "14px",
          },
          300
        )
    })
  $(".contact-form")
    .find(".form-control")
    .blur(function() {
      if ($(this).val().length == 0) {
        $(this)
          .parent(".input-block")
          .removeClass("focus")
        $(this)
          .parent()
          .find("label")
          .animate(
            {
              top: "25px",
              fontSize: "18px",
            },
            300
          )
      }
    })

  return (
    <div>
      <section class="contact-wrap">
        <form action="" class="contact-form">
          <div class="col-sm-6" class="input-block">
            <div class="input-block">
              <section class="contact-wrap" />
              <form action="" class="contact-form" />
              <label for="">First Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-7">
            <div class="input-block">
              <label for="">Last Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="input-block">
              <div class="input-block">
                <label for="">Email</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="input-block">
              <label for="">Message Subject</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="input-block textarea">
              <label for="">Drop your message here</label>
              <textarea rows="3" type="text" class="form-control"></textarea>
            </div>
          </div>
          <div class="col-sm-12">
            <button class="square-button">Send</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactForm
