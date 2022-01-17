import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}



function UncontrolledAccordionSecret(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, { collapsed: false });
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret);



type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return ( 
        <h3 onClick={() => { props.onClick() }}>{props.title}</h3>
    );
}
const AccordionTitle = React.memo(AccordionTitleSecret);



function AccordionBodySecret() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )}
const AccordionBody = React.memo(AccordionBodySecret);
