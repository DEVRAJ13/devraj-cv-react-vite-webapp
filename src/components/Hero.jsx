import React from 'react';
import Container from './Container';
import demoProfile from '../data/demoData';

export default function Hero() {
    return (
        <section className="py-12">
            <Container>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold">{demoProfile.name}</h1>
                        <p className="mt-2 text-indigo-600 font-medium">{demoProfile.title}</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{demoProfile.summary}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {demoProfile.skills.map((s) => (
                                <span key={s} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{s}</span>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-3">
                            <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:opacity-95">View Projects</a>
                            <a href="#contact" className="px-4 py-2 border rounded">Contact</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-lg bg-white shadow dark:bg-gray-800">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Contact</div>
                        <div className="mt-2 text-sm">
                            <div>{demoProfile.email}</div>
                            <div>{demoProfile.phone}</div>
                            <div>{demoProfile.location}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
