import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ContentContainer from '../content/content_container';

const Latest = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <ContentContainer path={"latest"} />
    </React.Fragment>
  )
};

export default Latest;