import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetComponent/TweetDetails";
import UserProfile from "./components/Profile/UserProfile";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path="/treasurymog">
              <UserProfile />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  margin-left: 250px;
`;

export default App;
