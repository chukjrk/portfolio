import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ProjectOne from "../../elements/project/projectOne";


const Project = () => {
    const portfolioData = useStaticQuery(graphql`
        query portfolioDataQuery {
            homedefaultJson(id: {eq: "portfolio"}) {
            title
            description
            }
        }
    `);
    const Title = portfolioData.homedefaultJson.title;
    const Description = portfolioData.homedefaultJson.description;
    return (
        <div className="rn-portfolio-area rn-section-gap bg-color-white portfolio-style-1" id="project">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="title"  dangerouslySetInnerHTML={{ __html: Title }}></h3>
                            <p className="description">{Description}</p>
                        </div>
                    </div>
                </div>
                <ProjectOne />
            </div>
        </div>
    )
}
export default Project
