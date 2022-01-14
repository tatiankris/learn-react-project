import React, {ChangeEvent, useRef, useState} from "react";
import { action } from "@storybook/addon-actions";



export default {
    title: 'Input stories',
    // component: UncontrolledOnOff,
};

// const callback = action('accordion changing');

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }

    return <div><input onChange={onChange}/>
            {value}
        </div>
        }

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)}

    return <div>

        <input ref={inputRef} id={'inputId'}/>
        <button onClick={save}>Get value</button>

        actual value: {value}

    </div>
}



export const ControlledInput = () => {

        const [parentValue, setParentValue] = useState<string>('');
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.currentTarget.value;
            setParentValue(val);
        }

        return <input
            value={parentValue}
            onChange={onChange}/>
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState<boolean>(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.checked;
        setParentValue(val);
    }

    return <input
        type={"checkbox"}
        onChange={onChange}
        checked={parentValue}
        />
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string>('');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

export const ControlledInputFixedValue = () => <input value={'it-incubator.by'}/>;