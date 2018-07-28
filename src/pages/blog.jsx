import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Alpha from "../components/Subscribe/Alpha";
import { ChevronsDown } from "react-feather";
import { navigateTo } from "gatsby-link";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className={`w-100`}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />

        <Alpha
          title={"The blog is just the beginning."}
          body={
            "If you enjoy what you see here, we bet you will love what we are building. Just click the button and not only will you be at the front of the line for exclusive access to Tangle, we will send you updates on our progress and new content."
          }
        />

        <div className={`mt5 mb5 measure-wide center pa4 ba br4 b--light-gray`}>
          <PostListing
            shouldNotShowAlpha={true}
            postEdges={postEdges
              .filter(
                (post, index) =>
                  post.node.frontmatter.category === "The Tangle Blog"
              )
              .filter((_, index) => index < 3)}
            category={"The Tangle Blog"}
            categoryDescription={
              "Learn more about the product and what it can do for you"
            }
          />

          <div
            className={`accent tc grow pointer`}
            onClick={() => {
              navigateTo("/categories/the-tangle-blog");
            }}
          >
            <ChevronsDown size={24} />
          </div>
        </div>

        <div className={`mb5 measure-wide center pa4 ba br4 b--light-gray`}>
          <PostListing
            shouldNotShowAlpha={true}
            postEdges={postEdges
              .filter(
                (post, index) =>
                  post.node.frontmatter.category === "The KM Corner"
              )
              .filter((_, index) => index < 3)}
            category={"The KM Corner"}
            categoryDescription={
              "Educate yourself on knowledge management best practices"
            }
          />

          <div
            className={`accent tc grow pointer`}
            onClick={() => {
              navigateTo("/categories/the-km-corner");
            }}
          >
            <ChevronsDown size={24} />
          </div>
        </div>

        <div className={`mb5 measure-wide center pa4 ba br4 b--light-gray`}>
          <PostListing
            shouldNotShowAlpha={true}
            postEdges={postEdges
              .filter(
                (post, index) =>
                  post.node.frontmatter.category === "The Insight Area"
              )
              .filter((_, index) => index < 3)}
            category={"The Insight Area"}
            categoryDescription={
              "Explore the interesting ideas we love to write about"
            }
          />

          <div
            className={`accent tc grow pointer`}
            onClick={() => {
              navigateTo("/categories/the-insight-area");
            }}
          >
            <ChevronsDown size={24} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
          }
        }
      }
    }
  }
`;
