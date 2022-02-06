import emailjs from 'emailjs-com'
import './mailer.css'
const Mailer = () => {
    function sendEmail(e) {
        alert(`Thank you \n We'll be in touch soon.`)

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
            <div className="container-1">
                <h1>Contact Form </h1>
                <form className="row"  onSubmit={sendEmail}>
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