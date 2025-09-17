import React from 'react';
import Container from './Container';
import demoProfile from '../data/demoData';

export default function Projects() {
    return (
        <section id="projects" className="py-8">
            <Container>
                <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {demoProfile.projects.map((p) => (
                        <div key={p.title} className="p-4 border rounded bg-white dark:bg-gray-800 hover:scale-[1.01] transition">
                            <div className="font-semibold">{p.title}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</div>
                            <a href={p.link} className="text-sm mt-2 inline-block underline">View</a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}