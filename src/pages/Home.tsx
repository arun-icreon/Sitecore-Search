import React from 'react';
import styled from 'styled-components';

import { HTMBlockWidget } from '@sitecore-search/react';

import { HighlightedWrapper, PageSection } from '../components/Common';
import HomeFAQ from '../components/HomeFAQ';
import HomeHighlighted from '../widgets/HomeHighlighted';

const HighlightedArticles = styled(PageSection)`
  background: url(https://wwwsitecorecom.azureedge.net/assets/images/Sitecore_3D-Composition_Neutral_Scene04.jpg);
  background-size: cover;
  background-position: left;
  opacity: 0.9;
`;

const Home = (): JSX.Element => {
  return (
    <>
      <HTMBlockWidget rfkId="home_hero" />
      {/* @TODO: enable this when related questions is supported on sdk <HomeFAQ /> */}
      <HighlightedArticles>
        <HighlightedWrapper>
          <HTMBlockWidget rfkId="highlight_title" />
          <HomeHighlighted rfkId="search_home_highlight_articles" />
        </HighlightedWrapper>
      </HighlightedArticles>
    </>
  );
};

export default Home;
