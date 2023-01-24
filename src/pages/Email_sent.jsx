export default function Email_sent() {
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
            <p className="uppercase text-2xl text-customDark">EMAIL SENT</p>
            <span className="text-customGray">
              We’ve sent you an email at{" "}
              <span className="text-primaryDefault">user@email.com</span> for
              verification. Check your email for the verification link.
            </span>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-5"></section>
        <section className="relative text-customGray w-10/12 mx-auto">
          <div className=" flex flex-col justify-end mb-5">
            <span className="text-secondaryDefault mb-5">00:38</span>
            <span>Did you receive the email yet?</span>
            <span className="text-primaryDefault">Resend</span>
          </div>
          <div className="mb-5 py-2 flex justify-center bg-primaryDefault rounded-full text-white">
            OPEN EMAIL APP
          </div>
        </section>
      </section>
    </>
  );
}
