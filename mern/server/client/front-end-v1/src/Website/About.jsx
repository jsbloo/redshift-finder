import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div id="aboutBackground">
            <Container>

                <div class="preloader">
                    <div class="sk-rotating-plane"></div>
                </div>
                <div class="container-fluid">
                    <div class="row grad amimated bounce" id="header">
                        <div class="col-md-12 text-center">
                            <h1 id="titleFont">The All New Powerful Personal Data Search Engine
                            </h1>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div class="row" id="first-information">
                        <div id="bootstrap" class="col-md-4 col-xs-12 text-justify">
                            <h2 class="text-center" id="titleFont">What is RedShift?
                            </h2>
                            <p id="aboutPosition" className='aboutText'>&nbsp;&nbsp;&nbsp;&nbsp;Produced by BAE Digital Intelligence, RedShift is an investigative tool designed to give you a detailed and easy-to-read platform to view personal information about your suspect. Using a MERN stack and connected to AWS DocumentDB we've been able to provide a slick and speedy application giving seemless access to the data you need.
                                <br></br><br></br>
                                RedShift is the most widely used DataSource to enter the private investigation market, with <strong>more than 1,000 companies across 45 countries using it right now!</strong>
                            </p>
                            
                            <blockquote id='aboutImage1'>
                                <img
                                    alt="Company Logo"
                                    src={require("./CompanyLogo.PNG")}
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                                <footer id="titleFont"><br></br> For More details Visit: <a href="https://www.aboutamazon.com/what-we-do/amazon-web-services" title="Main Website">Redshift</a></footer>
                            </blockquote>
                            
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <h2 class="text-center" id="titleFont">Who are BAE ?
                            </h2>
                            <p id="aboutPosition" className='aboutText'
                            
                            > is an international business and technology consulting firm owned by BAE Systems. It specializes in "security and resilience", and in collecting, managing and exploiting information to reveal so-called "actionable intelligence", "threat intelligence", "fraud containment" and customer insight. It also sells clients software for large-scale data exploitation, and analytics for intelligence-grade security and financial crime work. <br /><br></br>The company head office is in Guildford in the United Kingdom, with<strong id="titleFont"> branch offices in 19 countries across Europe, North America, Australia, and Southeast Asia. The business operates in Europe, North America and Asia Pacific.</strong>
                            </p>
                            
                            <blockquote id='aboutImage2'>
                            <img
                                    alt="BAE Logo"
                                    src={require("./BAELogo.png")}
                                    width="200"
                                    height="70"
                                    className="d-inline-block align-top"
                                />
                                <footer id="titleFont"> <br></br> For More Details Visit: <a href="https://www.baesystems.com/en/cybersecurity/home" title="Main Website">BAE Systems</a></footer>
                            </blockquote>
                            
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <h2 class="text-center" id="titleFont">What is React?
                            </h2>
                            <p id="aboutPosition" className='aboutText'>&nbsp;&nbsp;&nbsp;&nbsp;React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. It is maintained by Facebook, Instagram and a community of individual developers and corporations.
                                <br /> &nbsp;&nbsp;&nbsp;&nbsp; As of March 2016, React and React Native are Facebook's top two open-source projects by number of stars on GitHub, <strong>and React is the 6th most starred project of all time on GitHub.</strong>
                            </p>
                            
                            <blockquote id='aboutImage3'>
                            <img
                                    alt="BAE Logo"
                                    src={require("./ReactLogo.png")}
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                                <footer id="titleFont"> <br></br> For More Details Visit: <a href="https://facebook.github.io/react/" title="Main Website">React</a></footer>
                            </blockquote>
                           
                        </div>
                    </div>
                    
                </div>

            </Container>

        </div>
    );
};


export default About;
