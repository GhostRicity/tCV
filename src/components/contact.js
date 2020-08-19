import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Cont = ({ data, tit }) => (
  <section className="home-banner">
    <h1 className="title">
      {tit}
    </h1>
    <div className="description" dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  </section>
)

export default function ContText() {
  return(
    <StaticQuery
      query={graphql`
        query ContQuery {
          markdownRemark(frontmatter: {template: {eq: "contact-page"}}) {
            html
            frontmatter {
              title
            }

          }
        }`
      }

      render={ data  => {
        return(
          <Cont
                data={data.markdownRemark.html}
                tit={data.markdownRemark.frontmatter.title}
          />
        )
       }
      }
    />
  )
}


//const Cont = ({ data }) => (
  //<section className="home-banner">
    //<h1 className="title">Contact info</h1>
    //<h1>{frontmatter.title}</h1>
    //<div className="description">
      //{data}
    //</div>
  //</section>
//)
//data={data.markdownRemark.frontmatter.title}
