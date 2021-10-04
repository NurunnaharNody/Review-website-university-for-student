import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
           <Header></Header>
           <div className="about-title">
               <h1>Our courses is designed to bridge the gaps in physical and online development opportunities regarding quality and personal satisfaction.</h1>
           </div>
           <div className="about-container">
               <h2>Online Teaching Courses and Certification.</h2>
               <p>At Alison, we’re so passionate about education that we seek out courses that can be offered to our learners for free, with no strings attached. 
                   This passion means we also appreciate the work done by educators and teachers, because we see the impact this vocation has on scores of people everyday.<br/>
If teaching and education is your calling, our free courses are ideal because they are self-paced and don’t require any previous experience or knowledge. 
If you are already a qualified teacher, you can take courses to help prevent bullying, work better with diverse communities or manage pupil-parent separation at school. 
If you want to get into another field in education, try a free course in teaching physical education or how to train other educators. <br/>

 Working in education requires lifelong education itself as you keep up to date with new methodologies and take on unforeseen challenges like teaching remotely. 
 Taking a free course may help you specialize or move to a different school district - browse our list to see your options!</p>
           </div>

           <Footer></Footer>
        </div>
    );
};

export default About;