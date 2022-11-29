import styled from "styled-components"
import {TopArea} from "./Components/TopArea";
import { useState } from "react";
import { UserProps } from "./Components/Types/index";
import { Index } from "./Components/UserData/index";

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
    <div>
      <Container>
        <TopArea setUser={setUserData} />
        {user && <Index user={user} />}
      </Container>
    </div>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #777777;
  padding: 3.1rem 7rem;
`;

export default App