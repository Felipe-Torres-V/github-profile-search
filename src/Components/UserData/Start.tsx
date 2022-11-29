import styled from "styled-components";

interface StastsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const StartArea = ({ repos, followers, following }: StastsAreaProps) => {
  return (
    <Container>
      <Data>
        <span>Repositórios</span>
        <strong>{repos}</strong>
      </Data>
      <Data>
        <span>Seguidores</span>
        <strong>{followers}</strong>
      </Data>
      <Data>
      <span>Seguindo</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;
  padding: 1.8rem 3.2rem;padding: 1.8rem 1.4rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Data = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-size: 1.5rem;
    line-height: 1.6rem;
    text-align: center;
    color: white;
  }
  strong {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
    margin-top: 1rem;
    color: white;
  }
`;