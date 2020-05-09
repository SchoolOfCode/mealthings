import React, { useState } from "react"
import css from "./module.NodeMailer.css"

function NodeMailer(formSubmission) {
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubjectChange = e => {
    setSubject(e.target.value)
    console.log(subject)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handleTextChange = e => {
    setText(e.target.value)
    console.log(text)
  }

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   formSubmission({ subject, email, text });
  // };

  async function postNewEmail(event) {
    event.preventDefault()

    const res = await fetch("http://localhost:5000/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        subject,
        text,
      }),
    })
    const payload = await res.json()
  }
  return (
    <div>
      <form>
        <div class="card">
          <img
            class="card__image"
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2462&q=80"
            alt=""
          />
          <div class="card__content">
            <h1 class="card__head"></h1>
            <div class="card__wrap">
              <h2 class="card__title">
                Get the latest
                <span class="card__clr">to your inbox</span>
              </h2>
              <div class="card__form">
                <input
                  class="card__input"
                  type="text"
                  value={subject}
                  placeholder="name"
                  name="subject"
                  onChange={handleSubjectChange}
                ></input>
                <span class="card__icon">
                  <svg
                    width="26"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>

                <input
                  class="card__input"
                  type="text"
                  value={email}
                  placeholder="email"
                  name="email"
                  onChange={handleEmailChange}
                ></input>
                <span class="card__icon1">
                  <svg
                    width="26"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <button type="submit" class="card__btn" onClick={postNewEmail}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <input
          type="text"
          value={subject}
          placeholder="subject"
          name="subject"
          onChange={handleSubjectChange}
        ></input>
        <input
          type="text"
          value={email}
          placeholder="email"
          name="email"
          onChange={handleEmailChange}
        ></input>
        <input
          type="text"
          value={text}
          placeholder="text"
          name="text"
          onChange={handleTextChange}
        ></input> */}
      </form>
    </div>
  )
}

export default NodeMailer
