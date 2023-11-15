import React from "react";
import './styles.css';
import { Card } from '@mui/icons-material';

export const Services = () => {
    return (
        <div className="services-con">
            <h1>Our Services</h1>
            <div className="services">
                <div className="service">
                    <h2>Web Development</h2>
                    <p>Our website design and development team specializes in creating responsive, 
                        user-friendly, and visually appealing websites that not 
                        only look great but function flawlessly. We ensure your website is optimized for search engines and designed to convert 
                        visitors into customers.</p>
                    <h3>Features Include:</h3>
                    <ul>
                        <li>Front-end web development</li>
                        <li>Back-end web development</li>
                        <li>Responsive design</li>
                        <li>Landing pages</li>
                        <li>Website maintenance and updates</li>
                    </ul>
                </div>
                <div className="service">
                    <h2>Digital Marketing</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <h3>Features Include:</h3>
                    <ul>
                        <li>Email marketing</li>
                        <li>Search engine optimization (SEO)</li>
                        <li>Social media content creation</li>
                    </ul>
                </div>
                <div className="service">
                    <h2>Graphic Design</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <h3>Features Include:</h3>
                    <ul>
                        <li>Front-end web development</li>
                        <li>Back-end web development</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="service">
                    <h2>Content Marketing</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <h3>Features Include:</h3>
                    <ul>
                        <li>Front-end web development</li>
                        <li>Back-end web development</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}