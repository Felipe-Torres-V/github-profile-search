import styled from "styled-components";
import { TopArea } from "./TopArea";
import LinksArea from './Links';
import { StartArea } from "./Start";
import { UserDataProps } from "../Types";

export const Index = ({ user }: UserDataProps) => {
  return (
    <Container>
      <Pfp src={user.pfp} alt={user.name} />
      <SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />
        <StartArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />
        <LinksArea links={user.links}/>
      </SideArea>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 4.8rem;
  background-color: #333333;
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  width: 73.3rem;
  box-shadow: 0px 16px 30px -10px #111111;
  display: flex;
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: block;
`;

const SideArea = styled.div`
  width: 100%;
`;