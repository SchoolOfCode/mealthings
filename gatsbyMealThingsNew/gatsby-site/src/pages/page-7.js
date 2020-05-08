import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

let alfresco = [
  "open window",
  "gardening",
  "sit under a tree",
  "listen to birdsong",
  "connect with nature",
]
let rand = alfresco.sort(() => Math.random() - 0.5)
let alfrescoOptions = alfresco.length
let randIndex = Math.floor(rand * alfrescoOptions)
let alfrescoItem = rand[0]

const Alfresco = () => (
  <Layout>
    <SEO title="Alfresco" />
    <h1>Alfresco</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Alfresco
