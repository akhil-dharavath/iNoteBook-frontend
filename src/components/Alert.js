import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: '50px' }} >
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role='alert'>
                <strong>{props.alert.type === 'success' ? 'Success' : 'Error'}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert
