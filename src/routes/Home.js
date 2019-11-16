import React from "react";

import { HomeWrapper, Screen } from "../modules/styled/Home";
import Product from "../containers/Product";
import Header from "../containers/Header";
import Navigation from "../containers/Navigation";

export const Home = () => (
  <Screen key="Screen" data-testid="ScreenWrapper">
    <Header />
    <HomeWrapper>
      <Navigation />
      <Product />
    </HomeWrapper>
  </Screen>
);
