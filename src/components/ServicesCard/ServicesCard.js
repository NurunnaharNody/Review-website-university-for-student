import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './ServiceCard.css'

const ServicesCard = () => {
    const[servicesCard, setServicesCard]= useState([]);
    useEffect(()=>{
        fetch('./Services.json')
        .then(res => res.json())
        .then(data => setServicesCard(data))
    },[]);
    return (
        <div>
            <Header></Header>
            <div class="serviceCard-container">
            {
              servicesCard.map(serviceCard => <Services serviceCard ={serviceCard}></Services>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};
export default ServicesCard;