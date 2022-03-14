import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;
