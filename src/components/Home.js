import Notes from './Notes'

const Home = (props) => {
  return (
    <div style={{height:'100vh'}} >
      <Notes showAlert={props.showAlert} />
    </div>
  )
}

export default Home
