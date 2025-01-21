import { useState } from 'react';
import Highpur from './highpur';
import Lpheader from './Lpheader';
import Purpoint from './point';
import Purcheck from './purcheck';
import Purmet from './Purmet';
import LPcol from './point';
import "../reset.css"
import "./LP.css"
import Col3 from './col3';
import Corppur from './corppur';
import Question from './question';
import Purstory from './purstory';
import { Lpfooter } from './Lpfooter';
import StoreIntroduction from './Lpfooter';


function LP() {
    return (
        <div className='LP'>
            <Lpheader />
            <Highpur />
            <Purcheck />
            <LPcol />
            <Purmet />
            <Purstory />
            <Corppur />
            <Col3 />
            <Question />
            <StoreIntroduction />
            <Lpfooter />
        </div>
    )
}
export default LP;
