import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql , Link} from 'gatsby';
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Start Header Area 
const HeaderSidebar = () => {
    const menuQuery = useStaticQuery(graphql`
        query navbarQuery {
            allMenuJson {
                nodes {
                    title
                    path
                }
            },
            file(relativePath: {eq: "images/logo/desktop-dark-logo.png"}) {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `);
    const navbarData = menuQuery.allMenuJson.nodes;
    const arloLogo = menuQuery.file.childImageSharp.fixed;
    return (
        <header className="rn-header header-with-sidebar">
            <div className="header-inner">
                {/* Header Logo  */}
                <div className="logo">
                    <Link to="/">
                        <Img fixed={arloLogo}  />
                    </Link>
                </div>
                {/* Main Menu  */}
                <div className="mainmenu-inner">
                    <div className="mainmenu">
                        {navbarData.map((menu , i) => (
                            <AnchorLink className="nav-link" key={i} to={`${menu.path}`}>
                                <span>{menu.title}</span>
                            </AnchorLink>
                        ))}
                    </div>
                </div>
                {/* Start Social Area  */}
            </div>
        </header>
    )
}
// End Header Area 

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default HeaderSidebar;