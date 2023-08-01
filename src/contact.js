import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () =>{
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

                        <div className="col-lg-3"></div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;