import React, {InputHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const Input: React.FC<IProps> = ({error, ...props}) => {
    return (
        <div className={cn(styles.inputField, {
            [styles.error]: error,
        })}>
            <div className={styles.inputWrapper}>
                <input className={styles.input}
                       {...props}
                />
            </div>
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default Input;
