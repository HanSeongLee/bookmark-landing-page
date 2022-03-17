import React, {HTMLAttributes, useCallback} from "react";
import Link from 'next/link';

const sitemap = [
    {
        name: 'features',
        url: '#',
    },
    {
        name: 'pricing',
        url: '#',
    },
    {
        name: 'contact',
        url: '#',
    },
];

interface IProps extends HTMLAttributes<HTMLUListElement> {
    onLinkClick?: (name: string) => void;
};

const SitemapContainer: React.FC<IProps> = ({ onLinkClick, ...props }) => {
    const onClick = useCallback((e, name:string) => {
        e.preventDefault();
        const element = window.document.getElementById(name);
        if (!element) {
            return;
        }
        if (onLinkClick) {
            onLinkClick(name);
        }
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }, [onLinkClick]);

    return (
        <ul {...props}>
            {sitemap?.map(({ name, url }, index) => (
                <li key={index}>
                    <Link href={url}>
                        <a onClick={e => onClick(e, name)}>
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SitemapContainer;
