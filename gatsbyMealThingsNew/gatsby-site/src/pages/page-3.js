import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Connect = () => (
  <Layout>
    <SEO title="Connect" />
    <h1>Connect</h1>
    <button>randomise</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Connect
