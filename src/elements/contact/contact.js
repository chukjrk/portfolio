import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import { FiLinkedin, FiGlobe, FiGithub } from "react-icons/fi";
import Contactform from "./contactform";
const infoList = [
    {
        "id": "1",
        "icon": <FiLinkedin />,
        "label": "LinkedIn",
        "link": "https://www.linkedin.com/in/cjkemdirim/"
    },
    {
        "id": "2",
        "icon": <FiGithub />,
        "label": "Github",
        "link": "https://github.com/chukjrk"
    }
]

const Contact = () => {
    const contactData = useStaticQuery(graphql`
        query contactDataQuery {
            homedefaultJson(id: {eq: "contactus"}) {
                title
                subtitle
            }
            site {
                siteMetadata {
                    getform_url
                }
            }

        }
    `);
    const Title = contactData.homedefaultJson.title;
    const Description = contactData.homedefaultJson.subtitle;
    const { site: { siteMetadata: { getform_url } } } = contactData;
    return (
        <div className="rn-contact-area rn-section-gap bg-color-white" id="contact"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section title mb--30">
                            <h2 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h2>
                            <p>{Description}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-12 mt--30">
                        <div className="contact-info-list-wrapper">
                            {infoList.map((value, index) => (
                                <div className="list" key={index}>
                                    <div className="icon">{value.icon}</div>
                                    <a className="link" href={value.link} target="_blank"><span className="label">{value.label}</span></a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Start Contact Form  */}
                    <div className="col-lg-6 col-12 mt--30">
                        <Contactform url={getform_url} />
                    </div>
                    {/* End Contact Form  */}
                </div>
            </div>
        </div>
    )
}

export default Contact
