import React, {HTMLAttributes, useCallback, useState} from "react";
import styles from './style.module.scss';
import cn from "classnames";
import ArrowIcon from '/public/img/icon-arrow.svg';

interface IProps extends HTMLAttributes<HTMLLIElement> {
    question: string;
    answer: string;
};

const FAQItem: React.FC<IProps> = ({ question, answer, ...props }) => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <li className={cn(styles.faq, {
            [styles.open]: open,
        })}
             {...props}
        >
            <div className={styles.question}
                 onClick={onClick}
            >
                <div>{question}</div>
                <ArrowIcon />
            </div>
            <p className={styles.answer}>
                {answer}
            </p>
        </li>
    );
};

export default FAQItem;
