import * as React from "react";

import { ChevronRight } from "react-feather";

const Alpha = props => {
  return (
    <div className={`dt w-100 ba br4 bg-light-gray b--light-gray pa4`}>
      <div className={`dtc-l dt-row`}>
        <div className={`f3 measure-wide lh-copy pv4`}>
          <div className={`f3 dark-gray fw4 pb4`}>Tangle Update</div>
          <div className={`f4 gray fw2`}>
            After receiving feedback from our alpha users, we have decided to
            shut down the current version Tangle. We are continuing to work hard
            as a team, leveraging our learnings from this initial test. Feel
            free to email us if you have any questions, comments, or want to say
            hello.
          </div>
        </div>
      </div>
      <div className={`dtc-l dt-row center v-mid pa4 tl`}>
        <a href={`mailto:info@usetangle.com`} className={`link`}>
          <div
            className={`dt center bg-accent white bg-accent white br4 pa3 pointer`}
          >
            <div className={`dtc pt1`}>
              <span className={`f4`}>Email us</span>
            </div>
            <div className={`dtc v-mid`}>
              <ChevronRight />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Alpha;
