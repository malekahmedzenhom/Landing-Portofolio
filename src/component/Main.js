import React from 'react';
// import App from 'App';

export default function Main() {
    return(
        <main className='main'>
            <section className='hero'>
            <h1>Hi, I'm Malek Ahmed Zenhom</h1>
            <p>Frontend Developer | React Enthusiast</p>
            <a href='https://github.com/malekahmedzenhom' 
            target='_blank'
            rel='noreferrer'
            className='cta'
            aria-label='Gethub'
            > View My Work</a>  
            </section>

            <section className='about'>
                <h2>About Me</h2>
                <p>
                    I'm a passionate frontend developer with experience in creating modern, responsive web applications using React. I love turning ideas into reality with clean code.
                </p>
            </section>

            <section id='projects' className='projects'>
                <h2>My Projects</h2>
                <div className='project-list'>
                        <div className='project'>
                            <h3>Weather App</h3>
                            <p>A web app showing real-time weather data using APIs.</p>
                        </div>
                        <div className='project'>
                            <h3>To Do List</h3>
                            <p>A web app showing real-time weather data using APIs.</p>
                        </div>
                        <div className='project'>
                            <h3>Notes App</h3>
                            <p>A React-based app to take and organize notes.</p>
                        </div>
                        <div className='project'>
                            <h3>Calculator</h3>
                            <p>A React-based app to take and organize notes.</p>
                        </div>
                        <div className='project'>
                            <h3>E-commerce Website</h3>
                            <p>A React-based app to take and organize notes.</p>
                        </div>
                </div>
            </section>

            <section className='skills'>
                <h2>Skills</h2>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git</li>
                </ul>
            </section>
            <section className='contact'>
                <h2>Contact Me</h2>
                <p>Email:<a href='mailto:malekzenhom38@gmail.com'>malekzenhom38@gmail.com</a></p>
            </section>
        </main>
    );
}