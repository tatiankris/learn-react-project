import React, {useState} from 'react';
import './App.css';

import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);


  return (
      <div className={"App"}>
        <PageTitle title={'This is App component'} />

        <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
        <OnOff on={switchOn} onClick={setSwitchOn}/>

        <UncontrolledAccordion titleValue={"Menu"} />
        {/*<Accordion titleValue={"Menu"} collapsed={collapsedAccordion} onChange={setCollapsedAccordion}*/}
        {/*           items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 12}, {title: 'Katya', value: 3}]}/>*/}

        {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}

        <UncontrolledRating onChange={setRatingValue}/> {ratingValue.toString()}
        <Rating value={ratingValue} onClick={setRatingValue}/>

      </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}



export default App;


