import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Facilities from '../components/Facilities.jsx';
import Rooms from '../components/Rooms.jsx';
import RoomsTariff from '../components/RoomsTariff.jsx';
import Gallery from '../components/Gallery.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <RoomsTariff />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
