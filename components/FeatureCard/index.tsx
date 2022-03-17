import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import Button from "../Button";
import Container from "../Container";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    title: string;
    description: string;
    buttonText?: string;
};

const FeatureCard: React.FC<IProps> = ({ src, title, description, buttonText }) => {
    return (
        <div className={styles.featureCard}>
            <Container className={styles.container}>
                {src && (
                    <div className={styles.featureImageContainer}>
                        <img className={styles.featureImage}
                             src={src}
                             alt={''}
                        />
                    </div>
                )}
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <Button>
                        {buttonText}
                    </Button>
                </div>
            </Container>
        </div>
    );
};

FeatureCard.defaultProps = {
    buttonText: 'More Info',
};

export default FeatureCard;
