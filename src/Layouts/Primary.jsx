import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../pages/Shared/Header/Header";
import Footer from "./../pages/Shared/Footer/Footer";

const Primary = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Primary;
