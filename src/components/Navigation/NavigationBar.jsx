import * as React from "react";
import { navigateTo } from "gatsby-link";

import config from "../../../data/SiteConfig";

import Logo from "../../components/Logo/Logo";

const NavigationBar = props => {
  return (
    <div>
      <div className={`w-100`}>
        <div
          className={`fl bb b--accent bw1 pointer`}
          onClick={() => [navigateTo("/")]}
        >
          <Logo />
        </div>
        <div className={`dt fr mid-gray f5 fw2 br4 shadow-1 pa3`}>
          <div
            className={`dtc v-btm pointer pl2 pr4`}
            onClick={() => [navigateTo("/blog")]}
          >
            blog
          </div>
          <div
            className={`dtc v-btm pointer pr2`}
            onClick={() => [navigateTo("/team")]}
          >
            team
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
