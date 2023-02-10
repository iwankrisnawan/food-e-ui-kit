export default function Confirm_order1() {
  return (
    <>
      <section className="flex flex-col min-h-screen justify-between bg-alertSuccess">
        <section className="w-10/12 relative mx-auto mb-10 mt-5"></section>
        <section className="w-10/12 mx-auto mb-10">
          <div className="flex flex-col space-y-10 mb-20">
            <div className="text-white text-center font-bold text-2xl tracking-tight">
              ORDER CONFIRMED!
            </div>
            <div id="logo">
              <img
                src="../public/icon-astro-1.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="text-white text-center tracking-tight font-medium">
              Hang on Tight! We’ve received your order and we’ll bring it to you
              ASAP!
            </div>
          </div>
        </section>
        <section className="text-customGray w-10/12 mx-auto">
          <div className="mb-5 py-2 flex justify-center bg-white rounded-full text-primaryDefault">
            TRACK MY ORDER
          </div>
        </section>
      </section>
    </>
  );
}
