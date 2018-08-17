import * as React from "react";

import config from "../../../data/SiteConfig";

const Footer = props => {
  return (
    <div className={`w-100 bt b--light-gray pv5`}>
      <div className={`measure-wide center f5 gray`}>
        <div className={`dt`}>
          <div className={`dt-row h2`}>
            Email us at{" "}
            <a className={`link`} href={"mailto:info@usetangle.com"}>
              info@usetangle.com
            </a>
          </div>
          <div className={`dt-row h2`}>
            Tweet us at{" "}
            <a className={`link`} href={"https://twitter.com/usetangle"}>
              @usetangle
            </a>
          </div>
          {/* <div className={`dt-row h2`}>
              On Medium at{" "}
              <a className={`link`} href={"https://medium.com/@tangle"}>
                @tangle
              </a>
            </div> */}
          {/* <div className={`dt-row h2`}>
            Address at{" "}
            <a className={`link`} href={"https://goo.gl/maps/TsdbnBezMZ62"}>
              1111 Kearny St, San Francisco, CA
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
