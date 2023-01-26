export default function Home() {
  return (
    <>
      <section className="flex flex-col h-screen justify-between">
        <section className="w-10/12 mx-auto my-5">
          <div className="mb-10 flex justify-between">
            <div className="text-customDark font-semibold">
              Hello, <span className="text-primaryDefault">John</span>!
            </div>
            <div className="flex font-semibold">
              <span className="my-auto text-secondaryDefault text-xs">
                HOME
              </span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_50_775)">
                  <path
                    d="M11 21.7508L5.16634 15.9171C4.01256 14.7633 3.22684 13.2933 2.90852 11.693C2.5902 10.0926 2.75358 8.43382 3.37801 6.92633C4.00243 5.41885 5.05986 4.13038 6.41656 3.22386C7.77326 2.31735 9.36831 1.8335 11 1.8335C12.6317 1.8335 14.2267 2.31735 15.5834 3.22386C16.9401 4.13038 17.9976 5.41885 18.622 6.92633C19.2464 8.43382 19.4098 10.0926 19.0915 11.693C18.7732 13.2933 17.9874 14.7633 16.8337 15.9171L11 21.7508ZM15.5375 14.6209C16.4348 13.7235 17.0459 12.5802 17.2934 11.3355C17.541 10.0908 17.4138 8.80064 16.9282 7.62818C16.4425 6.45573 15.62 5.45362 14.5648 4.74858C13.5096 4.04354 12.2691 3.66722 11 3.66722C9.73093 3.66722 8.49036 4.04354 7.43516 4.74858C6.37996 5.45362 5.55752 6.45573 5.07184 7.62818C4.58616 8.80064 4.45905 10.0908 4.70658 11.3355C4.95412 12.5802 5.56518 13.7235 6.4625 14.6209L11 19.1584L15.5375 14.6209ZM11 11.9168C10.5138 11.9168 10.0475 11.7236 9.70364 11.3798C9.35982 11.036 9.16667 10.5697 9.16667 10.0834C9.16667 9.59719 9.35982 9.13088 9.70364 8.78706C10.0475 8.44325 10.5138 8.25009 11 8.25009C11.4862 8.25009 11.9525 8.44325 12.2964 8.78706C12.6402 9.13088 12.8333 9.59719 12.8333 10.0834C12.8333 10.5697 12.6402 11.036 12.2964 11.3798C11.9525 11.7236 11.4862 11.9168 11 11.9168Z"
                    fill="#F99928"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_50_775">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="bg-primaryLight p-4 flex flex-col rounded-lg text-white font-semibold">
            <div className="mb-3">
              GET <span className="text-customDark text-2xl">50%</span> AS A
              JOINING BONUS
            </div>
            <div className=" text-sm">use code on checkout</div>
            <div className="text-customDark text-2xl">NEW50</div>
          </div>
        </section>
        <section className="w-10/12 mx-auto mb-5">
          <div className="mb-5">
            <h3 className="mb-3 text-xs font-semibold">RECOMMENDED FOR YOU</h3>
            <div className="flex space-x-2">
              <div className="w-full rounded-xl shadow-lg">
                <div className="relative h-36">
                  <img
                    src={"./public/image1.jfif"}
                    alt=""
                    className="w-full h-36 object-cover rounded-xl absolute"
                  />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-10 bottom-0 right-0"
                  >
                    <g filter="url(#filter0_b_185_687)">
                      <rect
                        width="22"
                        height="22"
                        rx="5"
                        fill="white"
                        fillOpacity="0.2"
                      />
                    </g>
                    <g clipPath="url(#clip0_185_687)">
                      <path
                        d="M11.0007 5.39673C12.7625 3.81498 15.485 3.86748 17.1822 5.56774C18.8787 7.26874 18.9372 9.97774 17.3592 11.7447L10.9992 18.1137L4.64074 11.7447C3.06274 9.97774 3.12199 7.26424 4.81774 5.56774C6.51649 3.86973 9.23374 3.81273 11.0007 5.39673ZM16.1202 6.62749C14.9952 5.50099 13.1802 5.45524 12.0027 6.51274L11.0015 7.41124L9.99949 6.51349C8.81824 5.45449 7.00699 5.50099 5.87899 6.62899C4.76149 7.74649 4.70524 9.53524 5.73499 10.7172L11 15.9905L16.265 10.718C17.2955 9.53523 17.2392 7.74874 16.1202 6.62749Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_185_687"
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
                          result="effect1_backgroundBlur_185_687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_185_687"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_185_687">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative p-3 space-y-2">
                  <span className="text-customDark">Egg Salad</span>
                  <div className="flex justify-between">
                    <span className="text-primaryDefault">$5.00</span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="22" height="22" rx="5" fill="#2FDBBC" />
                      <g clipPath="url(#clip0_185_682)">
                        <path
                          d="M13.5245 4.57861L15.9327 8.75011H18.5V10.2501H17.6247L17.057 17.0624C17.0414 17.2498 16.9559 17.4245 16.8176 17.5519C16.6792 17.6793 16.4981 17.75 16.31 17.7501H5.68999C5.50193 17.75 5.32076 17.6793 5.18241 17.5519C5.04405 17.4245 4.9586 17.2498 4.94299 17.0624L4.37449 10.2501H3.49999V8.75011H6.06649L8.47549 4.57861L9.77449 5.32861L7.79899 8.75011H14.2002L12.2255 5.32861L13.5245 4.57861ZM16.1195 10.2501H5.87974L6.37999 16.2501H15.6192L16.1195 10.2501ZM11.75 11.7501V14.7501H10.25V11.7501H11.75ZM8.74999 11.7501V14.7501H7.24999V11.7501H8.74999ZM14.75 11.7501V14.7501H13.25V11.7501H14.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_185_682">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(2 2)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl shadow-lg">
                <div className="relative h-36">
                  <img
                    src={"./public/image2.jfif"}
                    alt=""
                    className="w-full h-36 object-cover rounded-xl absolute"
                  />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-10 bottom-0 right-0"
                  >
                    <g filter="url(#filter0_b_185_687)">
                      <rect
                        width="22"
                        height="22"
                        rx="5"
                        fill="white"
                        fillOpacity="0.2"
                      />
                    </g>
                    <g clipPath="url(#clip0_185_687)">
                      <path
                        d="M11.0007 5.39673C12.7625 3.81498 15.485 3.86748 17.1822 5.56774C18.8787 7.26874 18.9372 9.97774 17.3592 11.7447L10.9992 18.1137L4.64074 11.7447C3.06274 9.97774 3.12199 7.26424 4.81774 5.56774C6.51649 3.86973 9.23374 3.81273 11.0007 5.39673ZM16.1202 6.62749C14.9952 5.50099 13.1802 5.45524 12.0027 6.51274L11.0015 7.41124L9.99949 6.51349C8.81824 5.45449 7.00699 5.50099 5.87899 6.62899C4.76149 7.74649 4.70524 9.53524 5.73499 10.7172L11 15.9905L16.265 10.718C17.2955 9.53523 17.2392 7.74874 16.1202 6.62749Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_185_687"
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
                          result="effect1_backgroundBlur_185_687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_185_687"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_185_687">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative p-3 space-y-2">
                  <span className="text-customDark">Grilled Salmon</span>
                  <div className="flex justify-between">
                    <span className="text-primaryDefault">$15.00</span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="22" height="22" rx="5" fill="#2FDBBC" />
                      <g clipPath="url(#clip0_185_682)">
                        <path
                          d="M13.5245 4.57861L15.9327 8.75011H18.5V10.2501H17.6247L17.057 17.0624C17.0414 17.2498 16.9559 17.4245 16.8176 17.5519C16.6792 17.6793 16.4981 17.75 16.31 17.7501H5.68999C5.50193 17.75 5.32076 17.6793 5.18241 17.5519C5.04405 17.4245 4.9586 17.2498 4.94299 17.0624L4.37449 10.2501H3.49999V8.75011H6.06649L8.47549 4.57861L9.77449 5.32861L7.79899 8.75011H14.2002L12.2255 5.32861L13.5245 4.57861ZM16.1195 10.2501H5.87974L6.37999 16.2501H15.6192L16.1195 10.2501ZM11.75 11.7501V14.7501H10.25V11.7501H11.75ZM8.74999 11.7501V14.7501H7.24999V11.7501H8.74999ZM14.75 11.7501V14.7501H13.25V11.7501H14.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_185_682">
                          <rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(2 2)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-3 text-xs font-semibold">RESTAURANTS</h3>
            <div className="space-x-5 flex">
              <div className="shadow-md inline-block rounded-2xl">
                <img
                  src="./public/restaurant1.png"
                  alt=""
                  className="h-14 rounded-2xl"
                />
              </div>
              <div className="shadow-md inline-block rounded-2xl">
                <img
                  src="./public/restaurant2.png"
                  alt=""
                  className="h-14 rounded-2xl"
                />
              </div>
              <div className="shadow-md inline-block rounded-2xl">
                <img
                  src="./public/restaurant3.png"
                  alt=""
                  className="h-14 rounded-2xl"
                />
              </div>
              <div className="shadow-md inline-block rounded-2xl">
                <img
                  src="./public/restaurant4.png"
                  alt=""
                  className="h-14 rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-3 text-xs font-semibold">POPULAR LOCATION</h3>
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
              <g clip-path="url(#clip0_185_1099)">
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
              <g clip-path="url(#clip0_185_1102)">
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
              <g clip-path="url(#clip0_185_1105)">
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
              <g clip-path="url(#clip0_185_1108)">
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
