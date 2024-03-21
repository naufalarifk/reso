export const Footer = () => {
  return (
    <footer className="py-10 bg-black">
      <div className="layout">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-full  lg:col-span-1 lg:block">
            <div>
              <img src="/images/brand.png" className="w-max h-7" alt="" />
              <div className="text-darkSoft mt-7 text-sm ">
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-span-full   lg:col-span-1 lg:block">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  About
                </h2>
                <ul className="text-darkSoft font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      In Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-darkSoft font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Online Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Whatsapp
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Ticketing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  FAQ
                </h2>
                <ul className="text-darkSoft font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Online Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Whatsapp
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underlin text-sm font-light">
                      Ticketing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
