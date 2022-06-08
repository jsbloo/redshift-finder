import { Container } from 'react-bootstrap';


const About = () => {
    return (

        <>

            <Container>


                <div class="preloader">
                    <div class="sk-rotating-plane"></div>
                </div>
                <div class="container-fluid">
                    <div class="row grad amimated bounce" id="header">
                        <div class="col-md-12 text-center">
                            <h1>The All New Powerful Personal Data Search Engine
                            </h1>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div class="row" id="first-information">
                        <div id="bootstrap" class="col-md-4 col-xs-12 text-justify">
                            <h2 class="text-center">What is RedShift?
                            </h2>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;Produced by BAE Digital Intelligence, RedShift is an investigative tool designed to give you a detailed and easy-to-read platform to view personal information about your suspect. Using a MERN stack and connected to AWS DocumentDB we've been able to provide a slick and speedy application giving seemless access to the data you need.
                                <br></br><br></br>
                                RedShift is the most widely used DataSource to enter the private investigation market, with <strong>more than 1,000 companies across 45 countries using it right now!</strong>
                            </p>
                            
                            <blockquote>
                                <img
                                    alt="Company Logo"
                                    src={require("./CompanyLogo.PNG")}
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                                <footer><br></br> For More details Visit: <a href="https://www.aboutamazon.com/what-we-do/amazon-web-services" title="Main Website">Redshift</a></footer>
                            </blockquote>
                            
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <h2 class="text-center">Who are BAE Digital Intelligence?
                            </h2>
                            <p> is an international business and technology consulting firm owned by BAE Systems. It specializes in "security and resilience", and in collecting, managing and exploiting information to reveal so-called "actionable intelligence", "threat intelligence", "fraud containment" and customer insight. It also sells clients software for large-scale data exploitation, and analytics for intelligence-grade security and financial crime work. <br /><br></br>The company head office is in Guildford in the United Kingdom, with<strong> branch offices in 19 countries across Europe, North America, Australia, and Southeast Asia. The business operates in Europe, North America and Asia Pacific.</strong>
                            </p>
                            
                            <blockquote>
                            <img
                                    alt="BAE Logo"
                                    src={require("./BAELogo.png")}
                                    width="200"
                                    height="70"
                                    className="d-inline-block align-top"
                                />
                                <footer> <br></br> For More Details Visit: <a href="https://www.baesystems.com/en/cybersecurity/home" title="Main Website">BAE Systems</a></footer>
                            </blockquote>
                            
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <h2 class="text-center">What is React?
                            </h2>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. It is maintained by Facebook, Instagram and a community of individual developers and corporations.
                                <br /> &nbsp;&nbsp;&nbsp;&nbsp; As of March 2016, React and React Native are Facebook's top two open-source projects by number of stars on GitHub, <strong>and React is the 6th most starred project of all time on GitHub.</strong>
                            </p>
                            
                            <blockquote>
                            <img
                                    alt="BAE Logo"
                                    src="data:image/png;base64,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"
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                                <footer> For More Details Visit: <a href="https://facebook.github.io/react/" title="Main Website">React</a></footer>
                            </blockquote>
                           
                        </div>
                    </div>
                    
                   



                </div>

            </Container>



        </>
    );
};




 

export default About;
