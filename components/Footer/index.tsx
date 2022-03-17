import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import SitemapContainer from "../../containers/SitemapContainer";
import Logo from "../Logo";
import SocialContainer from "../../containers/SocialContainer";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo className={styles.logo}
                      src={'/footer-logo.svg'}
                />

                <SitemapContainer className={styles.sitemapContainer} />

                <SocialContainer className={styles.socialContainer} />
            </Container>
        </footer>
    );
};

export default Footer;
