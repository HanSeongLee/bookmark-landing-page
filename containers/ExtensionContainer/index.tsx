import React, {HTMLAttributes} from "react";
import ExtensionCard from "../../components/ExtensionCard";

const extensions = [
    {
        src: '/img/logo-chrome.svg',
        title: 'Add to Chrome',
        description: 'Minimum version 62',
    },
    {
        src: '/img/logo-firefox.svg',
        title: 'Add to Firefox',
        description: 'Minimum version 55',
    },
    {
        src: '/img/logo-opera.svg',
        title: 'Add to Opera',
        description: 'Minimum version 46',
    },
];

const ExtensionContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            {extensions?.map((props, index) => (
                <ExtensionCard {...props}
                               key={index}
                />
            ))}
        </div>
    );
};

export default ExtensionContainer;
