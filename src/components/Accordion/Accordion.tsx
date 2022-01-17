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

function AccordionSecret(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {props.onChange(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

export const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

const AccordionTitle = React.memo(AccordionTitleSecret);


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li key={i.value} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
        </ul>
    )}

const AccordionBody = React.memo(AccordionBodySecret);