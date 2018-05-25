import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        {category === "The Tangle Blog" && (
          <PostListing
            postEdges={postEdges}
            category={"The Tangle Blog"}
            categoryDescription={
              "Learn more about the product and what it can do for you"
            }
          />
        )}
        {category === "The Insight Area" && (
          <PostListing
            postEdges={postEdges}
            category={"The Insight Area"}
            categoryDescription={
              "Explore the interesting ideas we love to write about"
            }
          />
        )}
        {category === "The KM Corner" && (
          <PostListing
            postEdges={postEdges}
            category={"The KM Corner"}
            categoryDescription={
              "Educate yourself on knowledge management best practices"
            }
          />
        )}
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
          }
        }
      }
    }
  }
`;
