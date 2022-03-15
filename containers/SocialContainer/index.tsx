import React, {HTMLAttributes} from "react";
import FacebookIcon from '/public/img/icon-facebook.svg';
import TwitterIcon from '/public/img/icon-twitter.svg';

const socials = [
    {
        name: 'facebook',
        icon: <FacebookIcon />,
        url: '#',
    },
    {
        name: 'twitter',
        icon: <TwitterIcon />,
        url: '#',
    },
];

const SocialContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {socials?.map(({ name, icon, url }, index) => (
                <li key={index}>
                    <a href={url}
                       target={'_blank'}
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialContainer;
