import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import Button from "../Button";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    title: string;
    description: string;
    buttonText?: string;
};

const FeatureCard: React.FC<IProps> = ({ src, title, description, buttonText }) => {
    return (
        <div className={styles.featureCard}>
            {src && (
                <div className={styles.featureImageContainer}>
                    <img className={styles.featureImage}
                         src={src}
                         alt={''}
                    />
                </div>
            )}
            <div>
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
        </div>
    );
};

FeatureCard.defaultProps = {
    buttonText: 'More Info',
};

export default FeatureCard;
