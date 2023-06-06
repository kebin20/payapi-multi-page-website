import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SecondaryButton } from "@/components/UI/Buttons";
import CallToAction from "@/components/layout/CallToAction";

function Pricing() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl">Pricing</h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-dark-pink">Free Plan</h2>
          <p>$0.00</p>
          <ul>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton>Request Access</SecondaryButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2>Basic Plan</h2>
          <p>$249.00</p>
          <ul>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton>Request Access</SecondaryButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2>Premium Plan</h2>
          <p>$499.00</p>
          <ul>
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton>Request Access</SecondaryButton>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Pricing;
