import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <Footer />
    </main>
  );
}
