import React from 'react';

export default function Footer() {
    return(
        <footer className='footer'>
            <p>© 2025 Malek Ahmed Zenhom. All Rights Reserved.</p>
            
            <div className='social-links'>
                <a href='https://github.com/malekahmedzenhom' 
                target='_blank' 
                rel='noreferrer' 
                aria-label='Github'
                >
                <i class="fa-brands fa-github"></i>
                </a>

                <a href='https://www.linkedin.com/feed/'
                 target='_blank' 
                 rel='noreferrer' 
                 aria-label='Linkedin'
                 >
                <i class="fa-brands fa-linkedin"></i>
                </a>

               <a href="https://wa.me/201121071587" 
               target="_blank" 
               rel="noreferrer" 
               aria-label='Whatsapp'
               >
                     <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a
                href="mailto:malekZenhom83@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label='Email'
                >
                <i className="fa-solid fa-envelope"></i>
                </a>
                 
                </div>
            </footer>
    );
}
