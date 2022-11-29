import styled from "styled-components";
import {GoLocation} from 'react-icons/go'
import {TiAttachment} from 'react-icons/ti'
import {GrTwitter} from 'react-icons/gr'
import {BsBuilding} from 'react-icons/bs'

interface LinksAreaProps {
  links: {
    location: string;
    blog: string;
    twitter: string;
    company: string;
  };
}

export default function LinksArea({ links }: LinksAreaProps) {

  return (
    <Container>
      <Link className={`${!links.location && "unavailable"}`}>
        <Info>
            <Icon><GoLocation/></Icon>
            <Data>{links.location || "Not Available"}</Data>
        </Info>
      </Link>
      <Link className={`${!links.blog && "unavailable"}`}>
        {links.blog ? (
          <a href={links.blog}>
            <Icon><TiAttachment/></Icon>
            <Data>{links.blog}</Data>
          </a>
        ) : (
          <Info>
            <Icon><TiAttachment/></Icon>
            <Data>Not Available</Data>
          </Info>
        )}
      </Link>
      <Link className={`${!links.twitter && "unavailable"}`}>
        {links.twitter ? (
          <a href={`https://twitter.com/${links.twitter}`}>
            <Icon><GrTwitter/></Icon>
            <Data>{links.twitter}</Data>
          </a>
        ) : (
          <Info>
            <Icon><GrTwitter/></Icon>
            <Data>Not available</Data>
          </Info>
        )}
      </Link>
      <Link className={`${!links.company && "unavailable"}`}>
        <Info>
            <Icon><BsBuilding/></Icon>
            <Data>{links.company || "Not Available"}</Data>
        </Info>
      </Link>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.4rem;
`;

const Link = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Data = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
  margin-left: 2rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  width: 30px;
`;