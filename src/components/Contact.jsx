import React from 'react';
import Container from './Container';
import demoProfile from '../data/demoData';

export default function Contact() {
    return (
        <section id="contact" className="py-8">
            <Container>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <div className="text-gray-700 dark:text-gray-300">Email: {demoProfile.email}</div>
            </Container>
        </section>
    );
}