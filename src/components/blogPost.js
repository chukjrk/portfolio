import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Blog from "./blog";

const BlogPost = () => {
    const blogQueryData = useStaticQuery(graphql`
        query BlogListQuery {
            allMarkdownRemark (limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 83, format: PLAIN, truncate: true)
                        frontmatter {
                            author {
                                name
                            }
                            title
                            date(formatString: "MMM Do, YYYY")
                            format
                            category
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 370, maxHeight: 330, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
        }
    `);

    const blogs = blogQueryData.allMarkdownRemark.edges;
    return (
        <div className="rn-post-area rn-section-gap bg-color-white" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Get to Know Latest Articles</h2>
                            <p>First-time bloggers often chase the big spikes in traffic that come with a viral post or a big media mention. Then lightning finally strikes… and they come to realize that those surges in traffic are made up mostly of people who aren’t very engaged and who don’t stick around for very long. (c)</p>
                        </div>
                        
                    </div>
                </div>
                
                <div className="row row--25">
                    {blogs.map(blog => (
                        <div className="col-lg-4 col-md-6 col-12" key={blog.node.fields.slug}>
                            <Blog
                                image={blog.node.frontmatter.image.childImageSharp.fluid}
                                title={blog.node.frontmatter.title}
                                date={blog.node.frontmatter.date}
                                category={blog.node.frontmatter.category}
                                author={blog.node.frontmatter.author.name}
                                path={blog.node.fields.slug}
                                excerpt={blog.node.excerpt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPost;
