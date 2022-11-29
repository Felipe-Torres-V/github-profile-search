import styled from "styled-components";

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export const TopArea = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {
  return (
    <div>
      <Info>
        <Pfp src={pfp} alt={name} />
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>
          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </div>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Bio = styled.p`
  color: white;
  font-size: 1.6rem;
  line-height: 192%;
  margin: 2.2rem 0 3.3rem;
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 4.1rem;
  display: none;
`;

const SideInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  span:last-of-type {
    grid-column: 2 /3;
    grid-row: 1 /2;
    justify-self: end;
  }
`;

const Name = styled.strong`
  font-weight: bold;
  font-size: 2.7rem;
  line-height: 2.4rem;
  color: white;
`;

const Username = styled.span`
  font-size: 1.6rem;
  line-height: 2rem;
  color: #0079ff;
  margin-bottom: 0.6rem;
  margin-top: 0.5rem;
`;

const JoinedAt = styled.span`
  font-size: 1.6rem;
  line-height: 2rem;
  color: white;
`;