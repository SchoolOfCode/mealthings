import React from "react"
import { Link, onClick } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Circle from "../components/circle/index"
import BackToTop from "../../src/components/ScrollBar/index"
import CustomizedSteppers from "../components/CustomizedSteppers/index"
import Popover from "../components/Popover/index"
import scss from "../components/layout.scss"
import ScrollBar from "../components/ScrollBar/index"
import SimpleRating from "../components/Rating/index.js"
import NodeMailer from "../components/NodeMailer/index"
import Vision from "../components/Vision/index"
import Impact from "../components/Impact/impact"
import Download from "../components/Download"
import Review from "../components/Review/index"
import mealthings3 from "./mealthings3.png"
import appstore from "./appstore.png"

function IndexPage() {
  return (
    <>
      <div className="wrapper">
        <Layout>
          <BackToTop />
          <Circle />
          <div className="item1">
            <br></br>
            <img src={mealthings3} />

            <div className={scss.sectionDownload} id="download-id">
              <br></br>
            </div>
            {/* <Popover /> */}
            <img size="em" src={appstore} />
            <br></br>
            <br></br>

            <Download />

            <br></br>
            <br></br>
            <div className={scss.sectionVision} id="vision-id">
              <h3>Vision</h3>
              <Vision />
            </div>
          </div>

          <div className={scss.sectionSetup} id="setup-id"></div>
          {/* <CustomizedSteppers /> */}

          <div className={scss.sectionAboutUs} id="about-us-id">
            <br></br>
            <br></br>

            <h3>Impact</h3>
            <br></br>
            <br></br>

            <Impact />
          </div>

          <div className={scss.sectionReviews} id="reviews-id">
            <br></br>
            <br></br>
            <h3>Reviews</h3>
            <br></br>
            <br></br>
            <Review />

            {/* <SimpleRating /> */}
          </div>
          <br></br>

          <div className={scss.sectionContact} id="contact-id">
            <br></br>
            <h3>Contact</h3>
            <br></br>

            <NodeMailer />
          </div>
          <br></br>
          <br></br>
        </Layout>
      </div>
    </>
  )
}

export default IndexPage

//Alternative pages if required later:
{
  /* <Link to="/page-2/">Recharge</Link>
<br></br>
<Link to="/page-3/">Connect</Link>
<br></br>
<Link to="/page-4/">Exercise</Link>
<br></br>
<Link to="/page-5/">Refuel</Link>
<br></br>
<Link to="/page-6/">Cleanse</Link>
<br></br>
<Link to="/page-7/">Alfresco</Link>
<br></br>
<Link to="/page-8/">Relax</Link> */
}
