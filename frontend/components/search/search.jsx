import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ContentContainer from '../content/content_container';

const Search = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <ContentContainer path={"search"} />
    </React.Fragment>
  )
};

export default Search;