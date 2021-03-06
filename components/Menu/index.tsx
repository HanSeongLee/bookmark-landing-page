import React from "react";
import styles from './style.module.scss';
import SitemapContainer from "../../containers/SitemapContainer";
import SocialContainer from "../../containers/SocialContainer";
import Button from "../Button";
import Container from "../Container";
import cn from "classnames";

type IProps = {
    open?: boolean;
    onClose: () => void;
};

const Menu: React.FC<IProps> = ({ open, onClose }) => {
    return (
        <nav className={cn(styles.nav, {
            [styles.open]: open,
        })}>
            <div className={styles.menu}>
                <Container className={styles.container}>
                    <div className={styles.header}>
                        <SitemapContainer className={styles.sitemapContainer}
                                          onLinkClick={_ => onClose()}
                        />
                        <Button variants={'login'}>
                            Login
                        </Button>
                    </div>
                    <SocialContainer className={styles.socialContainer}/>
                </Container>
            </div>
        </nav>
    );
};

export default Menu;
