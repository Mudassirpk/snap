import clientAudiophile from "./../../Images/client-audiophile.svg";
import clientDatabiz from "./../../Images/client-databiz.svg";
import clientMaker from "./../../Images/client-maker.svg";
import clientMeet from "./../../Images/client-meet.svg";

import heroImage from "./../../Images/image-hero-desktop.png";
import heroImageMobile from "./../../Images/image-hero-mobile.png";
function Main() {
  return (
    <main className="w-[90%] select-none flex mx-[5%] sm:gap-10 my-5 sm:flex-col-reverse sm:h-auto h-[600px]">
      <div className=" flex flex-col justify-center  sm:items-center sm:gap-6 gap-14 items-start sm:w-[100%] w-[50%]">
        <h1 className="text-7xl font-bold sm:text-center sm:text-5xl">
          Make remote work
        </h1>
        <p className="max-w-[80%] text-md text-slate-500 sm:text-center">
          Get team in sync.no matter your location. Streamline processes. create
          team rituals. and watch productivity soar.
        </p>
        <button className="px-4 py-1 bg-[#141414] rounded-md text-white">
          Learn more
        </button>
        <div className="flex gap-4 flex-wrap">
          <img
            src={clientAudiophile}
            className="object-contain"
            alt="company"
          />
          <img src={clientDatabiz} className="object-contain" alt="company" />
          <img src={clientMaker} className="object-contain" alt="company" />
          <img
            src={clientMeet}
            className="object-contain self-center"
            alt="company"
          />
        </div>
      </div>
      <div className="w-[50%] sm:w-[100%]">
        <img
          src={heroImage}
          className="w-full h-full sm:hidden object-contain sm:object-cover"
          alt="hero"
        />
        <img
          src={heroImageMobile}
          className="w-full hidden sm:block h-full object-contain sm:object-cover"
          alt="hero"
        />
      </div>
    </main>
  );
}

export default Main;
