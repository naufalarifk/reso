import { Footer, Header } from "@/components";

export const Privacy = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative h-full lg:max-h-[550px] ">
        <div className="layout relative z-10 py-28">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <div className="text-3xl lg:text-5xl font-bold mb-8">
                Reso Exchange - Privacy Policy
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
              1. Information We Collect
            </div>
            <div className="text-2xl text-white font-medium">
              1.1. Account Information:
            </div>
            <div className="text-soft text-base">
              When you register on Reso, we collect information such as your
              name, email address, and encrypted password. You may also provide
              additional details during the KYC (Know Your Customer) process,
              including a national identity document.
            </div>
            <div className="text-2xl text-white font-medium">
              1.2. Transaction Data
            </div>
            <div className="text-soft text-base">
              We collect information related to your crypto trades, deposits,
              and withdrawals on the Reso platform. This includes transaction
              history, wallet addresses, and timestamps.
            </div>
            <div className="text-2xl text-white font-medium">
              1.3. Communication
            </div>
            <div className="text-soft text-base">
              When you contact our support team or communicate with us via
              email, we may collect and store the content of those
              communications.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              2. How We Use Your Information
            </div>
            <div className="text-2xl text-white font-medium">
              2.1 Account Management
            </div>
            <div className="text-soft text-base">
              We use your account information to create and manage your Reso
              Crypto Exchange account, process transactions, and ensure the
              security of your account.
            </div>
            <div className="text-2xl text-white font-medium">
              2.2 KYC Verification
            </div>
            <div className="text-soft text-base">
              During the KYC process, we collect and verify your national
              identity document to comply with regulatory requirements and
              enhance the security of our platform.
            </div>
            <div className="text-2xl text-white font-medium">
              2.3. Transactions
            </div>
            <div className="text-soft text-base">
              Your transaction data is used to facilitate crypto trades,
              deposits, and withdrawals as requested by you.
            </div>
            <div className="text-2xl text-white font-medium">
              2.4. Communication
            </div>
            <div className="text-soft text-base">
              We may use your contact information to send important updates,
              notifications, and service-related communications. Your email will
              never be shared with third parties for marketing purposes.
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              3. Data Security
            </div>
            <div className="text-2xl text-white font-medium">
              3.1. Reso employs advanced security measures
            </div>
            <div className="text-soft text-base">
              Reso employs advanced security measures to protect your personal
              and financial information. This includes encryption, secure socket
              layer (SSL) technology, and regular security audits.
            </div>
            <div className="text-2xl text-white font-medium">
              3.2. National identity documents provided during KYC
            </div>
            <div className="text-soft text-base">
              National identity documents provided during KYC are securely
              stored and accessed only for verification purposes, complying with
              applicable legal and regulatory standards.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              4. Sharing of Information
            </div>
            <div className="text-2xl text-white font-medium">
              4.1. Reso does not sell or share your personal
            </div>
            <div className="text-soft text-base">
              Reso does not sell or share your personal information with third
              parties for marketing purposes. We may share your information with
              trusted partners and service providers to enhance the
              functionality and security of our platform.
            </div>
            <div className="text-2xl text-white font-medium">
              4.2. We may disclose your information
            </div>
            <div className="text-soft text-base">
              We may disclose your information in response to legal requests,
              enforce our policies, or protect the rights, property, or safety
              of Reso, its users, or others.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              5. Cookies and Analytics
            </div>
            <div className="text-2xl text-white font-medium">
              5.1. Reso uses cookies to improve user experience
            </div>
            <div className="text-soft text-base">
              Reso uses cookies to improve user experience and collect data for
              analytics purposes. Cookies can be disabled in your browser
              settings, but some features of the website may not function
              properly.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-3xl font-medium">
              6. Changes to Privacy Policy
            </div>

            <div className="text-soft text-base">
              Reso reserves the right to update or modify this Privacy Policy at
              any time. Users are encouraged to review the policy regularly. By
              continuing to use the Reso Crypto Exchange, you agree to the most
              current version of this Privacy Policy. For any questions or
              concerns regarding our Privacy Policy, please contact us at
              support@Reso.io. This Privacy Policy was last updated on [Date].
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
