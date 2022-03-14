import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import Button from "../Button";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    title: string;
    description: string;
    buttonText?: string;
}

const ExtensionCard: React.FC<IProps> = ({ src, title, description, buttonText, ...props }) => {
    return (
        <div className={styles.extensionCard}
             {...props}
        >
            <div className={styles.body}>
                <img className={styles.image}
                     src={src}
                     alt={''}
                />
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
            <img className={styles.dots}
                 src={'/img/bg-dots.svg'}
                 alt={''}
            />
            <div className={styles.footer}>
                <Button>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

ExtensionCard.defaultProps = {
    buttonText: 'Add & Install Extension',
};

export default ExtensionCard;
