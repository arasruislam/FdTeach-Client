import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../pages/Shared/Header/Header";
import Footer from "./../pages/Shared/Footer/Footer";

const Primary = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="min-h-[calc(100vh-220px)] pt-16">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Primary;
