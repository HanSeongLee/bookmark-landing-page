import React from "react";
import styles from './style.module.scss';
import SitemapContainer from "../../containers/SitemapContainer";
import SocialContainer from "../../containers/SocialContainer";
import Button from "../Button";
import Container from "../Container";

type IProps = {
    open?: boolean;
};

const Menu: React.FC<IProps> = ({ open }) => {
    if (!open) {
        return (<></>);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <Container className={styles.container}>
                    <div>
                        <SitemapContainer className={styles.sitemapContainer} />
                        <Button variants={'outline'}>
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
