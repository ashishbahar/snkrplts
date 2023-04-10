import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import LogoSection from "./components/LogoSection";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import RelatedProduct from "./components/RelatedProduct";
import NikeAir from "./components/NikeAir";
import Description from "./components/Description";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <LogoSection />
      <MyNav />
      <Header />
      <NikeAir />
      <Description />
      <RelatedProduct />
      <Footer />
    </>
  );
}

export default App;
