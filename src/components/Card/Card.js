import React, { useEffect, useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import './Card.css'

const Card = () => {
    const[services, setServices]= useState([]);
    useEffect(()=>{
        fetch('./homeServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
   
    return (
        <div className="card-container">
            {
              services.map(service => <HomeServices key={service.id} service={service}></HomeServices>)
            }
        </div>
    );
};

export default Card;
    //