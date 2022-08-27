import Home from "./home";
import Sidebar from "./components/sidebar";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 96px;
  justify-content: center;
  .subcontainer {
    display: flex;
  }
`;
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContainer>
        <div className="subcontainer">
          <Home />
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
