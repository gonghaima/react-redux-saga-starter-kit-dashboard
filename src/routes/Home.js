import React from "react";

import { HomeWrapper, Screen } from "../modules/styled/Home";
import Header from "../components/header/index";
import Product from "../containers/Product";
import TitleHeader from "../containers/SubHeader";
import Navigation from "../containers/Navigation";

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Header />
    <TitleHeader />
    <HomeWrapper>
      <Navigation />
      <Product />
    </HomeWrapper>
  </Screen>
);
