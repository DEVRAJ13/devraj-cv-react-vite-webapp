import React from 'react';
import Container from './Container';
import demoProfile from '../data/demoData';

export default function About() {
    return (
        <section id="about" className="py-8">
            <Container>
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <div className="prose dark:prose-invert">{demoProfile.summary}</div>
            </Container>
        </section>
    );
}