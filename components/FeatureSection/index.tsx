import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Container from "../Container";
import TitleDescriptor from "../TitleDescriptor";
import TabContainer from "../../containers/TabContainer";
import FeatureContainer from "../../containers/FeatureContainer";
import ExtensionContainer from "../../containers/ExtensionContainer";

const FeatureSection: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const onTabChange = useCallback((index) => {
        setTabIndex(index);
    }, []);

    return (
        <section className={styles.featureSection}
                 id={'features'}
        >
            <Container>
                <TitleDescriptor className={styles.featuresTitleDescriptor}
                                 title={'Features'}
                                 description={'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'}
                />

                <TabContainer className={styles.tabContainer}
                              tabs={
                                  ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
                              }
                              selected={tabIndex}
                              onTabChange={onTabChange}
                />
            </Container>
            <div className={styles.featureContainerWrapper}>
                <FeatureContainer className={styles.featureContainer}
                                  style={{
                                      '--index': tabIndex,
                                  } as React.CSSProperties}
                />
            </div>
            <Container id={'pricing'}>
                <TitleDescriptor className={styles.downloadTitledDescriptor}
                                 title={'Download the extension'}
                                 description={'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.'}
                />

                <ExtensionContainer className={styles.extensionContainer}/>
            </Container>
        </section>
    );
};

export default FeatureSection;
