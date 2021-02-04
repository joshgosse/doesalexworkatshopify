import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Does Alex work at Shopify?" />
    <h1>No.</h1>
    <div
      style={{
        width: `100%`,
        marginBottom: `1.45rem`,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ width: `400px` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
