import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends HTMLAttributes<HTMLLIElement> {
    active?: boolean;
};

const Tab: React.FC<IProps> = ({ active, children, ...props }) => {
    return (
        <li className={cn(styles.tab, {
            [styles.active]: active
        })}
            {...props}
        >
            {children}
        </li>
    );
};

Tab.defaultProps = {
    active: false,
};

export default Tab;
