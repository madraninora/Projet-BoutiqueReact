import Header from '../components/Header.js'
import FeatureBar from '../components/FeatureBar.js';
import NavigationBar from '../components/NavigationBar.js';
import Section1  from '../components/Section1.js';
import Section2  from '../components/Section2.js';
import Section3 from '../components/Section3.js';

function Home() {
  return (
    <div className='App'>
     <Header/>
     <NavigationBar/>
     <FeatureBar/>
     <Section1/>
     <Section2/>
     <Section3/>
     


    </div>
  );
}

export default Home;