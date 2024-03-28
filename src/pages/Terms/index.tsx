import { IcWave } from "@/assets/icons";
import { Footer, Header } from "@/components";

export const Terms = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative md:bg-dark2 h-full lg:max-h-[550px] ">
        <div className="layout relative z-10 pt-32 md:py-28">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <div className="text-xl lg:text-5xl font-bold mb-8">
                Reso Exchange - Terms and Conditions
              </div>
              <div className="text-sm lg:text-base font-normal mb-16 text-soft">
                Please read these terms and conditions carefully before using
                the Reso Crypto Exchange website{" "}
                <a className="text-primary underline" href="/">
                  (https://reso.io/)
                </a>{" "}
                operated by Reso.
              </div>
              <div className="text-xs md:text-base text-soft">
                Last updated: January 22, 2024
              </div>
            </div>
            <div className="hidden md:block">
              <img className="scale-90" src="/images/private.png" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute w-full  hidden lg:block bottom-0">
          <IcWave />
        </div>
      </div>

      <div className="relative">
        <div className="layout my-10 space-y-10">
          <div className="space-y-3">
            <div className="text-primary font-dm text-base  lg:text-3xl font-medium">
              1. Acceptance of Terms
            </div>
            <div className="text-soft text-sm lg:text-base">
              By accessing or using the Reso Crypto Exchange website and
              services, you agree to be bound by these Terms and Conditions. If
              you do not agree to all the terms and conditions, please do not
              use our services.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              2. Account Registration
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              2.1. To use Reso Crypto Exchange
            </div>
            <div className="text-soft text-sm lg:text-base">
              To use Reso Crypto Exchange, users must register an account by
              providing a valid email address and completing the KYC (Know Your
              Customer) process, which may include submitting a national
              identity document.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              2.2. Users are responsible for maintaining
            </div>
            <div className="text-soft text-sm lg:text-base">
              Users are responsible for maintaining the confidentiality of their
              account information and must not share their login credentials
              with others.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              2.3. Reso reserves the right to refuse service
            </div>
            <div className="text-soft text-sm lg:text-base">
              Reso reserves the right to refuse service, terminate accounts, or
              remove or edit content in its sole discretion
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              3. Trading and Transactions
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              3.1. Reso provides a centralized
            </div>
            <div className="text-soft text-sm lg:text-base">
              Reso provides a centralized crypto exchange platform where users
              can trade cryptocurrencies.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              3.2. Users can deposit and withdraw
            </div>
            <div className="text-soft text-sm lg:text-base">
              Users can deposit and withdraw cryptocurrencies as supported by
              the platform.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              3.3. All transactions on Reso Crypto Exchange
            </div>
            <div className="text-soft text-sm lg:text-base">
              All transactions on Reso Crypto Exchange are subject to applicable
              fees, which will be clearly communicated during the transaction
              process.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              4. KYC and National Identity Documents
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              4.1. Users are required to undergo the KYC process
            </div>
            <div className="text-soft text-sm lg:text-base">
              Users are required to undergo the KYC process, which may include
              submitting a national identity document, to comply with regulatory
              requirements and enhance the security of the platform.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              4.2. National identity documents provided during KYC
            </div>
            <div className="text-soft text-sm lg:text-base">
              National identity documents provided during KYC are securely
              stored and accessed only for verification purposes, complying with
              applicable legal and regulatory standards.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              5. Privacy and Data Security
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              5.1. Reso is committed to protecting user privacy
            </div>
            <div className="text-soft text-sm lg:text-base">
              Reso is committed to protecting user privacy. Personal and
              financial information is handled in accordance with our Privacy
              Policy.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              5.2. Reso never shares user data
            </div>
            <div className="text-soft text-sm lg:text-base">
              Reso never shares user data with third parties for marketing
              purposes.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              6. Prohibited Activities
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              6.1. Users agree not to engage in any illegal or unauthorized
              activities
            </div>
            <div className="text-soft text-sm lg:text-base">
              Users agree not to engage in any illegal or unauthorized
              activities on the Reso Crypto Exchange, including but not limited
              to fraud, money laundering, and unauthorized access to Reso
              systems.
            </div>
            <div className="text-base lg:text-2xl text-white font-medium">
              6.2. Reso reserves the right to investigate
            </div>
            <div className="text-soft text-sm lg:text-base">
              Reso reserves the right to investigate and take appropriate legal
              action against anyone engaging in prohibited activities.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              7. Support
            </div>
            <div className="text-soft text-sm lg:text-base">
              For assistance with any issues related to the Reso Crypto
              Exchange, users can contact our support team at support@Reso.io.
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-primary mb-4 font-dm text-base lg:text-3xl font-medium">
              8. Changes to Terms and Conditions
            </div>
            <div className="text-soft text-sm lg:text-base">
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
