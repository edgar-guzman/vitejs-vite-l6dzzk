// import './Layout.css';

// import { useState } from 'react';
// import { Header, Main, Footer } from '../react';
import Header from '../react/Header';
import Main from '../react/Main';
import Footer from '../react/Footer';

type Props = {
  children: string;
};

function Layout(children: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
