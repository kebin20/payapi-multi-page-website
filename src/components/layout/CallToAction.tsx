import { PrimaryButton } from "../UI/Buttons";

export default function CallToAction() {
  return (
    <section className="mx-6 mb-24 grid gap-8 text-center lg:flex lg:justify-between lg:my-28 lg:mx-40">
      <h2 className="text-3xl  text-blue font-bold leading-9 mx-4 md:text-5xl lg:mx-0">
        Ready to start?
      </h2>
      <div className="flex flex-col gap-4 md:relative md:items-center lg:flex-row">
        <input
          type="text"
          placeholder="Enter email adddress"
          className="bg-white font-bold px-14 py-3.5 rounded-3xl shadow-lg md:text-left md:px-8 md:w-3/5 lg:w-[40rem]"
        />
        <PrimaryButton className="text-white md:absolute md:right-36 md:z-10 md:px-8 lg:-right-2">
          Schedule a Demo
        </PrimaryButton>
      </div>
    </section>
  );
}
