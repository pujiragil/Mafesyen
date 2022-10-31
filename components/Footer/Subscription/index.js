export default function Subcription() {
  return (
    <div className="w-full lg:w-2/12 md:flex justify-center">
      <div className="md:w-[30%] lg:w-full">
        <p className="uppercase text-sm font-medium mb-3.5">join us</p>
        <p className="uppercase font-roboto text-[#828282] text-xs mb-2.5">
          Subscribe to our newsletters
        </p>
        <input
          type={"email"}
          placeholder="Email Address"
          className="w-full mb-2.5 px-4 py-2 border border-white outline-none bg-transparent"
        />
        <input
          type={"submit"}
          value="subscribe"
          className="uppercase text-black bg-white outline-none px-4 py-2 w-full cursor-pointer"
        />
      </div>
    </div>
  );
}
