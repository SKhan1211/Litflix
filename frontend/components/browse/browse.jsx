import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ContentContainer from '../content/content_container';

const Browse = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <ContentContainer path={"browse"}/>
    </React.Fragment>
  )
}

export default Browse;