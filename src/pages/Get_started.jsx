export default function Get_started() {
  return (
    <>
      <section className="flex flex-col h-screen justify-between">
        <div className="w-10/12 mx-auto mt-5">
          <div className="mb-10">
            <svg
              width="39"
              height="14"
              viewBox="0 0 39 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.738 0.399999H5.976V2.2H2.718V5.71H5.274V7.51H2.718V13H0.738V0.399999ZM9.7875 13.18C8.8155 13.18 8.0715 12.904 7.5555 12.352C7.0395 11.8 6.7815 11.02 6.7815 10.012V3.388C6.7815 2.38 7.0395 1.6 7.5555 1.048C8.0715 0.495999 8.8155 0.219999 9.7875 0.219999C10.7595 0.219999 11.5035 0.495999 12.0195 1.048C12.5355 1.6 12.7935 2.38 12.7935 3.388V10.012C12.7935 11.02 12.5355 11.8 12.0195 12.352C11.5035 12.904 10.7595 13.18 9.7875 13.18ZM9.7875 11.38C10.4715 11.38 10.8135 10.966 10.8135 10.138V3.262C10.8135 2.434 10.4715 2.02 9.7875 2.02C9.1035 2.02 8.7615 2.434 8.7615 3.262V10.138C8.7615 10.966 9.1035 11.38 9.7875 11.38ZM16.9945 13.18C16.0225 13.18 15.2785 12.904 14.7625 12.352C14.2465 11.8 13.9885 11.02 13.9885 10.012V3.388C13.9885 2.38 14.2465 1.6 14.7625 1.048C15.2785 0.495999 16.0225 0.219999 16.9945 0.219999C17.9665 0.219999 18.7105 0.495999 19.2265 1.048C19.7425 1.6 20.0005 2.38 20.0005 3.388V10.012C20.0005 11.02 19.7425 11.8 19.2265 12.352C18.7105 12.904 17.9665 13.18 16.9945 13.18ZM16.9945 11.38C17.6785 11.38 18.0205 10.966 18.0205 10.138V3.262C18.0205 2.434 17.6785 2.02 16.9945 2.02C16.3105 2.02 15.9685 2.434 15.9685 3.262V10.138C15.9685 10.966 16.3105 11.38 16.9945 11.38ZM21.3396 0.399999H24.3636C25.3476 0.399999 26.0856 0.663999 26.5776 1.192C27.0696 1.72 27.3156 2.494 27.3156 3.514V9.886C27.3156 10.906 27.0696 11.68 26.5776 12.208C26.0856 12.736 25.3476 13 24.3636 13H21.3396V0.399999ZM24.3276 11.2C24.6516 11.2 24.8976 11.104 25.0656 10.912C25.2456 10.72 25.3356 10.408 25.3356 9.976V3.424C25.3356 2.992 25.2456 2.68 25.0656 2.488C24.8976 2.296 24.6516 2.2 24.3276 2.2H23.3196V11.2H24.3276ZM28.3641 5.8H32.3241V7.6H28.3641V5.8Z"
                fill="#2D2D2D"
              />
              <path
                d="M33.5036 0.399999H38.9036V2.2H35.4836V5.53H38.2016V7.33H35.4836V11.2H38.9036V13H33.5036V0.399999Z"
                fill="#2FDBBC"
              />
            </svg>
          </div>
          <div className="mx-auto mb-5">
            <p className="uppercase text-2xl text-customDark">
              get
              <span className="text-primaryDefault"> started </span>
            </p>
            <p className="text-customDark">
            Get started and enjoy the awesome local food right at your home.
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center"></div>
        <section className="relative text-customGray">
          <div className="mb-5 py-2 flex justify-center bg-primaryDefault w-10/12 mx-auto rounded-full text-white">
            LOGIN
          </div>

          <div className="mb-5 py-2 flex justify-center border-2 border-primaryDefault w-10/12 mx-auto rounded-full text-primaryDefault">
            REGISTER
          </div>
          <div className="border-b-4 border-customDark mb-2 w-5/12 mx-auto rounded"></div>
        </section>
      </section>
    </>
  );
}
