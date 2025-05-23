import ContactFormWrapper from "@/components/UI/Forms/ContactUsForm/ContactFormWrapper";
import {
  CarbonLocationFilled,
  IcOutlineEmail,
  MdiInstagram,
  RiFacebookFill,
  SolarPhoneCallingOutline,
} from "@/icons/Icons";
export default function page() {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-between gap-8 py-12 scroll-m-10"
    >
      {/* head */}

      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-[40px] text-orange">Contact Us</h1>
        <p className="text-darkBlue font-medium text-lg">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      {/* end head */}

      <div className="flex-1 rounded-lg grid grid-cols-1 lg:grid-cols-5 bg-white p-3">
        {/* left side */}
        <div className="h-full col-span-1 lg:col-span-2 p-3 lg:p-10 bg-[#011C2B] rounded-lg flex flex-col justify-between gap-y-4">
          {/* top */}
          <div className="flex flex-col items-center">
            <h2 className="font-semibold text-xl lg:text-[28px]">
              Contact Information
            </h2>
            <p className="text-sm lg:text-lg text-[#C9C9C9]">
              Say something to start a live chat!
            </p>
          </div>
          {/* end top */}

          {/* center - contact info */}
          <div className="flex flex-col gap-6">
            {/* phone numbers */}
            <div className="flex flex-col lg:flex-row items-center gap-3">
              {/* icon */}
              <div className="fill-white stroke-white">
                <SolarPhoneCallingOutline width={30} height={30} />
              </div>
              {/* end icon */}

              {/* numbers */}
              <div>
                <p>+201000000000</p>
              </div>
            </div>
            {/* end phone numbers */}

            {/* email numbers */}
            <div className="flex flex-col lg:flex-row items-center gap-3">
              {/* icon */}
              <div>
                <IcOutlineEmail width={24} height={24} />
              </div>
              {/* end icon */}

              {/* numbers */}
              <div>
                <a href="mailto:demo@demo.com">demo@demo.com</a>
              </div>
            </div>
            {/* end email numbers */}

            {/* location numbers */}
            <div className="flex flex-col lg:flex-row text-center items-center lg:items-start lg:text-start gap-3">
              {/* icon */}
              <div>
                <CarbonLocationFilled width={24} height={24} />
              </div>
              {/* end icon */}

              {/* location */}
              <div>
                <p>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </p>
              </div>
            </div>
            {/* end location location */}
          </div>
          {/* end center */}

          {/* bottom - social media accounts */}

          <div className="flex justify-center lg:justify-start gap-2 lg:gap-6">
            {/* facebook */}
            <a
              href="https://www.facebook.com/test"
              target="_blank"
              className="size-[30px] bg-orange hover:bg-white group  transition-all duration-300  flex items-center justify-center rounded-full cursor-pointer "
              title="visit our facebook page"
            >
              <RiFacebookFill
                width={15}
                height={15}
                className="fill-white group-hover:fill-darkBlue transition-colors duration-300"
              />
            </a>
            {/* end facebook */}

            {/* facebook */}
            <a
              href="https://www.instagram.com/test"
              target="_blank"
              className="size-[30px] bg-orange hover:bg-white group  transition-all duration-300  flex items-center justify-center rounded-full cursor-pointer "
              title="visit our instagram page"
            >
              <MdiInstagram
                width={15}
                height={15}
                className="fill-white group-hover:fill-darkBlue transition-colors duration-300"
              />
            </a>
            {/* end facebook */}
          </div>
          {/* end bottom */}
        </div>
        {/* end left side */}

        {/* right side */}
        <div className="h-full col-span-1 lg:col-span-3 p-3 lg:p-10">
          <ContactFormWrapper />
        </div>
      </div>
    </div>
  );
}
