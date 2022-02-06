import React from 'react'


export default function About(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '1px groove',
        borderColor: 'dark' ? 'black' : '#042743'
    }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={mystyle} aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutlies gives you a way to analyze Your Text Quickly Ans Effeciently.be it Word Count or Charcter count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" style={mystyle} aria-controls="collapseTwo">
                            <strong>Free To use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutlies is a Free Charcter Counet Tool That provide instant Charcter count And word count statistics for a given text.Textutlies reports the number of word and Charcters. Thus it is suitable for writing text with word/Charcter limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={mystyle} aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as chrome,firefox,internet explorer,safari,opera,brave. it suits to count Charcter in facebook,blog,books,excel document,pdf document,essays,etc
                        </div>
                    </div>
                </div>
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingfour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" style={mystyle} aria-expanded="false" aria-controls="collapsefour">
                            <strong>Creator</strong>
                        </button>
                    </h2>
                    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Rohit R. Jagtap <br />
                        </div>
                    </div>
                </div>
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingfive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" style={mystyle} aria-expanded="false" aria-controls="collapsefive">
                            <strong>Next Project</strong>
                        </button>
                    </h2>
                    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TICK TAK TOE GAME <br />
                            <button className="btn btn-primary mx-1 my-1"><a href="https://tiktacto.herokuapp.com/" target={'_blank'} rel="noreferrer" style={{color:'white',textDecoration:'none'}}>GO TO</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
