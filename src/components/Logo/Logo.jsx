import * as React from "react";

import config from "../../../data/SiteConfig";

const Logo = props => {
  return (
    <div className={``}>
      <img
        src={`https://storage.googleapis.com/usetangle-static-assets/logo.png`}
        style={{ maxHeight: "2.5em" }}
      />
    </div>
  );
};

export default Logo;
