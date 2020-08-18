import React from "react"
import Img from "gatsby-image"

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

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
      <AudioPlayer
        src={data.frontmatter.audio_file.publicURL}
        onPlay={e => console.log("onPlay")}
        customAdditionalControls={[]}
      />
      <p>{data.frontmatter.description}</p>
    </div>
  </article>
)

export default PostCard
