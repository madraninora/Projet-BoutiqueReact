import Header from '../components/Header.js'
import FeatureBar from '../components/FeatureBar.js';
import NavigationBar from '../components/NavigationBar.js';
import Section1  from '../components/Section1.js';
import Section2  from '../components/Section2.js';
import Section3 from '../components/Section3.js';
import Section4  from '../components/Section4.js';
import Section5 from '../components/Section5.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <div>
     <Header/>
     <NavigationBar/>
     <FeatureBar/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>


    </div>
  );
}

export default Home;