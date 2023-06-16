
const Portfolio = () =>{
    return(
        <>
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
        </>
    )
}

export default Portfolio;