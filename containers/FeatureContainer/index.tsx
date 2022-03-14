import React, {HTMLAttributes} from "react";
import FeatureCard from "../../components/FeatureCard";

const features = [
    {
        src: '/img/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
        src: '/img/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
        src: '/img/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
];

const FeatureContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            {features?.map((props, index) => (
                <FeatureCard {...props}
                             key={index}
                />
            ))}
        </div>
    );
};

export default FeatureContainer;
