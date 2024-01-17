import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
    <Helmet>
        <title>Homepage</title>
        <meta name='description' content='homepage content'></meta>
    </Helmet>
    <h2>Homepage</h2>
    </>
  )
}

export default Home;


