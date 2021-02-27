import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>ananewproject</title>
        <meta property="og:title" content="ananewproject" />
      </Helmet>
      <div className={styles.container01}></div>
      <img
        src="/playground_assets/image%201-1100h.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <h2 className={` ${projectStyles.thqHeading2} ${styles.text} `}>Your data has a story</h2>
      <img
        src="/playground_assets/image%202-1100h.png"
        className={` ${projectStyles.thqImage} ${styles.image1} `}
      />
      <h2 className={` ${projectStyles.thqHeading2} ${styles.text01} `}>
        Some of your Data-driven services
        <br />
      </h2>
      <div className={styles.container02}>
        <div className={styles.container03}>
          <img
            src="/playground_assets/toggle.svg"
            className={` ${projectStyles.thqImage} ${styles.image2} `}
          />
          <div className={styles.container04}>
            <h2 className={` ${projectStyles.thqHeading2} ${styles.text02} `}>
              Data Science consulting
            </h2>
          </div>
          <div className={styles.container05}>
            <p className={styles.text03}>
              Your data has a story to tell. Have you been storing all your data? Let your data help
              you make the right decisions. We help enterprise to evolve into a data driven
              enterprise. With the right techniques of ML and AI, your data will lead your
              company&apos;s growth.
            </p>
          </div>
        </div>
        <div className={styles.container06}>
          <img
            src="/playground_assets/robot.svg"
            className={` ${projectStyles.thqImage} ${styles.image3} `}
          />
          <div className={styles.container07}>
            <h2 className={` ${projectStyles.thqHeading2} ${styles.text04} `}>
              AI PRODUCT DEVELOPMENT
              <br />
            </h2>
          </div>
          <div className={styles.container08}>
            <p className={styles.text05}>
              If the source of your data is standardized, automated real time predictive analytics
              will add a second wing to your stake holders. We can help you map the entire flow from
              collection of data to final predictive model.
            </p>
          </div>
        </div>
        <div className={styles.container09}>
          <img
            src="/playground_assets/medal%201-1100h.png"
            className={` ${projectStyles.thqImage} ${styles.image4} `}
          />
          <div className={styles.container10}>
            <h2 className={` ${projectStyles.thqHeading2} ${styles.text06} `}>
              Training and certification
              <br />
            </h2>
          </div>
          <div className={styles.container11}>
            <p className={styles.text07}>
              A well trained work force is the greatest asset for a company. We train our students
              with real world projects so that our clients are well placed to maximize on the
              opportunities in the AI dominated economy.
            </p>
          </div>
        </div>
      </div>
      <h2 className={` ${projectStyles.thqHeading2} ${styles.text08} `}>
        Android Application Penetration Testing
        <br />
      </h2>
      <div className={styles.container12}>
        <div className={styles.container13}>
          <img
            src="/playground_assets/image%207-1100h.png"
            className={` ${projectStyles.thqImage} ${styles.image5} `}
          />
          <h3 className={` ${projectStyles.thqHeading3} ${styles.text09} `}>
            Diploma in Machine Learning &amp; AI
          </h3>
          <p className={styles.text10}>
            Machine Learning is rapidly developing field. Over 50,000 jobs are vacant in India
          </p>
          <button className={` ${projectStyles.thqButton} ${styles.button} `}>Read More</button>
        </div>
        <div className={styles.container14}>
          <img
            src="/playground_assets/image%208-1100h.png"
            className={` ${projectStyles.thqImage} ${styles.image6} `}
          />
          <h3 className={` ${projectStyles.thqHeading3} ${styles.text11} `}>
            Cloud Security Practitioner
            <br />
          </h3>
          <p className={styles.text12}>
            Machine Learning is rapidly developing field. Over 50,000 jobs are vacant in India
          </p>
          <button className={` ${projectStyles.thqButton} ${styles.button1} `}>Read More</button>
        </div>
        <div className={styles.container15}>
          <img
            src="/playground_assets/image%204-1100h.png"
            className={` ${projectStyles.thqImage} ${styles.image7} `}
          />
          <h3 className={` ${projectStyles.thqHeading3} ${styles.text13} `}>
            Diploma in Machine Learning &amp; AI
          </h3>
          <p className={styles.text14}>
            Machine Learning is rapidly developing field. Over 50,000 jobs are vacant in India
          </p>
          <button className={` ${projectStyles.thqButton} ${styles.button2} `}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Page
