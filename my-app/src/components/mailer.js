import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail(e) {
        alert("Thank you We'll be in touch soon.")

        // e.preventDefault()
        emailjs.sendForm(
            'service_y1e6man',
            'template_9fnr5ve',
            e.target,
            'user_aXaahF0iC0d3cePhIpLLP'
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            <div className="container border"
                style={{
                    marginTop: "50px",
                    width: '50%',
                    height: '75vh',
                    backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '5px'
                }}>
                <h1 style={{ marginTop: '25px' }}>Contact Form </h1>
                <form className="row" style={{ margin: '50px 85px 0px 0px', width: '32vw' }} onSubmit={sendEmail}>
                    <label>name</label>
                    <input type="text" name="name" className="form-control mt-3" />


                    <label className='mt-3'>Email</label>
                    <input type="email" name="user_email" className="form-control mt-3" />

                    <label className='mt-3'>Massage</label>
                    <textarea name="message" id="" rows="4" className="form-control mt-3" placeholder="Enter Massage" />
                    <input type="submit" value='Send' className="form-control btn btn-primary mt-5" />
                </form>
            </div>
        </>

    );
}
export default Mailer;