export default function Search() {
  return (
    <>
      <section className="flex flex-col">
        <section className="w-10/12 relative h-80 mx-auto">
          <div className="my-5">
            <label
              htmlFor="search"
              className="text-primaryDefault text-xs pl-4"
            >
              SEARCH
            </label>
            <br />
            <input
              type="text"
              className="w-full rounded-full bg-customLight pl-4 py-2 text-primaryDefault"
              id="search"
              placeholder="Cuisine / Dish"
            />
          </div>
          <div className="mb-5">
            <div className="mb-3 flex justify-between">
              <span className=" font-semibold text-xs">CATEGORIES</span>
              <button className="text-primaryDefault text-xs">VIEW ALL</button>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
              <span className="bg-customLight p-3 rounded-full">Breakfast</span>
              <span className="bg-customLight p-3 rounded-full">Fastfood</span>
              <span className="bg-customLight p-3 rounded-full">Lunch</span>
              <span className="bg-customLight p-3 rounded-full">
                South Indian
              </span>
              <span className="bg-customLight p-3 rounded-full">
                North Indian
              </span>
              <span className="bg-customLight p-3 rounded-full">Dinner</span>
              <span className="bg-customLight p-3 rounded-full">Pure Veg</span>
              <span className="bg-customLight p-3 rounded-full col-span-2">
                Non Veg
              </span>
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-3 flex justify-between">
              <span className=" font-semibold text-xs">RECENTS</span>
              <button className="text-primaryDefault text-xs">CLEAR ALL</button>
            </div>
            <div className="">
              {["Biryani", "Dosa", "Veg Pakoda", "Chicken Tikka"].map(
                (data, index) => {
                  return (
                    <div className="grid grid-cols-12 mb-5" key={index}>
                      <span className="col-span-2 mx-auto">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0.833496C15.0628 0.833496 19.1667 4.93741 19.1667 10.0002C19.1667 15.0629 15.0628 19.1668 10 19.1668C4.93725 19.1668 0.833333 15.0629 0.833333 10.0002H2.66667C2.66667 14.05 5.95017 17.3335 10 17.3335C14.0498 17.3335 17.3333 14.05 17.3333 10.0002C17.3333 5.95033 14.0498 2.66683 10 2.66683C7.47917 2.66683 5.25533 3.93825 3.93625 5.87516H6.33333V7.7085H0.833333V2.2085H2.66667V4.50016C4.33867 2.27266 7.00158 0.833496 10 0.833496ZM10.9167 5.41683V9.61975L13.8894 12.5925L12.5923 13.8896L9.08333 10.3787V5.41683H10.9167Z"
                            fill="#A3A3A3"
                          />
                        </svg>
                      </span>
                      <span className="col-span-9">{data}</span>
                      <span className="my-auto">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.99999 4.704L10.5375 0.166504L11.8337 1.46267L7.29615 6.00017L11.8337 10.5377L10.5375 11.8338L5.99999 7.29634L1.46249 11.8338L0.166321 10.5377L4.70382 6.00017L0.166321 1.46267L1.46249 0.166504L5.99999 4.704Z"
                            fill="#A3A3A3"
                          />
                        </svg>
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-10"></section>
        <section className="fixed text-customGray w-full bg-white bottom-0">
          <div className="flex justify-between my-3 w-10/12 mx-auto">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 16.3331C17.25 16.5762 17.1534 16.8094 16.9815 16.9813C16.8096 17.1532 16.5764 17.2498 16.3333 17.2498H1.66667C1.42355 17.2498 1.19039 17.1532 1.01849 16.9813C0.846577 16.8094 0.75 16.5762 0.75 16.3331V6.69893C0.749903 6.55924 0.781732 6.42138 0.843056 6.29587C0.90438 6.17036 0.993577 6.06053 1.10383 5.97476L8.43717 0.271261C8.59808 0.146086 8.79613 0.078125 9 0.078125C9.20387 0.078125 9.40192 0.146086 9.56283 0.271261L16.8962 5.97476C17.0064 6.06053 17.0956 6.17036 17.1569 6.29587C17.2183 6.42138 17.2501 6.55924 17.25 6.69893V16.3331ZM15.4167 15.4164V7.14626L9 2.15593L2.58333 7.14626V15.4164H15.4167Z"
                fill="#2D2D2D"
              />
            </svg>

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_185_1099)">
                <path
                  d="M10.0833 1.8335C14.6373 1.8335 18.3333 5.5295 18.3333 10.0835C18.3333 14.6375 14.6373 18.3335 10.0833 18.3335C5.52934 18.3335 1.83334 14.6375 1.83334 10.0835C1.83334 5.5295 5.52934 1.8335 10.0833 1.8335ZM10.0833 16.5002C13.6281 16.5002 16.5 13.6282 16.5 10.0835C16.5 6.53783 13.6281 3.66683 10.0833 3.66683C6.53767 3.66683 3.66667 6.53783 3.66667 10.0835C3.66667 13.6282 6.53767 16.5002 10.0833 16.5002ZM17.8613 16.5652L20.4545 19.1576L19.1574 20.4547L16.5651 17.8614L17.8613 16.5652Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_1099">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_185_1102)">
                <path
                  d="M14.0855 3.15137L17.0289 8.24987H20.1667V10.0832H19.0969L18.403 18.4093C18.3839 18.6383 18.2795 18.8519 18.1104 19.0076C17.9413 19.1633 17.7199 19.2497 17.49 19.2499H4.50999C4.28014 19.2497 4.05872 19.1633 3.88961 19.0076C3.72051 18.8519 3.61607 18.6383 3.59699 18.4093L2.90216 10.0832H1.83333V8.24987H4.97016L7.91449 3.15137L9.50216 4.06803L7.08766 8.24987H14.9114L12.4978 4.06803L14.0855 3.15137ZM17.2572 10.0832H4.74191L5.35333 17.4165H16.6457L17.2572 10.0832ZM11.9167 11.9165V15.5832H10.0833V11.9165H11.9167ZM8.25 11.9165V15.5832H6.41666V11.9165H8.25ZM15.5833 11.9165V15.5832H13.75V11.9165H15.5833Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_1102">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_185_1105)">
                <path
                  d="M11.0009 4.15156C13.1542 2.21831 16.4817 2.28248 18.5561 4.36057C20.6296 6.43957 20.7011 9.75057 18.7724 11.9102L10.9991 19.6946L3.22758 11.9102C1.29892 9.75057 1.37133 6.43407 3.44392 4.36057C5.52017 2.28523 8.84125 2.21556 11.0009 4.15156ZM17.2581 5.65582C15.8831 4.27898 13.6648 4.22307 12.2256 5.51557L11.0018 6.61373L9.77717 5.51648C8.33342 4.22215 6.11967 4.27898 4.741 5.65765C3.37517 7.02348 3.30642 9.20973 4.565 10.6544L11 17.0995L17.435 10.6553C18.6945 9.20973 18.6258 7.02623 17.2581 5.65582Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_1105">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_185_1108)">
                <path
                  d="M18.3333 20.1665H16.5V18.3332C16.5 17.6038 16.2103 16.9044 15.6945 16.3886C15.1788 15.8729 14.4793 15.5832 13.75 15.5832H8.24999C7.52064 15.5832 6.82117 15.8729 6.30545 16.3886C5.78972 16.9044 5.49999 17.6038 5.49999 18.3332V20.1665H3.66666V18.3332C3.66666 17.1176 4.14954 15.9518 5.00908 15.0923C5.86863 14.2327 7.03441 13.7498 8.24999 13.7498H13.75C14.9656 13.7498 16.1314 14.2327 16.9909 15.0923C17.8504 15.9518 18.3333 17.1176 18.3333 18.3332V20.1665ZM11 11.9165C10.2777 11.9165 9.56252 11.7742 8.89523 11.4978C8.22794 11.2214 7.62162 10.8163 7.1109 10.3056C6.60018 9.79487 6.19505 9.18855 5.91865 8.52126C5.64225 7.85397 5.49999 7.13877 5.49999 6.4165C5.49999 5.69423 5.64225 4.97904 5.91865 4.31175C6.19505 3.64445 6.60018 3.03814 7.1109 2.52742C7.62162 2.01669 8.22794 1.61157 8.89523 1.33517C9.56252 1.05877 10.2777 0.916504 11 0.916504C12.4587 0.916504 13.8576 1.49597 14.8891 2.52742C15.9205 3.55887 16.5 4.95781 16.5 6.4165C16.5 7.8752 15.9205 9.27414 14.8891 10.3056C13.8576 11.337 12.4587 11.9165 11 11.9165ZM11 10.0832C11.9724 10.0832 12.9051 9.69686 13.5927 9.00923C14.2803 8.3216 14.6667 7.38897 14.6667 6.4165C14.6667 5.44404 14.2803 4.51141 13.5927 3.82378C12.9051 3.13615 11.9724 2.74984 11 2.74984C10.0275 2.74984 9.0949 3.13615 8.40726 3.82378C7.71963 4.51141 7.33332 5.44404 7.33332 6.4165C7.33332 7.38897 7.71963 8.3216 8.40726 9.00923C9.0949 9.69686 10.0275 10.0832 11 10.0832Z"
                  fill="#2D2D2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_1108">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </section>
    </>
  );
}
