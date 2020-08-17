import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ?
      (
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />
      ) : ""
    }
    <div class="post-content">
      <h2 className="title">{data.frontmatter.title}</h2>
      
    </div>
  </article>
)

export default PostCard
