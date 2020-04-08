import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ContentContainer from '../content/content_container';

const MyList = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <ContentContainer path={"mylist"} />
    </React.Fragment>
  )
}

export default MyList;