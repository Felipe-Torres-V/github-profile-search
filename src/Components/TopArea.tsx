import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { TopAreaProps, UserProps } from "./Types/index";
import { joinedDate } from "./Format/Date";
import {BsSearch} from 'react-icons/bs'

export const TopArea = ({ setUser }: TopAreaProps) => {

  const [empty, setEmpty] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [inputUser] = useState("octocat");

  function hadleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setEmpty(true);
      setUser(null);
      return;
    }
    setEmpty(false);
    fetchUser(usernameRef.current.value);
  }

  async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
      if (response.status != 200) {
        setNotFound(true);
        setUser(null);
        return;
      }
      setNotFound(false);

    const user: UserProps = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinedDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
      },
    };
    setUser(user);
  }

  useEffect(()=> {
    fetchUser(inputUser)
  },[inputUser])

  return (
    <Container>
      <InputArea onSubmit={(e) => {e.preventDefault();hadleSubmit();}}>
        <InputLabel>
          <Icon>
            <BsSearch/>
          </Icon>
        </InputLabel>
        <Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Search"
        />
        {empty && <Warn>Enter User</Warn>}
        {notFound && <Warn>Not Found</Warn>}
        <SubmitBtn type="submit">Search</SubmitBtn>
      </InputArea>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

const Warn = styled.small`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #f74646;
  margin-right: 2.4rem;
`

const InputArea = styled.form`
  margin-top: 3.6rem;
  border-radius: 1.5rem;
  background-color: #333333;
  box-shadow: 0px 16px 30px -15px #111111;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;
`;

const InputLabel = styled.label`
  height: 2.4rem;
`;

const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  line-height: 192%;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  padding: 3px;
  border-radius: 4px;
  margin: 0 2.4rem;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

const SubmitBtn = styled.button`
  background: #222222;
  border: none;
  height: 100%;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.7rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 10.6rem;
  transition: all 0.3s ease-out;
  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #a1a1a1;
  }
`;