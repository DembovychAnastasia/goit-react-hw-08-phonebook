import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styled';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
        Copyright 
          <a href="https://github.com/DembovychAnastasia"> &copy; Anastasiya Dembovych </a> Created by GoIt 2023
         </p>
      </Footer>
    </Container>
  );
};

export default Layout;