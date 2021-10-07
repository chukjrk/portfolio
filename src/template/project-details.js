import React from 'react';
import Img from "gatsby-image";
import Image from "../elements/image";
import Footer from "../components/footer/footer";
import { FiList, FiUser, FiInstagram } from "react-icons/fi";
import { graphql } from 'gatsby'


const ProjectDetails = ({data}) => {
    const projectData = data.projectJson;
    const projectImage = data.projectJson.features;
    return (
        <>
            <div className="rn-project-details-area rn-section-gapBottom pt--90 bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="page-top">
                                    <h1 className="title_holder">{projectData.title}</h1>
                                </div>
                                <div className="portfolio-content mt--90 mt_lg--30 mt_md--20 mt_sm--20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content-left">
                                                <h3>Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Category:</span><span className="projectinfo">{projectData.category}</span></li>
                                                    <li><span className="icon"><FiUser />Organization:</span><span className="projectinfo">{projectData.client}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--30 mt_sm--30">
                                            <div className="content-left">
                                                <p>{projectData.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                                    <Image fluid={projectData.featured_image.childImageSharp.fluid} />
                                </div>

                                <div className="col-lg-12 col-md-12 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <div className="post-single-title">
                                        <h4 className="post-title">My Role</h4>
                                    </div>
                                    <div className="content-left">
                                        <p>{projectData.role}</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <div className="post-single-title">
                                        <h4 className="post-title">Product</h4>
                                    </div>
                                    <div className="content-left">
                                        {projectData.concept.map((description, index) => (
                                            <p>{description}</p>
                                        ))} 
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <div className="post-single-title">
                                        <h4 className="post-title">Results</h4>
                                    </div>
                                    <div className="content-left">
                                        {projectData.key_takeaways.map((results, index) => (
                                            <li className="mt--20">{results}</li>
                                        ))}
                                    </div>
                                </div>

                                <div className="image-group row mt--50">
                                    {projectImage.map((data, index) => (
                                        <div className="single-image col-lg-4 mt--30" key={index}>
                                            <Img fluid={data.image.childImageSharp.fluid} />
                                        </div>
                                    ))}
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export const query = graphql `
    query($id: String!) {
        projectJson(id: {eq: $id}) {
            id
            title
            body
            category
            client
            featured_image {
                childImageSharp {
                    fluid(maxHeight: 1000, maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationHeight
                        presentationWidth
                    }
                }
            },
            features {
                image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
            role
            concept
            key_takeaways
        }
    }
`;
export default ProjectDetails;