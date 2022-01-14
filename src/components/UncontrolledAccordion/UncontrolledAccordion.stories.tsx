import React from "react";
import { action } from "@storybook/addon-actions";

import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
};

// const callback = action('accordion changing');

export const UncontrolledModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"} />
}