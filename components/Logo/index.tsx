import React from "react";
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href={'/'}>
            <a>
                <img src={'/logo-bookmark.svg'}
                     alt={'bookmark'}
                />
            </a>
        </Link>
    );
};

export default Logo;
