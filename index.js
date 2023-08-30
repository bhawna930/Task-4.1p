import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';


import Headertop from './Headertop';

import Image from './Image';
import Headerlist from './Headerlist';
import CardList from './CardList';

import Headerstaff from './Headerstaff';
import CustomerCardList from './CustomerCardList'
import Email from './Email'
import Footer from './Footer'
import FooterDevLinks from './FooterDevLinks';


ReactDOM.render(
  <div>
    <Headertop /> 
    <Image />
    <Headerlist />
    <CardList />
   
    <Headerstaff />
    <CustomerCardList />
    
    <Email />
    <Footer />
    <FooterDevLinks />
  </div>,
  document.getElementById('root')
);
