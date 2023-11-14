import React from "react";
import './styles.css';

export const Footer = () => {
    return (
        <div className="footer-con">
            <div className="footer-section about">
                <h2>About Us</h2>
                <p>We are a team dedicated to delivering top-notch digital marketing services to help businesses grow online.</p>
            </div>
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-section social-media">
                <h2>Follow Us</h2>
                {/* Icons or links to social media */}
            </div>
        </div>
    );
}
