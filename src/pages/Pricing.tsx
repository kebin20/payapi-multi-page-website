import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SecondaryButton } from "@/components/UI/Buttons";
import CallToAction from "@/components/layout/CallToAction";
import TickIcon from "@/components/UI/TickIcon";

function Pricing() {
  return (
    <div className="secondary-main">
      <NavBar />
      <main className="text-blue">
        <h1 className="text-3xl text-center font-bold md:text-5xl md:pt-6">
          Pricing
        </h1>
        <div className="mb-24 md:flex md:flex-row md:justify-evenly md:gap-4 md:m-20">
          {" "}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl text-dark-pink p-14 font-bold md:p-0">
              Free Plan
            </h2>
            <p className="hidden md:block md:text-center">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <h3 className="text-6xl font-bold md:text-5xl md:py-2">$0.00</h3>
            <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 px-24 md:px-12">
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Transactions</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Auth</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Identity</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Investments</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Assets</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Liabilities</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Income</li>
              </div>
            </ul>
            <SecondaryButton className="border-blue text-blue">
              Request Access
            </SecondaryButton>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl text-dark-pink p-14 font-bold  md:p-0">
              Basic Plan
            </h2>
            <p className="hidden md:block md:text-center">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <h3 className="text-6xl font-bold md:text-5xl md:py-2">$249.00</h3>
            <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 px-24 md:px-12">
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Transactions</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Auth</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Identity</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Investments</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Assets</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Liabilities</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden />
                <li className="opacity-50">Income</li>
              </div>
            </ul>
            <SecondaryButton className="border-blue text-blue">
              Request Access
            </SecondaryButton>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl text-dark-pink p-14 font-bold md:p-0">
              Premium Plan
            </h2>
            <p className="hidden md:block md:text-center">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <h3 className="text-6xl text-blue font-bold md:text-5xl md:py-2">
              $499.00
            </h3>
            <ul className="flex flex-col gap-4 border-y-2 border-gray p-6 px-24 md:px-12">
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Transactions</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Auth</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Identity</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Investments</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Assets</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Liabilities</li>
              </div>
              <div className="flex  gap-4">
                <TickIcon hidden={undefined} />
                <li>Income</li>
              </div>
            </ul>
            <SecondaryButton className="border-blue text-blue">
              Request Access
            </SecondaryButton>
          </div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
