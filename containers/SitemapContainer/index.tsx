import React, {HTMLAttributes} from "react";
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

const SitemapContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {sitemap?.map(({ name, url }, index) => (
                <li key={index}>
                    <Link href={url}>
                        <a>
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SitemapContainer;
