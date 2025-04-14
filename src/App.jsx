import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from './Clock.jsx';

function App(){
  return (
    <>
      <Header/>
      <Clock/>
      <MyDemo/>
      <Stuff name = "Nolan Grayson" title = "Are you sure?"/>
      <Stuff name = "Angstrom Levy" title = "Supervillain"/>
      <Stuff name = "immortal" title = "WHERES OMNI MAN"/>
      <Stuff/>
      <Footer/>
    </>
  )
}

export default App