export default function Confirm_order2() {
  return (
    <>
      <section className="flex flex-col min-h-screen justify-between bg-alertError">
        <section className="w-10/12 relative mx-auto mb-10 mt-5"></section>
        <section className="w-10/12 mx-auto mb-10">
          <div className="flex flex-col space-y-10 mb-20">
            <div className="text-white text-center font-bold text-2xl tracking-tight">
              SOMETHING WENT WRONG!
            </div>
            <div id="logo">
              <img
                src="../public/icon-astro-2.png"
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="text-white text-center tracking-tight font-medium">
              Something went wrong. We’ll look into the issue right away.
            </div>
          </div>
        </section>
        <section className="text-customGray w-10/12 mx-auto">
          <div className="mb-5 py-2 flex justify-center bg-white rounded-full text-primaryDefault">
            TRY AGAIN
          </div>
        </section>
      </section>
    </>
  );
}
