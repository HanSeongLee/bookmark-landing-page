import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const TitleDescriptor: React.FC<IProps> = ({ title, description, className }) => {
    return (
        <div className={cn(styles.container, className)}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default TitleDescriptor;
