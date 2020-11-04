

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddrModal from '../components/AddrModal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slide from '../components/Slide';

import Slider from '../components/Slider';



const PtHome = () => {
    
    return (
        <div>
            
                  <AddrModal/>
                    <Slider/>
                  <Footer/>

              </div>
    )
}

export default PtHome;