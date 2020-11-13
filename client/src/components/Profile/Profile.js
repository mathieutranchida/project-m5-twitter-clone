import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { useParams } from "react-router";
import ProfileFeed from "./ProfileFeed";
import Loading from "../Loading";
import COLORS from "../../constants";

const Profile = () => {
  const [getProfile, setGetProfile] = React.useState(null);

  let { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGetProfile(data.profile);
      });
  }, []);

  return getProfile ? (
    <Wrapper>
      <Header src={getProfile.bannerSrc} />
      <Body>
        <Avatar src={getProfile.avatarSrc} />
        <DisplayName>{getProfile.displayName}</DisplayName>
        <HandleWrapper>
          <Handle>@{getProfile.handle}</Handle>
          <FollowsYou>Follows you</FollowsYou>
          <FollowingBtn>Following</FollowingBtn>
        </HandleWrapper>
        <Bio>{getProfile.bio}</Bio>
        <DetailsWrapper>
          <Location>
            <FiMapPin /> {getProfile.location}
          </Location>
          <Joined>
            <FiCalendar /> {getProfile.joined}
          </Joined>
        </DetailsWrapper>
        <FollowDetails>
          <Following>
            <strong>{getProfile.numFollowing}</strong> Following
          </Following>
          <Followers>
            <strong>{getProfile.numFollowers}</strong> Followers
          </Followers>
        </FollowDetails>
      </Body>
      <SecondaryBody>
        <TabsSelectionWrapper>
          <TabSelected>Tweets</TabSelected>
          <Tab>Media</Tab>
          <Tab>Likes</Tab>
        </TabsSelectionWrapper>
        <ProfileFeedWrapper>
          <ProfileFeed />
        </ProfileFeedWrapper>
      </SecondaryBody>
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
  border: 1px solid grey;
`;

const SecondaryBody = styled.div`
  position: relative;
  top: -110px;
`;

const TabsSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Tab = styled.div`
  padding: 20px 0px;
  width: 266px;
  text-align: center;
`;

const TabSelected = styled.div`
  border-bottom: 3px purple solid;
  color: purple;
  padding: 20px 0px;
  width: 266px;
  text-align: center;
`;

const FollowingBtn = styled.button`
  font-size: 15pt;
  color: white;
  padding: 15px 20px;
  font-weight: bold;
  border-radius: 500px;
  border: none;
  background-color: ${COLORS.primary};
  position: relative;
  top: -130px;
  left: 440px;
  cursor: pointer;
`;

const Header = styled.img`
  width: 100%;
  height: 250px;
`;

const Body = styled.div`
  position: relative;
  top: -110px;
  padding-left: 15px;
  padding-bottom: 5px;
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

const ProfileFeedWrapper = styled.div``;

const HandleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FollowsYou = styled.div`
  margin-left: 10px;
  background-color: grey;
  font-style: italic;
  color: white;
  font-size: 10pt;
  padding: 1px 5px;
  border-radius: 7px;
`;

const LoadingWrapper = styled.div`
  position: relative;
  top: 375px;
  left: 375px;
`;

export default Profile;
