import React from "react"
import css from "./style.scss"
import Image from "../../components/image"

function Circle() {
  return (
    <>
      <div class="ellipses-container">
        <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <div class="ellipses ellipses__outer--thin">
          <div class="ellipses ellipses__orbit"></div>
        </div>

        <div class="ellipses ellipses__outer--thick"></div>
      </div>
    </>
  )
}

export default Circle
