import React, {useCallback, useEffect, useState} from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Menu from "../Menu";
import cn from "classnames";

const Header: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuButtonClick = useCallback(() => {
        const body = window.document.getElementsByTagName('html')[0];
        setOpenMenu(!openMenu);
        if (!openMenu) {
            body.classList.add('overlay');
        } else {
            body.classList.remove('overlay');
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [openMenu]);

    const onClose = useCallback(() => {
        setOpenMenu(false);
    }, []);

    useEffect(() => {
        const body = window.document.getElementsByTagName('html')[0];
        if (openMenu) {
            body.classList.add('overlay');
        } else {
            body.classList.remove('overlay');
        }
    }, [openMenu]);

    return (
        <header className={cn(styles.header, {
            [styles.open]: openMenu,
        })}>
            <Container className={styles.container}>
                <div className={styles.top}>
                    <h1>
                        <Logo src={openMenu ? '/logo-white.svg' : undefined}/>
                    </h1>
                    <button className={styles.menuButton}
                            type={'button'}
                            onClick={onMenuButtonClick}
                    >
                        <img src={openMenu ? '/img/icon-close.svg' : '/img/icon-hamburger.svg'}
                             alt={'menu'}
                        />
                    </button>
                </div>
                <Menu open={openMenu}
                      onClose={onClose}
                />
            </Container>
        </header>
    );
};

export default Header;
