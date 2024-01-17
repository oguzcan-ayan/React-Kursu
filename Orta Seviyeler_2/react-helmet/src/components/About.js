import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
     <Helmet>
        <title>About</title>
        <meta name='description' content='about content'></meta>
    </Helmet>
        <h2>About</h2>
    </>
  )
}

export default About;