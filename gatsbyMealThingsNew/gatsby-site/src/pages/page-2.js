import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Recharge = () => (
  <Layout>
    <SEO title="Recharge" />
    <h1>Recharge</h1>
    <button>randomise option</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Recharge
