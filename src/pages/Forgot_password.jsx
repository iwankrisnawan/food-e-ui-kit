export default function Forgot_password() {
  return (
    <>
      <section className="flex flex-col h-screen justify-between">
        <section className="w-10/12 mx-auto mt-5">
          <div className="mb-10">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_18_363)">
                <path
                  d="M11 9.70388L15.5375 5.16638L16.8337 6.46255L12.2962 11L16.8337 15.5375L15.5375 16.8337L11 12.2962L6.4625 16.8337L5.16633 15.5375L9.70383 11L5.16633 6.46255L6.4625 5.16638L11 9.70388Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_363">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mx-auto mb-5">
            <p className="uppercase text-2xl text-customDark">FORGOT PASSWORD</p>
            <span className="text-customGray">We’ll send a password reset link to your email.</span>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-5">
          <div className="mb-5">
            <label htmlFor="email" className="text-primaryDefault text-xs pl-4">
              EMAIL
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2"
              placeholder="johndoe@email.com"
              id="email"
            />
          </div>
          <div className="mb-5 py-2 flex justify-center bg-primaryDefault mx-auto rounded-full text-white">
            LOGIN
          </div>
        </section>
        <section className="relative text-customGray">
        </section>
      </section>
    </>
  );
}
