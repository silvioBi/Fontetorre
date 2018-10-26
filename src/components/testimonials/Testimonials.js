import React, { Component } from 'react';
import './testimonials.css'

// Boostrap
import {
    Row, Col, Container
} from 'reactstrap';

const Testimonials = ({ testimonials }) => (
    <section class="testimonials text-center bg-light">
        <Container>
            <h2 class="mb-5">What people are saying...</h2>
            <Row>
                {testimonials.map(testimonial => (<Col lg="4">
                    <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img class="img-fluid rounded-circle mb-3" src={testimonial.img} alt=""></img>
                        <h5>{testimonial.name}</h5>
                        <p class="font-weight-light mb-0">{testimonial.cit}</p>
                    </div>
                </Col>))}
            </Row>
        </Container>
    </section>
)
export default Testimonials;