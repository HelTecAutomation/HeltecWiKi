import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { useState } from "react";
import { getLatestWiki } from "@site/src/data/latest-wiki";
import { browseByData, getCategoryTitles } from "@site/src/data/browse-by-data";
import styles from "./index.module.css";
import ImageWidget from "../components/ImageWidget";
import {Skeleton} from "antd"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.heroImage}>
              <img
                  src="/img/logo.png"
                  alt="Platform Overview"
              />
            </div>
          </div>
          <div className="col col--8">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className="hero__description">
              Being a trusted PaaS (Product as a Service) provider since 2014, 
              Heltec Automation has been committed to providing reliable wireless/IoT 
              products. Users can get complete solution by using any of our products.
            </p>
            <p className="hero__description">
              This open-source platform consists of two parts:
            </p>
            <p className="hero__description">
              1. Documents for all Heltec products & services – To make sense about how to getting started and use our products/services correctly.
            </p>
            <p className="hero__description">
              2. Projects/news shared by users or Heltec – share your own projects and gain inspiration from existing ones.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started 🚀
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/news"
              >
                View Docs 📚
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

function BrowseBy() {
  const [activeCategory, setActiveCategory] = useState("open_source_devices");
  const categories = getCategoryTitles();

  const activeCategoryData = browseByData.find(
    (cat) => cat.key === activeCategory
  );

  return (
    <section className={styles.browseBy}>
      <div className="container" key={activeCategory}>
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Browse by</Heading>
          <p>Explore our wikis organized by categories</p>
        </div>
        {/* Category Tabs */}
        <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.categoryTab} ${
                activeCategory === category.key ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Content */}
        <div className={styles.categoryContent}>
          <div className="row">
            {activeCategoryData?.docList.map((doc, idx) => (
              <div key={idx} className="col col--3 " style={{marginBottom:"15px"}}>
                <div className={styles.browseByCard}>
                  <div className={styles.browseByImage}>
                    {/* <ImageWidget src={doc.image}/> */}
                    <ImageWidget className={styles.image_widget} src={doc.image} imageStyle={styles[`browseByImage_${idx}`]}/>
                    {/* <img src={doc.image} alt={doc.title} className={styles[`browseByImage_${idx}`]}/> */}
                    <div className={styles.browseByOverlay}>
                      <Link
                        to={doc.path}
                        className={styles.browseByOverlayLink}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className={styles.browseByContent}>
                    <Heading as="h3">{doc.title}</Heading>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Link */}
        <div className="text--center margin-top--xl">
          <Link
            to={activeCategoryData?.moreLink}
            className="button button--primary button--lg"
          >
            View More {activeCategoryData?.title} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function LatestWiki() {
  const [currentPage, setCurrentPage] = useState(0);
  const wikiData = getLatestWiki(8);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(wikiData.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const currentWikiItems = wikiData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className={styles.latestWiki}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Latest News</Heading>
          <p>Browse our latest technical documentation and tutorials</p>
        </div>

        {/* Wiki Carousel Content */}
        <div className={styles.wikiCarousel}>
          <div className="row">
            {currentWikiItems.map((wiki, idx) => (
              <div key={wiki.id} className="col col--3">
                <div className={styles.wikiCard}>
                  <div className={styles.wikiImage}>
                    <ImageWidget className={styles.image_widget} src={wiki.image}/>
                    
                    {/* <Skeleton.Button className={styles.image_widget} block active /> */}
                    {/* <img src={wiki.image} alt={wiki.title} /> */}
                  </div>
                  <div className={styles.wikiContent}>
                    <span className={styles.wikiCategory}>{wiki.category}</span>
                    <Heading as="h3">{wiki.title}</Heading>
                    <p>{wiki.description}</p>
                    <div className={styles.wikiMeta}>
                      <span className={styles.wikiDate}>{wiki.date}</span>
                      <Link to={wiki.slug} className={styles.wikiLink}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <button
            className={styles.carouselButton}
            onClick={prevPage}
            aria-label="Previous page"
          >
            ‹
          </button>

          {/* Page Indicators */}
          <div className={styles.pageIndicators}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${styles.pageIndicator} ${
                  i === currentPage ? styles.active : ""
                }`}
                onClick={() => goToPage(i)}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className={styles.carouselButton}
            onClick={nextPage}
            aria-label="Next page"
          >
            ›
          </button>
        </div>

        <div className="text--center margin-top--xl">
          <Link to="/news" className="button button--primary button--lg">
            View All Wiki
          </Link>
        </div>
      </div>
    </section>
  );
}

function TechSupport() {

  const navi_list = [
    {
      icon: "/img/main-img/github.png",
      url: "https://github.com/HelTecAutomation"
    },
    {
      icon: "/img/main-img/facebook.png",
      url: "https://www.facebook.com/profile.php?id=61580053774905"
    },
    {
      icon: "/img/main-img/twitter.png",
      url: "https://x.com/Heltec Auto"
    },
    {
      icon: "/img/main-img/youtube.png",
      url: "https://www.youtube.com/@HeltecAutomation"
    },
    {
      icon: "/img/main-img/reddit.png",
      url: "https://www.reddit.com/user/Heltec Automation6/"
    }
  ]

  return (
    <section className={styles.techSupport}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.supportContent}>
              <Heading as="h2">Technical Support & Product Discussion</Heading>
              <p>
                Thank you for choosing our products! We are here to provide you
                with different support to ensure that your experience with our
                products is as smooth as possible. We offer several
                communication channels to cater to different preferences and
                needs.
              </p>
              <div className={styles.supportChannels}>
                <div className={styles.supportChannel}
                onClick={() => window.open('https://discord.com/invite/wt23aDKDUy', '_blank')}
                >
                  <span className={styles.channelIcon}>💬</span>
                  <div>
                    <h4>Discord Community</h4>
                    <p>
                      Join our Discord server to communicate with other
                      developers
                    </p>
                  </div>
                </div>
                <div className={styles.supportChannel}
                 onClick={() => window.open('https://heltec.org/about/contact/', '_blank')}
                 >
                  <span className={styles.channelIcon}>📧</span>
                  <div>
                    <h4>Email Support</h4>
                    <p>Send emails to get professional technical support</p>
                  </div>
                </div>
                <div className={styles.supportChannel}
                onClick={() => window.open('http://community.heltec.cn/', '_blank')}
                >
                  <span className={styles.channelIcon}>🏪</span>
                  <div>
                    <h4>Official Forum</h4>
                    <p>Ask questions and share your projects in the forum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.supportImage}>
              <img
                src="/img/main-img/support.webp"
                alt="Technical Support"
              />
            </div>
            <div className={styles.navi_icon}>
                {
                  navi_list.map((item, index)=>{
                    return <div key={index} className={styles.navi_item} onClick={()=>{ window.open(item.url, "_blank") }}>
                          <img src={item.icon} alt="heltec" className={`styles.navi_icon_${index}`}/>
                    </div>
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function CommunityInvolvement() {
//   return (
//     <section className={styles.community}>
//       <div className="container">
//         <div className="text--center margin-bottom--xl">
//           <Heading as="h2">Join Our Contributor Community</Heading>
//           <p>Become a Wiki contributor and share your knowledge!</p>
//         </div>
//         <div className="row">
//           <div className="col col--4">
//             <div className={styles.contributorCard}>
//               <div className={styles.contributorIcon}>👨‍💻</div>
//               <Heading as="h3">Contributors</Heading>
//               <p>
//                 Fix bugs, update documentation, create tutorials or share your
//                 own IoT/AI projects
//               </p>
//             </div>
//           </div>
//           <div className="col col--4">
//             <div className={styles.contributorCard}>
//               <div className={styles.contributorIcon}>🦅</div>
//               <Heading as="h3">Rangers</Heading>
//               <p>
//                 Become our core contributors, help maintain and expand the Wiki
//                 platform
//               </p>
//             </div>
//           </div>
//           <div className="col col--4">
//             <div className={styles.contributorCard}>
//               <div className={styles.contributorIcon}>🎨</div>
//               <Heading as="h3">Creators & Affiliates</Heading>
//               <p>
//                 Create content, share experiences, grow together with the
//                 community
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="text--center margin-top--xl">
//           <Link
//             to="https://github.com/heltec/heltec-platform"
//             className="button button--secondary button--lg"
//           >
//             Explore Tasks and Collaborate on GitHub
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Heltec Platform Wiki - IoT hardware platform knowledge base, interactive digital replica of the physical world"
    >
      <HomepageHeader />
      <main>
        <BrowseBy />
        <LatestWiki />
        <TechSupport />
        {/* <CommunityInvolvement /> */}
      </main>
    </Layout>
  );
}
