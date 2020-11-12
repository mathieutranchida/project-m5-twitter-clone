import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";

import { CurrentUserContext } from "../CurrentUserContext";
import UserProfileFeed from "./UserProfileFeed";
import Loading from "../Loading";

const UserProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
    <Wrapper>
      <Header src={currentUser.bannerSrc} />
      <Body>
        <Avatar src={currentUser.avatarSrc} />
        <DisplayName>{currentUser.displayName}</DisplayName>
        <Handle>@{currentUser.handle}</Handle>
        <Bio>{currentUser.bio}</Bio>
        <DetailsWrapper>
          <Location>
            <FiMapPin /> {currentUser.location}
          </Location>
          <Joined>
            <FiCalendar /> {currentUser.joined}
          </Joined>
        </DetailsWrapper>
        <FollowDetails>
          <Following>
            <strong>{currentUser.numFollowing}</strong> Following
          </Following>
          <Followers>
            <strong>{currentUser.numFollowers}</strong> Followers
          </Followers>
        </FollowDetails>
        <UserProfileFeed />
      </Body>
    </Wrapper>
  ) : (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: none;
  max-width: 800px;
  margin-right: 1px solid grey;
`;

const Header = styled.img`
  width: 100%;
  height: 250px;
`;

const Body = styled.div`
  position: relative;
  top: -110px;
  margin-right: 1px solid grey;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  border: 5px solid white;
`;

const DisplayName = styled.h2`
  margin-bottom: 0px;
  margin-top: 10px;
`;

const Handle = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Bio = styled.div`
  padding: 30px 0px;
`;

const DetailsWrapper = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  display: flex;
`;

const Location = styled.div`
  margin-right: 25px;
`;

const Joined = styled.div``;

const FollowDetails = styled.div`
  margin-top: 7px;
  display: flex;
`;

const Following = styled.div`
  margin-right: 25px;
`;

const Followers = styled.div``;

const LoadingWrapper = styled.div`
  position: relative;
  top: 375px;
  left: 375px;
`;

export default UserProfile;
