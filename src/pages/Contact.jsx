import React from 'react'


const handleformSubmit=(formData)=>{
  console.log(FormData.entries());
  const formInputData=Object.fromEntries(formData.entries());
  console.log(formInputData);
}

/**
 * formData is Iterator object which is used to get the data from the form
 * const formInputData=Object.fromEntries(formData.entries());
 * it takes the data from the form and convert into an object so that  it would be great to pass to the backend 
 * It is using the latest version of react 19
 * Intially we used to use the useeffect ,usestate to take the changes in to teh formn and then passing down into an objecct then moviong forward with backed
 */

const Contact = () => {
  return (
    <section className='section-contact'>
        <h2 className='container-title'>
        Contact Us
        </h2>
        <div className="contact-wrapper container">
        <form action={handleformSubmit}>
          <input  type="text"
                  required
                  autoComplete='off'
                  placeholder='Enter Your Name'
                  name="username"
          />
          <input  type="email"
                  required
                  autoComplete='off'
                  placeholder='Enter Your E-Mail'
                  name="email"
                  className='form-control'
          />
          <textarea name="message"  
                    id=""
                    rows="10"
                    placeholder='Enter your message'
                    className='form-control'
                    required
                    autoComplete='false'>
          </textarea>
          <button type='submit' value='send'>Send</button>
        </form>
        </div>
    </section>
  )
}

export default Contact