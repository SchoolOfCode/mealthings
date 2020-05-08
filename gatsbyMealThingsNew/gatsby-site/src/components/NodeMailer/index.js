import React, { useState } from "react"

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
        <input
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
        ></input>
        <button onClick={postNewEmail}>Submit</button>
      </form>
    </div>
  )
}

export default NodeMailer
