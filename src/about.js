const About = () =>{
    return(
        <>
            <section className="container about">
                <div className="row about-content">
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

                <a className="academics-heading ps-4"> Academics </a>
                
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
        </>
    )
}

export default About;