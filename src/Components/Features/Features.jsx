import React from 'react'
import p2img from '../../assests/graph_img_p2.png'
import { Text } from "@nextui-org/react";
import {  Link } from "react-router-dom";
import Dataquality from '../../assests/features/1.png'
import Modelbuilder from '../../assests/features/2.png'
import Salceforcast from '../../assests/features/3.png'
import algoanalyzer from '../../assests/features/4.png'


export const Features = () => {
  return (
    <div className='features__parent'>
        <div className="p2__img">
            <img className='graph_img' src={p2img} alt="" />
            
        </div>
        <div className="p2__head">
        <Text
          h1
          size={60}
          className="p2__head_dec"
          css={{
            textGradient: "45deg, $blue600 -20%, $black 80%",
          }}
          weight="bold"
        >
          Tools that we offer..
        </Text>
        </div>
        <div className="feature__container">
            <div className="feature1 item">
                <img className='feature__img__src' src={Dataquality} alt="" />
                <h2>Data quality reporter</h2>
                <Link to='/login' > <button className="prediction-btn">Get Started</button></Link>
            </div>
            <div className="feature2 item">
            <img className='feature__img__src' src={Modelbuilder} alt="" />
                <h2>Model Builder</h2>
                <Link to='/login' > <button className="prediction-btn">Get Started</button></Link>
            </div>
            <div className="feature3 item">
            <img className='feature__img__src' src={Salceforcast} alt="" />
                <h2>Sales Forecasting</h2>
                <Link to='/login' > <button className="prediction-btn">Get Started</button></Link>
            </div>
            <div className="feature4 item">
            <img className='feature__img__src' src={algoanalyzer} alt="" />
                <h2>Algorithm Analyze</h2>
                <Link to='/login' > <button className="prediction-btn">Get Started</button></Link>
            </div>

        </div>
    </div>
  )
}
