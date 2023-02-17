import { useRouter } from 'next/router';

import {
  Account,
  CalendarCard,
  Contact,
  FloatingShare,
  FlowerCard,
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
      <Contact />
      <Gallery />
      <CalendarCard />
      <MapCard />
      {showAccount && <Account />}
      <FlowerCard />
      <GuestBook />
      <Footer />
      <FloatingShare showAccount={showAccount} />
    </>
  );
}

export default Home;
