import React from "react";
import { action } from "@storybook/addon-actions";

import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
};

const callback = action('accordion changing');

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />;
export const DefaultInputValue = () => <input defaultValue={"yo"} />;