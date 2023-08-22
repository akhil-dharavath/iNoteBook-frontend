import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    // eslint-disable-next-line
}, [])
  return (
    <div>
      <strong>iNoteBook</strong> is a Notebook on Cloud. 
      <br />
      <br />
      <strong>iNoteBook</strong> is not only a text editor it can also save your data on cloud you can acces anytime you want from any place and any device just with your account. <strong>iNoteBook</strong> is an open-source website any one can just SignUp and start saving their Important Notes.
      <br />
      <br />
      Your data is very safe here it can only accessible from the user who has Login Credentials
      <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur?
      <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium optio cupiditate corporis a facilis iusto quae, fugiat architecto consequatur, nulla ducimus fugit quibusdam perspiciatis excepturi! Fuga beatae modi inventore quaerat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit doloribus delectus consequatur voluptate id esse, aspernatur quia nemo deserunt doloremque nulla at distinctio? A harum nobis accusamus repudiandae dicta, fuga pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium optio cupiditate corporis a facilis iusto quae, fugiat architecto consequatur, nulla ducimus fugit quibusdam perspiciatis excepturi! Fuga beatae modi inventore quaerat?
    </div>
  )
}

export default About
