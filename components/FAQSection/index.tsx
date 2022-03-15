import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import TitleDescriptor from "../TitleDescriptor";
import Button from "../Button";
import FAQContainer from "../../containers/FAQContainer";

const FAQSection: React.FC = () => {
    return (
        <section className={styles.faqSection}>
            <Container>
                <TitleDescriptor className={styles.faqTitleDescriptor}
                                 title={'Frequently Asked Questions'}
                                 description={'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'}
                />

                <FAQContainer className={styles.faqContainer} />
                <div className={styles.buttonContainer}>
                    <Button>
                        More Info
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default FAQSection;
