import React from 'react';
import Header from '../components/Header';
import PortfolioItem from '../components/PortfolioItem';
import Footer from '../components/Footer';

const Home = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: 'path/to/image1.jpg'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'path/to/image2.jpg'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'path/to/image3.jpg'
        }
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Portfolio</h1>
                <section>
                    {projects.map((project, index) => (
                        <PortfolioItem 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            image={project.image} 
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;