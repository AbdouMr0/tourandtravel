import React from 'react';
function Singup(){
    return(
        <div className='form-container'>
            <h1>Singu Up.</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Password' />
                <button>Send </button>
            </form>
        </div>
    )
}
export default Singup;