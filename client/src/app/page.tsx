import LandingPage from "@/pages/LandingPage";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8">
        <LandingPage/>
      </main>
      <Footer/>
    </div>
  );
}
