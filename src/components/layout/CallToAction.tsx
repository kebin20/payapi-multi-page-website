import { PrimaryButton } from "../UI/Buttons";

export default function CallToAction() {
  return (
    <section className="mx-6 mb-20 grid gap-8 text-center">
      <h2 className="text-3xl  text-blue font-bold leading-9 mx-4">
        Ready to start?
      </h2>
      <input
        type="text"
        placeholder="Enter email adddress"
        className="bg-white font-bold px-14 py-3.5 rounded-3xl shadow-lg"
      />
      <PrimaryButton className="text-white">Schedule a Demo</PrimaryButton>
    </section>
  );
}
