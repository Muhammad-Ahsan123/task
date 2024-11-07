import './App.css'
import Navbar from './components/Navbar';
import QuestionStack from './components/QuestionStack';
import Content from './components/Content';
import RigthSideContianer from './components/RigthSideContianer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: 'flex', width: '98%', padding: '0 1vw' }}>
        <QuestionStack></QuestionStack>
        <Content></Content>
        <RigthSideContianer>
        </RigthSideContianer>
      </div >
    </>
  )
}
export default App