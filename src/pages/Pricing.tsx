import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SecondaryButton } from "@/components/UI/Buttons";
import CallToAction from "@/components/layout/CallToAction";

function Pricing() {
  return (
    <>
      <NavBar />
      <main className="text-blue">
        <h1 className="text-3xl text-center font-bold ">Pricing</h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-dark-pink p-14 font-bold">Free Plan</h2>
          <h3 className="text-6xl font-bold">$0.00</h3>
          <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 w-5/6">
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton className="border-blue text-blue">
            Request Access
          </SecondaryButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl text-dark-pink p-14 font-bold">Basic Plan</h2>
          <h3 className="text-6xl font-bold">$249.00</h3>
          <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 w-5/6">
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton className="border-blue text-blue">
            Request Access
          </SecondaryButton>
        </div>
        <div className="flex flex-col items-center gap-4 mb-10">
          <h2 className="text-2xl text-dark-pink p-14 font-bold">
            Premium Plan
          </h2>
          <h3 className="text-6xl text-blue font-bold">$499.00</h3>
          <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 w-5/6">
            <li>Transactions</li>
            <li>Auth</li>
            <li>Identity</li>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
          </ul>
          <SecondaryButton className="border-blue text-blue">
            Request Access
          </SecondaryButton>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Pricing;
