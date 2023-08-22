import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const UsedTechnologies = () => {
    let navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div >
            Developed a dynamic and responsive website by using <strong>React.js</strong> for User Interface including with <strong>Material Ui</strong> and <strong>Bootstrap</strong> for adding the responsiveness to the website,
            <br />
            <br />
            <strong>Node.js</strong> as back-end for creating api endpoints and all the required logic for the user and also for the Notes and used <strong>encryptjs</strong> Authentication of Login created auth-tokens <strong>( jsonwebtoken )</strong> so that it cannot be accessed if someone wont have the login credentials. Used <strong>Mongo DB</strong> for storing the data of used and Notes in Database.
            <br />
            <br />
            <strong>This is just a normal Lorem text for not leaving the whole page blank.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium optio cupiditate corporis a facilis iusto quae, fugiat architecto consequatur, nulla ducimus fugit quibusdam perspiciatis excepturi! Fuga beatae modi inventore quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium optio cupiditate corporis a facilis iusto quae, fugiat architecto consequatur, nulla ducimus fugit quibusdam perspiciatis excepturi! Fuga beatae modi inventore quaerat?
        </div>
    )
}

export default UsedTechnologies
