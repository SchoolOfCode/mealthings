import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

let relax = ["sudoku", "podcast", "dance", "memes", "read"]
let rand = relax.sort(() => Math.random() - 0.5)
let relaxOptions = relax.length
let randIndex = Math.floor(rand * relaxOptions)
let relaxItem = rand[0]

const Relax = () => (
  <Layout>
    <SEO title="Relax" />
    <h1>Relax</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Relax
