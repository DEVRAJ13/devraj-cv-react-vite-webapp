import React from 'react';
import Container from './Container';
import demoProfile from '../data/demoData';

export default function Resume() {
    return (
        <section id="resume" className="py-8">
            <Container>
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                <div className="space-y-4">
                    {demoProfile.experience.map((exp) => (
                        <div key={exp.company} className="p-4 border rounded bg-white dark:bg-gray-800">
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold">{exp.role}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</div>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</div>
                            </div>
                            <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                                {exp.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}