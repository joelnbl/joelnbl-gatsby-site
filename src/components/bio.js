import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={56}
        height={56}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Personal blog by{" "}
          <strong>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>JoelNbl</a>
          </strong>{" "}
          <br />
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
