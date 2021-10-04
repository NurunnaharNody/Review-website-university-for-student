import React from 'react';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="header">
            <Header></Header>
            <div className="header-section">
            <div className="header-title">
                <h4> UNIVERSITY FOR STUDENT </h4>
               <h3>EARN AN Excellent DEGREE FOR FREE!</h3>
               <p>Our mission is to open our gates for higher education 
                   with a non-profit, tuition-free, 100% online university.
                   UFS is waiving fees for qualified applicants:
                    Apply Today to earn a degree for minimum cost!</p>
            </div>
            <div className="header-img">
               <img src="https://i.ibb.co/FnkQ6Cw/students-youth-adult-reading-education-knowledge-concept-67246912.jpg" alt="" />
           </div>
           </div>
           <div>
               <Card></Card>
           </div>
           <Footer></Footer>
    </div>
    );
};

export default Home;