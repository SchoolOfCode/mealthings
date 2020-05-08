import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

let refuel = ["snack", "lunch", "breakfast", "dinner", "treat"]
let rand = refuel.sort(() => Math.random() - 0.5)
let refuelOptions = refuel.length
let randIndex = Math.floor(rand * refuelOptions)
let refuelItem = rand[0]

const Refuel = () => (
  <Layout>
    <SEO title="Refuel" />
    <h1>Refuel</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Refuel
