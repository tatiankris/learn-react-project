import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select stories',
    component: Select,
};

// const callback = action('Value changed');

export const WithValue = () => {

    const [value, setValue] = useState<any>('2');

    return <>
        <Select onChange={setValue}
                   value={value}
                   items={[
                       {title: 'Minsk', value: '1'},
                       {title: 'Moscow', value: '2'},
                       {title: 'Kiev', value: '3'}
                   ]}/>
        </>
}

export const WithoutValue = () => {

    const [value, setValue] = useState<any>(null);
    return <>
        <Select onChange={setValue}
                   value={value}
                   items={[
                       {title: 'Minsk', value: '1'},
                       {title: 'Moscow', value: '2'},
                       {title: 'Kiev', value: '3'}
                   ]}/>
        </>
}