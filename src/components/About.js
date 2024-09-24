import React from 'react'

export default function About(props) {

  let mystyle={
    color: props.mode==='dark'?'white':'#3e5871',
    backgroundColor: props.mode==='dark'?'#3e5871':'white',
  }

  return (
    <div className="container my-5">
      <h2 className='my-3 text-center' style={{color: props.mode==='dark'?'white':'#3e5871', letterSpacing:'2px'}}>About TextOps</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Upper Case
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

      To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE Button.

        <strong> THIS IS AN EXAMPLE OF UPPER CASE.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Lower case
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

      <strong> this is an example of lower case.</strong>
        </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Remove Empty Lines
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Remove Empty Lines is easy to use tool to remove empty lines. Copy, Paste and delete empty lines.

    Empty lines may be used for spacing in a text. However, they are not necessary and can be removed. 
</div>
    </div>
  </div>
</div>
    </div>
  )
}
