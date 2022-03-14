import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Button from "../Button";

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <div className={styles.heroImageContainer}>
                    <img className={styles.heroImage}
                         src={'/img/illustration-hero.svg'}
                         alt={''}
                    />
                </div>
                <div>
                    <h2 className={styles.title}>
                        A Simple Bookmark Manager
                    </h2>
                    <p className={styles.description}>
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see
                        your sites load instantly. Try it for free.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button>
                            Get it on Chrome
                        </Button>
                        <Button variants={'secondary'}>
                            Get it on Firefox
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
