import React, { useEffect } from "react"
import { Nav, Intro, Intro2, ChooseCamp, Schedule, Place } from "./layouts"
import gsapPlayer from "./functions/gsapPlayer"

const App = () => {

  //Use animation
  useEffect(() => {
    gsapPlayer()
  }, [])

  return (
    <div className="bg-[#1D1D2F]">

      <Nav />
      <div id="intro-section" className="relative bg-gradient-to-b from-[#1D1D2F] via-[#30307D] to-[#6D55A0] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <Intro />
        {/* Bottom building */}
        <img id="intro-building" src="/intro-building.png" alt="intro-building" className="w-full min-w-[50em] absolute bottom-0 left-1/2 -translate-x-1/2 z-0" />
      </div>

      <div id="intro-section-2" className="relative bg-gradient-to-b from-[#6D55A0] via-[#37222C] to-[#D9AAB1] min-h-[110vh] sm:min-h-[140vh] pb-[20em] md:pb-[50em] overflow-hidden">
        {/* Particle bg */}
        <img src="/wing-wing.png" alt="wing-wing" className="absolute top-0 left-0 w-full h-full object-cover" />
        {/* top rock */}
        <img src="/rock.png" alt="rock" className="w-full max-h-[20em] absolute top-0 left-0" />
        <Intro2 />
      </div>
      <div className="relative bg-gradient-to-b from-[#D9AAB1]  via-[#514B90] to-[#310C57] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <img src="/intro2-rock.png" alt="intro2-rock" className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 top-0" />
        <div id="choose-camp-section" className="my-24 md:mt-64">
          <ChooseCamp />
          <Schedule />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-[#310C57]  via-[#514B90] to-[#4c4787] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <img src="/place/building.png" alt="building" className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 bottom-0" />
        <img src="/place/left.png" alt="building" className="absolute left-[-21em] bottom-[23em] w-[840px]" />
        <img src="/place/right.png" alt="building" className="absolute right-[-21em] bottom-[5em] w-[840px]" />
        <div className="absolute w-full h-full flex justify-center items-center">
          <Place />
        </div>
      </div>

    </div>
  );
}

export default App;