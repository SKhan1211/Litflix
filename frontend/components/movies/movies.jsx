import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ContentContainer from '../content/content_container';

const Movies = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <ContentContainer path={"movies"}/>
    </React.Fragment>
  )
};

export default Movies;