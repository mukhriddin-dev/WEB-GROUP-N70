import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Extra from "./components/Extra";
import Todos from "./components/Todos";
import Effect from "./components/Effect";
import { Toast } from "bootstrap";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
      <Todos/>
      </main>
      <Footer />
    </>
  );
};

export default App;
