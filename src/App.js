import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Generate from "./components/Generate";
import Filter from "./components/Filter";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Generate />
      <Filter />
      <Wrapper>
        
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
