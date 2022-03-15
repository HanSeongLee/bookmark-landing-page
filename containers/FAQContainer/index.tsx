import React, {HTMLAttributes} from "react";
import FAQItem from "../../components/FAQItem";

const faq = [
    {
        question: 'What is Bookmark?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,\n' +
            'ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,\n' +
            'ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,\n' +
            'ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,\n' +
            'ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
];

const FAQContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {faq?.map((props, index) => (
                <FAQItem {...props}
                         key={index}
                />
            ))}
        </ul>
    );
};

export default FAQContainer;
