import {
  Calendar,
  Contact,
  Footer,
  Gallery,
  GuestBook,
  Invitation,
  MainCard,
  MapCard,
} from 'src/common/components';

function Home() {
  return (
    <>
      <MainCard />
      <Invitation />
      <Contact />
      <Gallery />
      <Calendar />
      <MapCard />
      <GuestBook />
      <Footer />
    </>
  );
}

export default Home;
