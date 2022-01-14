import React, {useState} from "react";
import { action } from "@storybook/addon-actions";

import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action('accordion changing');
const onClickCallback = action('some item was clicked');

export const MenuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UserUnCollapsed = () => <Accordion titleValue={"User"} collapsed={false} onChange={callback}
                                                items={[ {title: 'Dimych', value: 1}, {title: 'Valera', value: 12}, {title: 'Katya', value: 3} ]}
                                                onClick={onClickCallback} />;

export const UserModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={"User"} collapsed={value} onChange={() => {setValue(!value)}}
        items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 12}, {title: 'Katya', value: 3}]}
                      onClick={(value) => alert(`user with value ${value} should be happy`)}/>
}