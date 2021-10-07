import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import '../scss/style.scss';


const Layout = ({ children }) => {
  return (
    <div className="main-wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
