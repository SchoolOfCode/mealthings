import React from "react"
import { Link, onClick } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Circle from "../components/circle/index"
import BackToTop from "../../src/components/ScrollBar/index"
import CustomizedSteppers from "../CustomizedSteppers/index"
import Popover from "../components/Popover/index"
import scss from "../components/layout.scss"
import ScrollBar from "../components/ScrollBar/index"
import SimpleRating from "../components/Rating/index.js"
import NodeMailer from "../components/NodeMailer/index"
import Vision from "../components/Vision/index"
import Impact from "../components/Impact/impact"
import Reviews from "../components/Reviews/index"

function IndexPage() {
  return (
    <>
      <div className="wrapper">
        <Layout>
          <BackToTop />
          <Circle />
          <div className="item1">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <div className={scss.sectionVision}>
              <a href="/#sectionVision" title="Download">
                Vision
              </a>{" "}
              <Vision />
            </div>
          </div>
          <br></br>

          <div className={scss.sectionDownload}>
            <br></br>
            <a href="/#sectionDownload" title="Download">
              Download
            </a>{" "}
            <br></br>
          </div>
          <Popover />

          <div className={scss.sectionSetup}>
            <br></br>

            <a href="/#sectionSetup" title="Setup">
              Setup
            </a>
          </div>
          <CustomizedSteppers />

          <div className={scss.sectionAboutUs}>
            <a href="/#sectionAboutUs" title="AboutUs">
              About Us
            </a>
            <Impact />
          </div>

          <div className={scss.sectionReviews}>
            <a href="/#sectionReviews" title="Reviews">
              Reviews
            </a>
            <Reviews />
            <SimpleRating />
          </div>
          <br></br>

          <div className={scss.sectionContact}>
            <a href="/#sectionContact" title="Contact">
              Contact
            </a>
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
