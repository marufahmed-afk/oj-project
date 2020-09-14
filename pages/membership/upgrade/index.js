import Footer from '../../../components/layout/Footer/Footer';
import Navbar from '../../../components/layout/Navbar';
import Upgrade from '../../../components/Membership/Upgrade/Upgrade';
import Guarantee from '../../../components/Membership/Guarantee/Guarantee';
import Greet from '../../../components/layout/Greet/Greet';

export default function upgrade() {
  return (
    <>
      <Navbar />
      <Greet />
      <Upgrade />
      <Guarantee />
      <Footer />
    </>
  );
}
