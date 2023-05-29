import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';


// eslint-disable-next-line no-undef
const Wrapper = styled.div`
  /* עיצוב הכותרת */
  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

// eslint-disable-next-line no-undef
const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;