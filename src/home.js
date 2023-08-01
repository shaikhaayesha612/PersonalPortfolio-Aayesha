import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () =>{

    // Function will execute on click of button
    const downloadPdf = () => {
        // using Java Script method to get PDF file
        fetch('Aayesha Shaikh-Frontend Developer-CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Aayesha Shaikh-Frontend Developer-CV.pdf';
                alink.click();
            })
        })
    }
    
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();     // prevents the page from reloading when you hit “Send”
        emailjs.sendForm('service_18cacdy', 'template_hj3n4ke', form.current, 'TCCkK1aqYSRXt2bFq')
            .then((result) => {
                // show the user a success message
                console.log(result);
                alert("Your Request has sent !");
                window.location.reload();
             }, (error) => {
                // show the user an error
                console.log(error.text);
     });
    };


    return(
        <>
            <section className="home">
                <div className="home-content">
                    <h4> Hello, It's Me </h4>
                    <h1> Aayesha Shaikh </h1> 
                    <h3> And I'm a <span> Frontend Developer</span> </h3>        
                    
                    <div className="social-media">
                        <a href=""><i className="fa-brands fa-instagram social-icon1"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin social-icon1"></i></a>
                        <a href=""><i className="fa-brands fa-whatsapp social-icon1"></i></a>
                        <a href=""><i className="fa-brands fa-facebook social-icon1"></i></a>
                    </div>
                
                    <a href="" className="btn1" onClick={downloadPdf}> Download CV </a>
                </div>
                
                <div className="home-img">
                    <img src="pic.png" />
                </div>
            </section>

            <section className="container about">
                <div className="row about-content mt-4">
                    <h1> About Me </h1>
                    <p>
                        I, Aayesha Majjid Shaikh, have qualified M.E.(Electronics Engineering) in 2021
                        I have qualified all my academics with First Class with Destiction; 
                        from KBP College Of Engineering, Satara.
                    </p>
                    <p>
                        I am passionate for all new things technology and design.
                        I am Frontend Developer & I have a passion to design and develop a clean code for projects.
                    </p>
                </div>

                <a className="academics-heading ps-4" href=""> Academics </a>
                
                <div className="row ps-5 pe-5 mt-4">
                    <div className="academics">
                        <div className="col-lg-3">
                            <h6> Masters of Engineering</h6>
                            <p> Electronics Engineering <br/>
                                KBP COE, Satara <br/>
                                2021, 72%
                            </p>    
                        </div>
                        <div className="col-lg-3">
                            <h6> Bachelor of Engineering</h6>
                            <p> Electronics Engineering <br/>
                                KBP COE, Satara <br/>
                                2016, 74%
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h6> Higher Secondary Education</h6>
                            <p> YCIS, Satara <br/> 
                                Maharashtra <br/> 
                                2012, 84%
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h6> SSC</h6>
                            <p> Maharaja Sayajirao 
                                Vidyalaya Satara <br/>
                                2010, 97% 
                            </p>
                        </div>
                    </div>       
                </div>
            </section>  

            <section>
                <div className="container">
                    <div className="row skillset p-4"> 
                        <h1 className="skills-head mb-4"> Skills & Achievements </h1>
                        <div className="col-lg-3">
                            <div className="skills">
                                <a className="skills-headings" href=""> Skills </a>
                                <p> HTML </p>
                                <p> CSS </p>
                                <p> Bootstrap </p>
                                <p> JavaScript </p>
                                <p> Reactjs </p>
                                <p> React Material UI</p>
                                <p> Git & GitHub </p>
                                <p> Java </p>
                                <p> Android Programming </p>
                                <p> C </p>
                                <p> Web Designing </p>
                                <p> Design Thinking </p>
                                <p> Problem Solving </p>
                                <p> Time Management </p>
                                <p> Team Work </p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="skills">
                                <a className="skills-headings" href=""> Achievements & Certifications </a>
                                <p> 1. Winner in the Texas Analog Maker Competition 2015 </p>
                                <p> 2. Finalist of ‘All India Technology & Innovation contest, Techno-Champ2015’
                                    organised by John Deere Technology Centre India
                                </p>
                                <a className="skills-headings" href=""> Certifications </a>
                                <p className="top-margin"> Web Development </p>
                                <p> Android Programming </p>
                                <p> Java Programming Language </p>
                                <p> C Programming Language </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="skills">
                                <a className="skills-headings" href=""> Academic Projects </a>
                                <p> 1. Moving Robot and Image Processing based Analysis for Tomato Growth Measurement</p>
                                <p> 2. Wireless VGA Connectivity for LCD Projector </p>
                                <p> 3. Bidirectional Visitor Counter with Auto-Room-Light </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio">
                <div className="container">
                    <div className="row">
                        <h1> Latest Projects </h1>
                        <div className="col-lg-4 projects">
                            <div> 
                                <span> <img src="html1.png" width="30" height="30"/> </span>
                                <span> <img src="css.png" width="30" height="30"/> </span>
                                <span> <img src="bootstrap.png" width="30" height="30"/> </span>
                                <span> <img src="js.png" width="30" height="30"/> </span>
                                <span> <img src="react.png" width="30" height="30"/> </span>
                                <p> Real Estate Property Listing Web Application using React </p>
                            </div>
                        </div>
                        <div className="col-lg-4 projects">
                            <div> 
                                <span> <img src="html1.png" width="30" height="30"/> </span>
                                <span> <img src="css.png" width="30" height="30"/> </span>
                                <span> <img src="bootstrap.png" width="30" height="30"/> </span>
                                <span> <img src="js.png" width="30" height="30"/> </span>
                                <span> <img src="react.png" width="30" height="30"/> </span>
                                <p>  Ecommerce Shopping App Website Using React </p>
                            </div>
                        </div>
                        <div className="col-lg-4 projects">
                            <div>
                                <span> <img src="html1.png" width="30" height="30"/> </span>
                                <span> <img src="css.png" width="30" height="30"/> </span>
                                <span> <img src="bootstrap.png" width="30" height="30"/> </span>
                                <span> <img src="js.png" width="30" height="30"/> </span>
                                <span> <img src="react.png" width="30" height="30"/> </span>
                                <p> Billing Software for Sales, Education, Small-Large Business </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4 projects">
                            <div> 
                                <span> <img src="html1.png" width="30" height="30"/> </span>
                                <span> <img src="css.png" width="30" height="30"/> </span>
                                <span> <img src="bootstrap.png" width="30" height="30"/> </span>
                                <span> <img src="js.png" width="30" height="30"/> </span>
                                <span> <img src="react.png" width="30" height="30"/> </span>
                                <p> Responsive Personal Portfolio  </p>
                            </div>
                        </div>
                        <div className="col-lg-4 projects">
                            <div>
                                <span> <img src="html1.png" width="30" height="30"/> </span>
                                <span> <img src="css.png" width="30" height="30"/> </span>
                                <span> <img src="js.png" width="30" height="30"/> </span>
                                <p> Zomato Clone Logic Using JavaScript Promises  </p>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="container exp">
                    <div className="row">
                        <h1 className="mt-5"> Experience </h1>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="exp-border p-4">
                                <h3> Internship – UI Developer </h3>
                                <h5> Infocampus Software Training Institute </h5>
                                <p> 11/2022 – 04/2023 - Bengaluru, Karnataka </p>
                                <h6 className="fw-bold"> Achievements/Task: </h6>
                                <div>
                                    <ul className="text-start">
                                        <li> Working on Frontend Optimization and performance of Website. </li>
                                        <li> Developing Responsive Websites for better User Interface. </li>
                                        <li> Worked with JavaScript, APIs, Bootstrap, React Material UI, HTML, CSS. </li>
                                        <li> Worked with ReactJS Components for making code reusable. </li>
                                    </ul>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </section>        

            <section>
                <div className="container">
                    <div className="row contact">
                        <div className="col-lg-4 mt-5 contactme">
                            <h1 className="mt-5 mb-4"> Contact Me </h1>
                            <p> <i className="fa-sharp fa-solid fa-envelope social-icon2"></i> shaikhaayesha612@gmail.com</p>
                            <p> <i className="fa-solid fa-phone social-icon2"></i> +91-7387397005 </p>
                            <div className="social-media1">
                                <a href=""><i className='fa-brands fa-instagram social-icon2'></i></a>
                                <a href=""><i className='fa-brands fa-linkedin social-icon2'></i></a>
                                <a href=""><i className='fa-brands fa-whatsapp social-icon2'></i></a>
                                <a href=""><i className='fa-brands fa-facebook social-icon2'></i></a>
                            </div>
                            <a className="btn1" onClick={downloadPdf}> Download CV </a> 
                        </div>

                        <div className="col-lg-5 mt-5">
                            <div className="mt-5">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row mt-5">
                                        <div className="col-lg-12 mt-3">  
                                            <input type="text" size="60" name="name" placeholder="Your Name Here" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="row mt-3">
                                        <div className="col-lg-12">   
                                            <input type="email" name="email" size="60" placeholder="Your Email Id Here" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="row mt-3">
                                        <div className="col-lg-12">
                                            <textarea name="message" rows="8" cols="62" placeholder="Your Message Here" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-center mt-3 mb-3">
                                            <input type="submit" value="Send Request" className="btn2"/>
                                        </div> 
                                    </div>
                                </form>
                            </div>    
                        </div>

                        <div className="col-lg-3">
                            <p className="text-end mt-5">
                                <p className="text-dark mt-5 mb-5 p1">.</p>
                                <p className="text-dark mt-5 mb-5 p1">.</p>
                                <p className="text-dark mt-5 mb-5 p1">.</p>
                                <p className="text-dark mt-5 mb-5 p1">.</p>
                                {/* <button onclick="topFunction" id="myBtn" class="text-white">
                                    <i className="fa fa-home"></i> 
                                </button>
                                <p className="mb-5 back-home"> Back to Home </p> */}
                                <p className="text-end">
                                    <a href="#" className="text-white">
                                        <i className="fa fa-home fa-3x m-2"></i>
                                    </a>
                                    <p className="mb-5 back-home"> Back to Home </p>
							    </p>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Home;