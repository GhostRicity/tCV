import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Reco = ({ data , tit }) => (
  <section className="home-banner">
    <h1 className="title">
      {tit}
    </h1>
    <div className="description" dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  </section>
)

export default function RecoText() {
  return(
    <StaticQuery
      query={graphql`
        query RecoQuery {
          markdownRemark(frontmatter: {template: {eq: "about-page"}}) {
            html
            frontmatter {
              title
            }
          }
        }`
      }

      render={ data => {
        return(
          <Reco
            data={data.markdownRemark.html}
            tit={data.markdownRemark.frontmatter.title}
            />
          )
        }
      }
    />
  )
}
