import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = (data) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p style={{fontFamily: 'limelight'}}>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div className="flexBox">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>

  </div>
)

export default IndexPage
