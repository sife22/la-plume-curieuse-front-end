import React from 'react';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div class="main-content">
            <header class="mobile-nav pt-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <a href="index.html">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <button class="nav-toggle bg-transparent border text-white">
                                <span class="fas fa-bars"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div class="nav-toggle-overlay"></div>
            <div class="container py-4 my-5">
                
                <div class="row">
                    <div class="col-md-9">
                        <img class="img-fluid" src="images/author.JPG" alt="" width="100%" height="100px" />
                        <h1 class="text-white add-letter-space my-4">Hi,I’m Sif eddine HADI, Software Developer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit
                            volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsum. Sagittis sed feugiat
                            blandit adipiscing mauris. Facilisis dictum in tellus ac turpis. Pretium, facilisis turpis
                            duis pulvinar blandit est. Dolor accumsan pellentesque ullamcorper volutpat urna arcu. Nisi
                            nulla et mauris et, ultricies odio semper gravida. Justo, lorem leo ullamcorper leo ornare
                            phasellus. Dolor tristique sem quam eget tempor aliquet sem amet, eget. Vitae id mattis
                            consectetur gravida sit lorem donec. Phasellus enim sodales congue varius arcu et, pulvinar
                            ultrices. Faucibus nulla massa erat ut. Egestas integer pharetra proin pellentesque tellus
                            quis pulvinar mauris. Sed quisque pellentesque platea vel. Proin felis tellus nunc risus
                            tortor, nibh. Vulputate mauris fermentum tincidunt diam sed. Vel interdum nisl, pellentesque
                            ante consectetur. At praesent lorem placerat nibh nunc. Massa lectus id et amet quam
                            venenatis, in mus. Arcu cras risus est porttitor tincidunt posuere feugiat. Sem velit ornare
                            id duis Amet nullam eget mus diam nisl, vel. Sed at id quam bibendum lacus felis. Porta
                            arcu, nunc ultricies</p>
                        <h2 class="text-white add-letter-space my-5">Title 1</h2>
                        <ul class="list-unstyled">
                            <li class="bullet-list-item mb-4">
                                <h3 class="text-white mb-3 add-letter-space">Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie
                                    urna eu tortor erat.</p>
                            </li>
                            <li class="bullet-list-item mb-4">
                                <h3 class="text-white mb-3 add-letter-space">Title
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie
                                    urna eu tortor erat.</p>
                            </li>
                            <li class="bullet-list-item mb-4">
                                <h3 class="text-white mb-3 add-letter-space">Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros,
                                    ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa
                                    gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in
                                    curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie
                                    urna eu tortor erat.</p>
                            </li>
                            <li class="bullet-list-item">
                                <h3 class="text-white mb-3 add-letter-space">Title 2</h3>
                                <ol class="pl-0">
                                    <li class="mb-2">Title</li>
                                    <li class="mb-2">Title</li>
                                    <li class="mb-2">Title</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default About