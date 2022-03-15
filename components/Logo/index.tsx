import React, {HTMLAttributes} from "react";
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLImageElement> {
    src?: string;
};

const Logo: React.FC<IProps> = ({ src, ...props }) => {
    return (
        <Link href={'/'}>
            <a>
                <img src={src}
                     alt={'bookmark'}
                     {...props}
                />
            </a>
        </Link>
    );
};

Logo.defaultProps = {
    src: '/logo-bookmark.svg',
};

export default Logo;
