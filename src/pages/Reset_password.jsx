export default function Reset_password() {
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
            <p className="uppercase text-2xl text-customDark">RESET PASSWORD</p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="text-primaryDefault text-xs pl-4"
            >
              PASSWORD
            </label>
            <br />
            <div className="relative">
              <span className="absolute right-0 transform -translate-x-1/2 translate-y-1/2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_160_516)">
                    <path
                      d="M10.9999 2.75C15.9426 2.75 20.0548 6.30667 20.9174 11C20.0557 15.6933 15.9426 19.25 10.9999 19.25C6.05727 19.25 1.9451 15.6933 1.08252 11C1.94419 6.30667 6.05727 2.75 10.9999 2.75ZM10.9999 17.4167C12.8695 17.4163 14.6835 16.7813 16.1451 15.6156C17.6067 14.4499 18.6293 12.8226 19.0455 11C18.6277 9.17886 17.6045 7.55334 16.143 6.38919C14.6816 5.22504 12.8684 4.59115 10.9999 4.59115C9.13149 4.59115 7.31832 5.22504 5.85686 6.38919C4.39541 7.55334 3.37214 9.17886 2.95435 11C3.37061 12.8226 4.39322 14.4499 5.85482 15.6156C7.31642 16.7813 9.13042 17.4163 10.9999 17.4167ZM10.9999 15.125C9.90592 15.125 8.85671 14.6904 8.08312 13.9168C7.30953 13.1432 6.87494 12.094 6.87494 11C6.87494 9.90598 7.30953 8.85677 8.08312 8.08319C8.85671 7.3096 9.90592 6.875 10.9999 6.875C12.094 6.875 13.1432 7.3096 13.9168 8.08319C14.6903 8.85677 15.1249 9.90598 15.1249 11C15.1249 12.094 14.6903 13.1432 13.9168 13.9168C13.1432 14.6904 12.094 15.125 10.9999 15.125ZM10.9999 13.2917C11.6077 13.2917 12.1906 13.0502 12.6204 12.6205C13.0502 12.1907 13.2916 11.6078 13.2916 11C13.2916 10.3922 13.0502 9.80932 12.6204 9.37955C12.1906 8.94978 11.6077 8.70833 10.9999 8.70833C10.3921 8.70833 9.80925 8.94978 9.37948 9.37955C8.94971 9.80932 8.70827 10.3922 8.70827 11C8.70827 11.6078 8.94971 12.1907 9.37948 12.6205C9.80925 13.0502 10.3921 13.2917 10.9999 13.2917Z"
                      fill="#2FDBBC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_516">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="text"
                className="w-full rounded-full bg-customLight pl-4 py-2 w-full"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirm-password"
              className="text-primaryDefault text-xs pl-4"
            >
              CONFIRM PASSWORD
            </label>
            <br />
            <div className="relative">
              <span className="absolute right-0 transform -translate-x-1/2 translate-y-1/2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_160_516)">
                    <path
                      d="M10.9999 2.75C15.9426 2.75 20.0548 6.30667 20.9174 11C20.0557 15.6933 15.9426 19.25 10.9999 19.25C6.05727 19.25 1.9451 15.6933 1.08252 11C1.94419 6.30667 6.05727 2.75 10.9999 2.75ZM10.9999 17.4167C12.8695 17.4163 14.6835 16.7813 16.1451 15.6156C17.6067 14.4499 18.6293 12.8226 19.0455 11C18.6277 9.17886 17.6045 7.55334 16.143 6.38919C14.6816 5.22504 12.8684 4.59115 10.9999 4.59115C9.13149 4.59115 7.31832 5.22504 5.85686 6.38919C4.39541 7.55334 3.37214 9.17886 2.95435 11C3.37061 12.8226 4.39322 14.4499 5.85482 15.6156C7.31642 16.7813 9.13042 17.4163 10.9999 17.4167ZM10.9999 15.125C9.90592 15.125 8.85671 14.6904 8.08312 13.9168C7.30953 13.1432 6.87494 12.094 6.87494 11C6.87494 9.90598 7.30953 8.85677 8.08312 8.08319C8.85671 7.3096 9.90592 6.875 10.9999 6.875C12.094 6.875 13.1432 7.3096 13.9168 8.08319C14.6903 8.85677 15.1249 9.90598 15.1249 11C15.1249 12.094 14.6903 13.1432 13.9168 13.9168C13.1432 14.6904 12.094 15.125 10.9999 15.125ZM10.9999 13.2917C11.6077 13.2917 12.1906 13.0502 12.6204 12.6205C13.0502 12.1907 13.2916 11.6078 13.2916 11C13.2916 10.3922 13.0502 9.80932 12.6204 9.37955C12.1906 8.94978 11.6077 8.70833 10.9999 8.70833C10.3921 8.70833 9.80925 8.94978 9.37948 9.37955C8.94971 9.80932 8.70827 10.3922 8.70827 11C8.70827 11.6078 8.94971 12.1907 9.37948 12.6205C9.80925 13.0502 10.3921 13.2917 10.9999 13.2917Z"
                      fill="#2FDBBC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_516">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="text"
                className="w-full rounded-full bg-customLight pl-4 py-2"
                placeholder="Password"
                id="confirm-password"
              />
            </div>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-5"></section>
        <section className="relative text-customGray w-10/12 mx-auto">
          <div className="mb-5 py-2 flex justify-center bg-primaryDefault rounded-full text-white">
            RESET PASSWORD
          </div>
        </section>
      </section>
    </>
  );
}
