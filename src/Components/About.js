import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DETAILS
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TEXTENJOY - Play with text.</strong><hr></hr> TextEnjoy is a text analyzer app made through React to help you perform various functions on your text, converting your text into UpperCase or LowerCase, reciting your text, summarizing your text, to name a few.
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            PREPARED BY
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>KARTIK KEDIA</strong><hr></hr>Hi Guys! I am a tech enthusiast and my passion for computers have led me to expand my knowledge in computer science because I find it fascinating.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}