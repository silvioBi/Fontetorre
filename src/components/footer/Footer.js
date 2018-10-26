import React, { Component } from 'react';
import './footer.css'

// Icons
import { FaFacebook, FaSync, FaTwitter, FaInstagram } from 'react-icons/fa';

// Boostrap
import {
    Row, Col, Container
} from 'reactstrap';

const Footer = () => (
    <footer class="footer bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a className="footer-link" href="#">About</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a className="footer-link" href="#">Contact</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a className="footer-link" href="#">Terms of Use</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a className="footer-link" href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
                </div>
                <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-3">
                            <a className="footer-icon" href="#">
                                <FaFacebook size="3rem"/>
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a className="footer-icon" href="#">
                                <FaTwitter size="3rem"/>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a className="footer-icon" href="#">
                                <FaInstagram size="3rem"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer;