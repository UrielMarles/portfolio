import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'
import styles from './carrusel.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyCarousel = () => {
  return (
    <div className={styles.contenedor}>
    <Carousel className={styles.carrousel}>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://gitlab.com/UrielMarles/keystonedb', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/keystone_banner.png" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>Project-keystone is meant to be a starting help to build a web app using FLASK and NEXT. 
              Every step to get started and every tool included comes with a detailed explanation. There are three separate images, the database, the API and the FRONT and each one comes with it's quirks.
               The API automatically creates tables and default query routes, it's as simple as creating the entity and you'll be all set to go, with fetching routes and token-handling ready. The database
               comes with protocols to adapt CSV sheets and loading the starting data automatically. The front pages come with a guide as well and easy to use form components. <br/> <b>Click the logo and read more on it's GIT page</b>
            </h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://github.com/UrielMarles/VISIBLENT', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/TITULO.png" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>VISIBLENT is a 2D platformer game developed with PYTHON. The guimmick is that you have to beat each level twice, but there is a catch, the second time all the obstacles are invisible and you 
              have to remember all of the map in order to beat it. Every single animation, object, sprite, sound and music was made by myself. The game encourages replayability saving a local leaderboard of scores. 
              It's available for WINDOWS and LINUX <br/> <b>Click the logo and read more on it's GIT page</b>
            </h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.item}>
      <div onClick={() => window.open('https://github.com/UrielMarles/RENT-A-TRONIC', '_blank')} className={`${styles.linkable} image-container`}>
      <Image src="/images/experienceProjects/TITULO.png" alt="LOGO AVE" width={600} height={250} />
      </div>
            <h4>VISIBLENT is a 2D platformer game developed with PYTHON. The guimmick is that you have to beat each level twice, but there is a catch, the second time all the obstacles are invisible and you 
              have to remember all of the map in order to beat it. Every single animation, object, sprite, sound and music was made by myself. The game encourages replayability saving a local leaderboard of scores. 
              It's available for WINDOWS and LINUX <br/> <b>Click the logo and read more on it's GIT page</b>
            </h4>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MyCarousel;
