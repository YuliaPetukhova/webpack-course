import React, {useState} from "react";
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "./pages/about/About";
import cookie from "@/assets/cookie.png";
import gift from "@/assets/gift.jpg";
import Ice from "@/assets/ice.svg";

function TODO(a:number) {
    console.log('functionTODO');
}

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev +1);

    // TODO('27773');

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform.DataTestId'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={cookie} alt="cookie"/>
                <img width={100} height={100} src={gift} alt="gift"/>
            </div>
            <div>
                <Ice style={{color: 'green'}} width={70} height={70}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1>{count}</h1>
            <button className={classes.button} onClick={increment}>increment</button>
            <About />
        </div>
    );
};
