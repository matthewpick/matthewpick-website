import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page for " + site.siteMetadata.title} />
      </Helmet>
      <h2>About &darr;</h2>
      {/*TODO: Add links to Github and LinkedIn   https://linkedin.com/in/mattpick   https://github.com/matthewpick*/}
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/matthewpick">Github</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mattpick">LinkedIn</a></li>
      </ul>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
    query AboutPageQuery{
        site {
            siteMetadata {
                title
            }
        }
    }
`
