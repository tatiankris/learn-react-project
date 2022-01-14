import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {props.onChange(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li key={i.value} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
        </ul>
    )}

