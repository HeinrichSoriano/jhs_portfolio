import React, {useState, useEffect} from "react";
import styles from './home.css';

import astronaut_floating from '../../images/home/astronaut_floating.png';

const titles = ['FULL STACK DEVELOPER', 'TEAM LEADER'];

const Home = () => {
    useEffect(() => {
        console.log('NAG REMOUNT BAKO');
    })
    return (<div className={'home_container'}>
        <Banner/>
    </div>)
}

export default Home;


const Banner = () => 
{
    const [title, set_title] = useState('');

    let TypingInterval = null;

    useEffect(() => {
        setTypingTitle();

        return () => clearInterval(TypingInterval);
    }, []);

    const setTypingTitle = (arr_index = 0) => {
        let value = titles[arr_index];
        let index = 0;
        TypingInterval = setInterval(() => {
            set_title(value.slice(0, index));
            index++;
            if(index > value.length) {
                clearInterval(TypingInterval);
                setUntypeTitle(arr_index);
            }
        }, 100);
    }

    const setUntypeTitle = (arr_index = 0) => 
    {
        let value = titles[arr_index];
        setTimeout(() => {
            TypingInterval = setInterval(() => {
                value = value.slice(0, -1);
                set_title(value);
                if(!value)
                {
                    clearInterval(TypingInterval);
                    arr_index++;
                    let next_word_index = (titles[arr_index] != undefined) ? arr_index : 0;
                    setTypingTitle(next_word_index);
                }
            }, 100)
        }, 2000);
    }

    return (<div className={'banner_container'}>
        <div className={'banner_left'}>
            <div>
                <div className={'banner_title1'}>I AM</div>
                <div className={'banner_title2'}>HEINRICH SORIANO</div>
                <div className={'banner_title3'}>{title}<span className={'pulsing_cursor'}>|</span></div>
                <div className={'banner_title3'}>Jack of all Trades</div>
            </div>
        </div>
        <div className={'banner_right'}>
            <img src={astronaut_floating}/>
        </div>
    </div>)
}