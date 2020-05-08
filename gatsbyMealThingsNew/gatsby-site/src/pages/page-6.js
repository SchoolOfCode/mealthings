import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

let cleanse = ["shower", "bath", "wash hands", "breathing", "exfoliate"]
let rand = cleanse.sort(() => Math.random() - 0.5)
let cleanseOptions = cleanse.length
let randIndex = Math.floor(rand * cleanseOptions)
let cleanseItem = rand[0]

const Cleanse = () => (
  <Layout>
    <SEO title="Cleanse" />
    <h1>Cleanse</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Cleanse
