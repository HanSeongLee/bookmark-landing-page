import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import ContactContainer from "../../containers/ContactContainer";

const ContactSection: React.FC = () => {
    return (
        <section className={styles.contactSection}
                 id={'contact'}
        >
            <Container>
                <div className={styles.subtitle}>
                    35,000+ ALREADY JOINED
                </div>
                <h2 className={styles.title}>
                    Stay up-to-date with what
                    we’re doing
                </h2>
                <ContactContainer className={styles.contactContainer} />
            </Container>
        </section>
    );
};

export default ContactSection;
