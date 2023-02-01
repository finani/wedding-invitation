import { useRouter } from 'next/router';
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

function strToBool(str: any): boolean {
  return /^true$/i.test(str);
}

function Home() {
  const router = useRouter();
  const showAccount = strToBool(router.query['showAccount']);

  return (
    <>
      <MainCard />
      <Invitation />
      <Contact showAccount={ showAccount } />
      <Gallery />
      <Calendar />
      <MapCard />
      <GuestBook />
      <Footer />
    </>
  );
}

export default Home;
