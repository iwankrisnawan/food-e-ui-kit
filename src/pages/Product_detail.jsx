export default function Product_detail() {
  return (
    <>
      <section className="flex flex-col">
        <section className="w-full relative h-80">
          <img
            src={"./public/image1.jfif"}
            alt=""
            className="w-full object-cover absolute max-h-full"
          />
          <div className="flex justify-between w-11/12 mx-auto relative my-10">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_50_800)">
                  <rect
                    width="22"
                    height="22"
                    rx="5"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </g>
                <g clipPath="url(#clip0_50_800)">
                  <path
                    d="M10.121 11.0001L13.8335 14.7126L12.773 15.7731L8 11.0001L12.773 6.22705L13.8335 7.28755L10.121 11.0001Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_50_800"
                    x="-5"
                    y="-5"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_50_800"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_50_800"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_50_800">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(2 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_50_901)">
                  <rect
                    width="22"
                    height="22"
                    rx="5"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </g>
                <g clipPath="url(#clip0_50_901)">
                  <path
                    d="M11 4.25C10.3813 4.25 9.875 4.75625 9.875 5.375C9.875 5.99375 10.3813 6.5 11 6.5C11.6187 6.5 12.125 5.99375 12.125 5.375C12.125 4.75625 11.6187 4.25 11 4.25ZM11 15.5C10.3813 15.5 9.875 16.0063 9.875 16.625C9.875 17.2437 10.3813 17.75 11 17.75C11.6187 17.75 12.125 17.2437 12.125 16.625C12.125 16.0063 11.6187 15.5 11 15.5ZM11 9.875C10.3813 9.875 9.875 10.3813 9.875 11C9.875 11.6187 10.3813 12.125 11 12.125C11.6187 12.125 12.125 11.6187 12.125 11C12.125 10.3813 11.6187 9.875 11 9.875Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_50_901"
                    x="-5"
                    y="-5"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_50_901"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_50_901"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_50_901">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(2 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" space-x-3">
              <button className="bg-primaryLight w-12 h-1 inline-block rounded-2xl"></button>
              <button className="bg-customLight w-6 h-1 inline-block rounded-2xl"></button>
              <button className="bg-customLight w-6 h-1 inline-block rounded-2xl"></button>
            </div>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-10">
          <div className="my-5">
            <div className="flex justify-between">
              <h2 className="font-bold">SALMON</h2>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99998 19.1666C4.93723 19.1666 0.833313 15.0627 0.833313 9.99992C0.833313 4.93717 4.93723 0.833252 9.99998 0.833252C15.0627 0.833252 19.1666 4.93717 19.1666 9.99992C19.1666 15.0627 15.0627 19.1666 9.99998 19.1666ZM9.99998 17.3333C11.9449 17.3333 13.8102 16.5606 15.1854 15.1854C16.5607 13.8101 17.3333 11.9448 17.3333 9.99992C17.3333 8.055 16.5607 6.18974 15.1854 4.81447C13.8102 3.4392 11.9449 2.66659 9.99998 2.66659C8.05506 2.66659 6.1898 3.4392 4.81453 4.81447C3.43926 6.18974 2.66665 8.055 2.66665 9.99992C2.66665 11.9448 3.43926 13.8101 4.81453 15.1854C6.1898 16.5606 8.05506 17.3333 9.99998 17.3333ZM10.9166 9.99992H14.5833V11.8333H9.08331V5.41659H10.9166V9.99992Z"
                  fill="#F99928"
                />
              </svg>
            </div>
            <div className="flex justify-between">
              <span className="text-secondaryDefault font-semibold">
                The Nautilus
              </span>
              <span className="text-secondaryDefault">34 mins</span>
            </div>
          </div>
          <div className="mb-5">
            <span className="font-bold text-xs">DESCRIPTION</span>
            <p className="text-customGray">
              Non odit iusto delectus maxime sit placeat voluptatum dolorem.
              Dolores quos rerum iusto. Beatae totam ab veritatis aliquid
              tenetur qui ut. Quia ut dolorum enim et. Exercitationem occaecati
              eum est ex qui harum aliquam.
            </p>
          </div>
          <div className="flex justify-between mb-5">
            <div className="w-6/12">
              <span className="font-semibold text-primaryDefault text-xs">
                QUANTITY
              </span>
              <div className="flex space-x-5 bg-customLight p-2 rounded-2xl">
                <span className="w-full">1</span>
                <button className="text-primaryDefault">
                  <svg
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.583313 0.083252H13.4166V1.91658H0.583313V0.083252Z"
                      fill="#2FDBBC"
                    />
                  </svg>
                </button>
                <button className="text-primaryDefault">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.08331 6.08325V0.583252H7.91665V6.08325H13.4166V7.91659H7.91665V13.4166H6.08331V7.91659H0.583313V6.08325H6.08331Z"
                      fill="#2FDBBC"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my-auto text-right">
              <div className="font-semibold text-xs">SUB TOTAL</div>
              <div className="text-primaryDefault text-2xl font-semibold">$ 15.00</div>
            </div>
          </div>

          <div className="mb-5 py-2 flex justify-center bg-primaryDefault rounded-full text-white font-semibold">
            ADD TO BASKET
          </div>
        </section>
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
