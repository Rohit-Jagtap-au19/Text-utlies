import React from 'react'

function Alert(props) {
    // const capitalize =(word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div className='mt-2' style={{height:'50px',margin:'auto',width:'300px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{textAlign:'center'}} role="alert">
            {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert