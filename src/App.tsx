import { useState } from "react";
import createGlobalStyle1 from "./styles/theme1";
import createGlobalStyle2 from "./styles/theme2";
import createGlobalStyle3 from "./styles/theme3";
import { Container, Header, WrapperSwitch, Switch } from "./App.Style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Header>
          calc
          <WrapperSwitch>
            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
            </Switch>
          </WrapperSwitch>
        </Header>
      </Container>
    </>
  );
}

export default App;
