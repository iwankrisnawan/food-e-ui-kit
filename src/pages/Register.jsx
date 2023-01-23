export default function Register() {
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
            <p className="uppercase text-2xl text-customDark">Register</p>
          </div>
        </section>
        <section className="w-10/12 mx-auto">
          <div className="mb-3">
            <label
              htmlFor="full_name"
              className="text-primaryDefault text-xs pl-4"
            >
              FULL NAME
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2"
              placeholder="John Doe"
              id="full_name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email_form"
              className="text-primaryDefault text-xs pl-4"
            >
              EMAIL
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2"
              placeholder="johndoe@email.com"
              id="email_form"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="text-primaryDefault text-xs pl-4"
            >
              PHONE
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2"
              placeholder="+00 9759 657"
              id="phone"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="text-primaryDefault text-xs pl-4"
            >
              PASSWORD
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2"
              placeholder="Password"
              id="password"
            />
          </div>
        </section>
        <section className="relative text-[#A3A3A3]">
          <div className="mb-5 py-2 flex justify-center bg-primaryDefault w-10/12 mx-auto rounded-full text-[#FFFFFF]">
            REGISTER
          </div>
          <div className="flex justify-center mb-5">
            <div className="text-customGray">
              Already have an account?
              <span className="text-secondaryDefault"> Login</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
