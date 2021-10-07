import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';


const About = ( ) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDefaultQuery {
            homedefaultJson (id: {eq: "about"}) {
                title
                description
                downloadButton
                linkBUtton
                aboutData {
                    iconName
                    id
                    label
                    value
                }
            }
        }
    `);

    const title = aboutQueryData.homedefaultJson.title;
    const description = aboutQueryData.homedefaultJson.description;
    const abouInfoData = aboutQueryData.homedefaultJson.aboutData;
    const downloadButton = aboutQueryData.homedefaultJson.downloadButton;
    const linkBUtton = aboutQueryData.homedefaultJson.linkBUtton;

    return (
        <div className="rb-about-area about-style-01 rn-section-gap bg-color-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content">
                                <div className="section-title">
                                    {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title }}></h3>}
                                    {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>}
                                </div>
                                {abouInfoData &&
                                    <ul className="infodata-list">
                                        {abouInfoData.map( (data, index) => (
                                            <li key={index}>
                                                <span className="label">{data.label}</span>
                                                <span className="value">{data.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                }
                                <div className="button-group mt--30">
                                    {downloadButton && <a className="rn-button" href="#downloadbutton"><span>{downloadButton}</span></a>}
                                    {linkBUtton && <a className="link-button" href="#linkbutton"><span>{linkBUtton}</span></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
