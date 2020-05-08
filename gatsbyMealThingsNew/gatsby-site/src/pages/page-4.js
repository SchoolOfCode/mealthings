import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

let refuel = ["walk", "yoga", "cardio", "fat burn", "treat"]
let rand = refuel.sort(() => Math.random() - 0.5)
let refuelOptions = refuel.length
let randIndex = Math.floor(rand * refuelOptions)
let refuelItem = rand[0]

const Exercise = () => (
  <Layout>
    <SEO title="Exercise" />
    <h1>Exercise</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Exercise
