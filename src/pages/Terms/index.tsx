import { Footer, Header } from "@/components";

export const Terms = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative h-full lg:max-h-[550px] ">
        <div className="layout relative z-10 py-28">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <div className="text-3xl lg:text-5xl font-bold mb-8">
                Reso Exchange - Terms and Conditions
              </div>
              <div className="text-base font-normal mb-16">
                Please read these terms and conditions carefully before using
                the Reso Crypto Exchange website{" "}
                <a className="text-primary underline" href="/">
                  (https://reso.io/)
                </a>{" "}
                operated by Reso.
              </div>
              <div>Last updated: January 22, 2024</div>
            </div>
            <div>
              <img className="scale-90" src="/images/private.png" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute w-full  hidden lg:block bottom-0">
          <svg
            viewBox="0 0 1920 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.25"
              d="M854.174 386.617C449.236 185.357 43.3338 302.759 -109 386.617V670L1988 649.758V56.9667L1915.69 -24C1915.69 242.033 1360.35 638.192 854.174 386.617Z"
              fill="url(#paint0_radial_1029_1326)"
              fill-opacity="0.5"
            />
            <path
              opacity="0.25"
              d="M865.174 328.617C460.236 127.357 54.3338 244.759 -98 328.617V612L1999 591.758V-1.03333L1926.69 -82C1926.69 184.033 1371.35 580.192 865.174 328.617Z"
              fill="url(#paint1_radial_1029_1326)"
              fill-opacity="0.4"
            />
            <path
              opacity="0.25"
              d="M894.174 271.617C489.236 70.3568 83.3338 187.759 -69 271.617V555L2028 534.758V-58.0333L1955.69 -139C1955.69 127.033 1400.35 523.192 894.174 271.617Z"
              fill="url(#paint2_radial_1029_1326)"
              fill-opacity="0.3"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1029_1326"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-22.171 -24) scale(1897.13 1561.82)"
              >
                <stop stop-color="#040102" />
                <stop offset="0.480031" stop-color="#FE9F00" />
                <stop offset="1" stop-color="white" stop-opacity="0.05" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1029_1326"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-11.171 -82) scale(1897.13 1561.82)"
              >
                <stop stop-color="#040102" />
                <stop offset="0.480031" stop-color="#FE9F00" />
                <stop offset="1" stop-color="white" stop-opacity="0.05" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1029_1326"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.829 -139) scale(1897.13 1561.82)"
              >
                <stop stop-color="#040102" />
                <stop offset="0.480031" stop-color="#FE9F00" />
                <stop offset="1" stop-color="white" stop-opacity="0.05" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative">
        <div className="absolute hidden lg:block gradient_terms w-[300px] h-[550px] opacity-45 top-[20%] right-0" />
        <div className="layout my-10 space-y-10">
          <div className="space-y-3">
            <div className="text-primary font-dm  lg:text-3xl font-medium">
              1. Acceptance of Terms
            </div>
            <div className="text-soft text-base">
              By accessing or using the Reso Crypto Exchange website and
              services, you agree to be bound by these Terms and Conditions. If
              you do not agree to all the terms and conditions, please do not
              use our services.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              2. Account Registration
            </div>
            <div className="text-2xl text-white font-medium">
              2.1. To use Reso Crypto Exchange
            </div>
            <div className="text-soft text-base">
              To use Reso Crypto Exchange, users must register an account by
              providing a valid email address and completing the KYC (Know Your
              Customer) process, which may include submitting a national
              identity document.
            </div>
            <div className="text-2xl text-white font-medium">
              2.2. Users are responsible for maintaining
            </div>
            <div className="text-soft text-base">
              Users are responsible for maintaining the confidentiality of their
              account information and must not share their login credentials
              with others.
            </div>
            <div className="text-2xl text-white font-medium">
              2.3. Reso reserves the right to refuse service
            </div>
            <div className="text-soft text-base">
              Reso reserves the right to refuse service, terminate accounts, or
              remove or edit content in its sole discretion
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              3. Trading and Transactions
            </div>
            <div className="text-2xl text-white font-medium">
              3.1. Reso provides a centralized
            </div>
            <div className="text-soft text-base">
              Reso provides a centralized crypto exchange platform where users
              can trade cryptocurrencies.
            </div>
            <div className="text-2xl text-white font-medium">
              3.2. Users can deposit and withdraw
            </div>
            <div className="text-soft text-base">
              Users can deposit and withdraw cryptocurrencies as supported by
              the platform.
            </div>
            <div className="text-2xl text-white font-medium">
              3.3. All transactions on Reso Crypto Exchange
            </div>
            <div className="text-soft text-base">
              All transactions on Reso Crypto Exchange are subject to applicable
              fees, which will be clearly communicated during the transaction
              process.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              4. KYC and National Identity Documents
            </div>
            <div className="text-2xl text-white font-medium">
              4.1. Users are required to undergo the KYC process
            </div>
            <div className="text-soft text-base">
              Users are required to undergo the KYC process, which may include
              submitting a national identity document, to comply with regulatory
              requirements and enhance the security of the platform.
            </div>
            <div className="text-2xl text-white font-medium">
              4.2. National identity documents provided during KYC
            </div>
            <div className="text-soft text-base">
              National identity documents provided during KYC are securely
              stored and accessed only for verification purposes, complying with
              applicable legal and regulatory standards.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              5. Privacy and Data Security
            </div>
            <div className="text-2xl text-white font-medium">
              5.1. Reso is committed to protecting user privacy
            </div>
            <div className="text-soft text-base">
              Reso is committed to protecting user privacy. Personal and
              financial information is handled in accordance with our Privacy
              Policy.
            </div>
            <div className="text-2xl text-white font-medium">
              5.2. Reso never shares user data
            </div>
            <div className="text-soft text-base">
              Reso never shares user data with third parties for marketing
              purposes.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              6. Prohibited Activities
            </div>
            <div className="text-2xl text-white font-medium">
              6.1. Users agree not to engage in any illegal or unauthorized
              activities
            </div>
            <div className="text-soft text-base">
              Users agree not to engage in any illegal or unauthorized
              activities on the Reso Crypto Exchange, including but not limited
              to fraud, money laundering, and unauthorized access to Reso
              systems.
            </div>
            <div className="text-2xl text-white font-medium">
              6.2. Reso reserves the right to investigate
            </div>
            <div className="text-soft text-base">
              Reso reserves the right to investigate and take appropriate legal
              action against anyone engaging in prohibited activities.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              7. Support
            </div>
            <div className="text-soft text-base">
              For assistance with any issues related to the Reso Crypto
              Exchange, users can contact our support team at support@Reso.io.
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              8. Changes to Terms and Conditions
            </div>
            <div className="text-soft text-base">
              Reso reserves the right to update or modify these Terms and
              Conditions at any time without prior notice. Users are encouraged
              to review the terms regularly. By using the Reso Crypto Exchange,
              you agree to be bound by the most current version of these Terms
              and Conditions . These Terms and Conditions were last updated on
              [Date].
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
