import React, {HTMLAttributes} from "react";
import Tab from "../../components/Tab";

interface IProps extends HTMLAttributes<HTMLUListElement> {
    tabs?: string[];
    selected?: number;
    onTabChange?: (index: number) => void;
};

const TabContainer: React.FC<IProps> = ({ tabs, onTabChange, selected, ...props }) => {
    return (
        <ul {...props}>
            {tabs?.map((tab, index) => (
                <Tab onClick={_ => {
                    if (onTabChange) {
                        onTabChange(index);
                    }
                }}
                     active={selected === index}
                >
                    {tab}
                </Tab>
            ))}
        </ul>
    );
};

TabContainer.defaultProps = {
    selected: 0,
}

export default TabContainer;
