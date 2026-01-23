import ExperienceCard from "./cards/ExperienceCard";
import GradientWrapper from "./GradientWrapper";
import SkillCard from "./cards/SkillCard";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import NavBarItem from "./NavBarItem";
import { ReactLenis, useLenis } from "lenis/react";
import Scene from "./Scene";
import Separator from "./Separator";
import { experienceData, skillsData, type ExperienceCase } from "./data";
import CardCarouselDots from "./CardCarousel";

function App() {
  const lenis = useLenis();

  const handleScrollTo = (selector: string) => {
    lenis?.scrollTo(selector, {
      duration: 2,
    });
  };

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 10) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const [emailSubmit, setEmailSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async () => {
    if (loading || emailSubmit) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch(
      "https://formsubmit.co/christianterrazas47@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    setLoading(false);

    console.log(response);
    if (response.ok) {
      setEmailSubmit(true);
    }
  };

  const [experienceCardOpen, setExperienceCardOpen] =
    useState<ExperienceCase | null>(null);

  useEffect(() => {
    if (experienceCardOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [experienceCardOpen, lenis]);

  return (
    <ReactLenis root>
      <div className="relative bg-bg-black">
        {experienceCardOpen && (
          <div
            className="fixed inset-0 w-full h-screen bg-black/70 z-[100] backdrop-blur-[5px] flex justify-center items-center p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setExperienceCardOpen(null);
              }
            }}
          >
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-bg-black-soft w-[1200px] max-h-[90vh] overflow-y-auto rounded-[12px] p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-text-white text-[32px] md:text-[40px]">
                  {experienceCardOpen.title}
                </h2>
                <button
                  onClick={() => setExperienceCardOpen(null)}
                  className="text-text-white-soft hover:text-text-white cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-[20px] text-text-white-soft font-light mb-8">
                {experienceCardOpen.description}
              </p>
              <p className="text-[20px] text-text-white-soft font-light mb-8">
                <span className="font-medium">Stack used:</span>{" "}
                {experienceCardOpen.stack}
              </p>
              {experienceCardOpen.link && (
                <p className="text-[20px] text-text-white-soft font-light mb-4">
                  <span className="font-medium">Link:</span>{" "}
                  {experienceCardOpen.link}
                </p>
              )}

              <div className="md:block hidden">
                {experienceCardOpen.images && experienceCardOpen.images.length > 0 && <div className="grid grid-cols-2 gap-4">

                  {experienceCardOpen.images.map((expImg) => <div className="rounded-xl overflow-hidden"><img src={expImg} width={500} height={500} className="w-full h-full object-contain" /></div>)}
                </div>}
              </div>
              <div className="md:hidden">
                {experienceCardOpen.images && experienceCardOpen.images.length > 0 && <div className="rounded-xl overflow-hidden"><img src={experienceCardOpen.images[0]} width={500} height={500} className="w-full object-cover" />
                </div>}
              </div>


            </motion.div>
          </div>
        )}
        <div
          id="abtme"
          className="h-screen w-full bg-bg-black flex flex-col relative"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear" }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center mx-auto pt-[56px] justify-center gap-[90px]"
          >
            <NavBarItem title="About me" link="#abtme" />
            <NavBarItem title="Experience" link="#experience" />
            <NavBarItem title="Skills" link="#skills" />
            <NavBarItem title="Contact me" link="#contact" />
          </motion.div>
          <div className="flex-1 flex items-center">
            <div className="flex flex-col justify-between lg:justify-center gap-0 lg:pl-[146px] h-full lg:h-auto px-[28px] lg:px-0 pt-[100px] pb-[40px] lg:pt-0 lg:pb-0 w-full lg:max-w-[800px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-[48px]"
              >
                <p className="italic text-text-white-soft text-[20px] lg:text-[32px] ml-2 mb-3 leading-none">
                  Hi, I’m Christian, a
                </p>
                <h1
                  className="text-[40px] lg:text-[64px] leading-[1] tracking-[0.04em] text-text-white"
                  style={{ fontWeight: 200 }}
                >
                  Full-stack Developer & <br /> Product Designer
                </h1>
              </motion.div>
              <div className="flex lg:hidden justify-center items-center relative">

                <div className="w-[175px] h-[175px] relative">
                  <motion.div initial={{ rotate: 45 }} style={{ transformOrigin: "100% center" }} animate={{ rotate: 405 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 w-1/2 h-full bg-accent rounded-l-[150px] z-0" />
                  <svg width="97" height="97" viewBox="0 0 93 97" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <g clipPath="url(#clip0_81_41)">
                      <path d="M46.5 48.4997C51.0984 48.4997 55.5936 47.0775 59.417 44.4129C63.2405 41.7482 66.2205 37.9609 67.9802 33.5298C69.7399 29.0987 70.2004 24.2228 69.3033 19.5188C68.4062 14.8148 66.1918 10.4938 62.9402 7.1024C59.6887 3.71097 55.5459 1.40138 51.0359 0.465693C46.5258 -0.469998 41.851 0.0102325 37.6026 1.84566C33.3542 3.68108 29.7231 6.78927 27.1683 10.7772C24.6136 14.765 23.25 19.4535 23.25 24.2497C23.2562 30.6793 25.7077 36.8436 30.0666 41.39C34.4255 45.9364 40.3356 48.4933 46.5 48.4997ZM46.5 8.08307C49.5656 8.08307 52.5624 9.03123 55.1113 10.8076C57.6603 12.5841 59.647 15.1089 60.8201 18.063C61.9933 21.0171 62.3002 24.2677 61.7022 27.4037C61.1041 30.5397 59.6279 33.4203 57.4602 35.6813C55.2924 37.9422 52.5306 39.482 49.5239 40.1058C46.5172 40.7296 43.4007 40.4094 40.5684 39.1858C37.7362 37.9622 35.3154 35.89 33.6122 33.2315C31.9091 30.5729 31 27.4472 31 24.2497C31 19.9621 32.633 15.85 35.5398 12.8182C38.4467 9.78634 42.3891 8.08307 46.5 8.08307Z" fill="#F2F2F2" />
                      <path d="M46.5 56.5858C37.2537 56.5965 28.3891 60.4323 21.851 67.2516C15.3129 74.0709 11.6353 83.3169 11.625 92.9608C11.625 94.0327 12.0333 95.0608 12.76 95.8187C13.4867 96.5767 14.4723 97.0025 15.5 97.0025C16.5277 97.0025 17.5133 96.5767 18.24 95.8187C18.9667 95.0608 19.375 94.0327 19.375 92.9608C19.375 85.4574 22.2328 78.2613 27.3197 72.9556C32.4067 67.6499 39.306 64.6691 46.5 64.6691C53.694 64.6691 60.5933 67.6499 65.6803 72.9556C70.7672 78.2613 73.625 85.4574 73.625 92.9608C73.625 94.0327 74.0333 95.0608 74.76 95.8187C75.4867 96.5767 76.4723 97.0025 77.5 97.0025C78.5277 97.0025 79.5133 96.5767 80.24 95.8187C80.9667 95.0608 81.375 94.0327 81.375 92.9608C81.3647 83.3169 77.6871 74.0709 71.149 67.2516C64.6109 60.4323 55.7463 56.5965 46.5 56.5858Z" fill="#F2F2F2" />
                    </g>
                    <defs>
                      <clipPath id="clip0_81_41">
                        <rect width="93" height="97" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>



              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <p className="text-text-white-soft max-w-none lg:max-w-[450px] text-[20px] mb-[34px] lg:mb-[1em]">
                  {" "}
                  My goal is to create complete, scalable web applications that
                  combine clean design, intuitive user experiences, and solid
                  backend integrations.
                </p>

                <p className="text-text-white-soft max-w-[450px] text-[20px] mb-[48px] xl:block hidden">
                  I focus on building products from concept to deployment,
                  turning ideas into functional, real-world solutions.</p>
                <div className="flex items-stretch lg:items-center text-md lg:text-[20px] gap-4 lg:justify-start justify-center">
                  <button
                    className="bg-accent px-6 py-2 rounded-[12px] cursor-pointer text-text-white hover:bg-[#1053B7] w-full lg:w-auto"
                    onClick={() => handleScrollTo("#contact")}
                  >
                    Contact me!
                  </button>
                  <button
                    className="bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-6 py-2 rounded-[12px] cursor-pointer text-text-white w-full lg:w-auto"
                    onClick={() => handleScrollTo("#experience")}
                  >
                    See my projects
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 h-full hidden lg:flex justify-center items-center">
              <div className="w-[500px] h-[500px]" id="canvas-container">
                <Scene />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pb-6 lg:block hidden"
          >
            <div className="flex items-start justify-center w-full gap-[68px] pb-4 text-text-white">
              <div className="flex flex-col items-center text-center gap-5">
                <p className="text-[64px] text-accent tracking-[0.08em] leading-[0.9]">
                  {counter}+
                </p>
                <p className="text-[20px] font-light w-[180px]">Releases</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <g clipPath="url(#clip0_15_13)">
                    <path
                      d="M28 0C22.4621 0 17.0486 1.64217 12.444 4.71885C7.83947 7.79553 4.25064 12.1685 2.13139 17.2849C0.012132 22.4012 -0.542361 28.0311 0.538025 33.4625C1.61841 38.894 4.28515 43.8831 8.20102 47.799C12.1169 51.7149 17.106 54.3816 22.5375 55.462C27.969 56.5424 33.5988 55.9879 38.7152 53.8686C43.8315 51.7494 48.2045 48.1605 51.2812 43.556C54.3578 38.9514 56 33.5379 56 28C55.992 20.5764 53.0394 13.4592 47.7901 8.20988C42.5409 2.9606 35.4236 0.00802919 28 0V0ZM48.1763 16.3333H40.6607C38.9783 12.4343 36.763 8.78753 34.0783 5.49733C40.0201 7.11416 45.0854 11.0074 48.1763 16.3333ZM38.5 28C38.4809 30.3757 38.1065 32.7351 37.3894 35H18.6107C17.8935 32.7351 17.5192 30.3757 17.5 28C17.5192 25.6243 17.8935 23.2649 18.6107 21H37.3894C38.1065 23.2649 38.4809 25.6243 38.5 28ZM20.482 39.6667H35.518C33.5376 43.5767 31.0057 47.182 28 50.372C24.9932 47.1829 22.4612 43.5774 20.482 39.6667ZM20.482 16.3333C22.4625 12.4233 24.9943 8.81804 28 5.628C31.0068 8.81714 33.5388 12.4226 35.518 16.3333H20.482ZM21.9333 5.49733C19.2446 8.78683 17.0254 12.4336 15.3393 16.3333H7.82368C10.9173 11.005 15.9872 7.11143 21.9333 5.49733ZM5.74235 21H13.7667C13.1618 23.2847 12.8482 25.6367 12.8333 28C12.8482 30.3633 13.1618 32.7153 13.7667 35H5.74235C4.30814 30.4435 4.30814 25.5565 5.74235 21ZM7.82368 39.6667H15.3393C17.0254 43.5664 19.2446 47.2132 21.9333 50.5027C15.9872 48.8886 10.9173 44.995 7.82368 39.6667ZM34.0783 50.5027C36.763 47.2125 38.9783 43.5657 40.6607 39.6667H48.1763C45.0854 44.9926 40.0201 48.8858 34.0783 50.5027ZM50.2577 35H42.2333C42.8382 32.7153 43.1518 30.3633 43.1667 28C43.1518 25.6367 42.8382 23.2847 42.2333 21H50.253C51.6872 25.5565 51.6872 30.4435 50.253 35H50.2577Z"
                      fill="#0F4EAE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_13">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[20px] font-light w-[180px] text-center">
                  Mantained Apps
                </p>
              </div>
            </div>
            <motion.svg
              whileInView={{ scale: 1.3 }}
              initial={{ scale: 1 }}
              transition={{
                duration: 0.42,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
              width="25"
              height="29"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto cursor-pointer"
              onClick={() => handleScrollTo("#experience")}
            >
              <path
                d="M19.7917 16.3366C19.7905 16.6536 19.682 16.9574 19.4896 17.1824L14.7083 22.7287C14.1224 23.4075 13.3281 23.7888 12.5 23.7888C11.6719 23.7888 10.8776 23.4075 10.2917 22.7287L5.51043 17.1824C5.31642 16.956 5.20752 16.6498 5.20752 16.3305C5.20752 16.0113 5.31642 15.7051 5.51043 15.4787C5.60727 15.3654 5.72248 15.2755 5.84941 15.2142C5.97635 15.1528 6.1125 15.1213 6.25001 15.1213C6.38753 15.1213 6.52368 15.1528 6.65061 15.2142C6.77755 15.2755 6.89276 15.3654 6.9896 15.4787L11.7604 21.0249C11.8573 21.1382 11.9725 21.2281 12.0994 21.2894C12.2264 21.3508 12.3625 21.3823 12.5 21.3823C12.6375 21.3823 12.7737 21.3508 12.9006 21.2894C13.0276 21.2281 13.1428 21.1382 13.2396 21.0249L18.0104 15.4787C18.1073 15.3654 18.2225 15.2755 18.3494 15.2142C18.4764 15.1528 18.6125 15.1213 18.75 15.1213C18.8875 15.1213 19.0237 15.1528 19.1506 15.2142C19.2776 15.2755 19.3928 15.3654 19.4896 15.4787C19.5861 15.5916 19.6625 15.7255 19.7144 15.8727C19.7662 16.0199 19.7925 16.1776 19.7917 16.3366Z"
                fill="white"
              />
              <path
                d="M19.7917 7.87848C19.7905 8.19548 19.682 8.49925 19.4896 8.72431L13.2396 15.9743C13.1428 16.0876 13.0276 16.1775 12.9006 16.2388C12.7737 16.3001 12.6375 16.3317 12.5 16.3317C12.3625 16.3317 12.2264 16.3001 12.0994 16.2388C11.9725 16.1775 11.8573 16.0876 11.7604 15.9743L5.51043 8.72432C5.31642 8.49792 5.20752 8.19167 5.20752 7.87244C5.20752 7.55322 5.31642 7.24696 5.51043 7.02057C5.60727 6.90731 5.72248 6.81742 5.84941 6.75608C5.97635 6.69473 6.1125 6.66315 6.25001 6.66315C6.38753 6.66315 6.52368 6.69473 6.65061 6.75608C6.77755 6.81742 6.89276 6.90731 6.9896 7.02057L12.5 13.4126L18.0104 7.02057C18.1073 6.90731 18.2225 6.81742 18.3494 6.75608C18.4764 6.69473 18.6125 6.66315 18.75 6.66315C18.8875 6.66315 19.0237 6.69473 19.1506 6.75608C19.2776 6.81742 19.3928 6.90731 19.4896 7.02057C19.5861 7.13347 19.6625 7.26738 19.7144 7.4146C19.7662 7.56182 19.7925 7.71946 19.7917 7.87848Z"
                fill="white"
              />
            </motion.svg>
          </motion.div>
        </div>
        <Separator />
        <div
          id="experience"
          className="bg-bg-black w-full px-[28px] lg:px-[146px] py-[48px]"
        >
          <h2 className="text-text-white text-end mb-4 text-[32px] lg:text-[40px]">My experience</h2>
          <p className="text-text-white-soft text-end mb-[48px] text-[20px]">Work shown is a modified and anonymized version of real projects to protect confidential information</p>

          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.title}
              experienceCase={exp}
              setExperienceCardOpen={() => setExperienceCardOpen(exp)}
            />
          ))}
        </div>
        <Separator />
        <div id="skills" className="w-full bg-bg-black px-[28px] lg:px-[146px] pt-[48px] md:pb-[48px] w-full overflow-hidden">
          <h2 className="mb-[48px] text-text-white text-[32px] md:text-[40px]">My skills</h2>

          <div className="hidden md:flex items-stretch w-full gap-[56px] mb-[48px]">
            <SkillCard
              animations={true}
              skillCase={skillsData[0]}
              className="flex-shrink-0 flex-4"
            />

            <SkillCard
              animations={true}

              skillCase={skillsData[1]}
              className="flex-shrink-0 flex-3"
            />
          </div>
          <div className="hidden md:flex items-stretch w-full gap-[56px]">
            <SkillCard
              animations={true}

              skillCase={skillsData[2]}
              className={"flex-shrink-0 flex-3"}
            />

            <SkillCard
              animations={true}

              skillCase={skillsData[3]}
              className={"flex-shrink-0 flex-4"}
            />
          </div>
        </div>
        <div className="block md:hidden bg-bg-black mb-[48px]">
          <CardCarouselDots cards={[

            <SkillCard
              animations={false}
              skillCase={skillsData[0]}
              className="flex-shrink-0"
            />,
            <SkillCard
              animations={false}
              skillCase={skillsData[1]}
              className="flex-shrink-0"
            />,
            <SkillCard
              animations={false}
              skillCase={skillsData[2]}
              className={"flex-shrink-0"}
            />,
            <SkillCard
              animations={false}
              skillCase={skillsData[3]}
              className={"flex-shrink-0"}
            />
          ]} />

        </div>
        <Separator />

        <div id="contact" className="bg-bg-black w-full px-[28px] md:px-[146px] py-[48px]">
          <h4 className="italic text-text-white-soft text-[20px] md:text-[32px]">
            Let’s connect
          </h4>
          <h2 className="text-text-white mb-[48px] leading-none mb-[60px] text-[32px] md:text-[40px]">
            Contact me
          </h2>
          <form>
            <div className="mx-auto w-full md:w-[580px] text-text-white-soft text-[20px] mb-[60px]">
              <h4 className="mb-3 ml-2">Your email</h4>
              <GradientWrapper
                color1="#333333"
                color2="#666666"
                className="mb-6"
              >
                <input
                  type="email"
                  className="w-full bg-bg-black-soft rounded-[12px] py-2 px-4 outline-none"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </GradientWrapper>
              <h4 className="mb-3 ml-2">Your message</h4>
              <GradientWrapper
                color1="#333333"
                color2="#666666"
                className="mb-6"
              >
                <textarea
                  className="w-full w-full bg-bg-black-soft rounded-[12px] py-2 px-4 resize-none block outline-none"
                  rows={5}
                  required
                  placeholder="Hi"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </GradientWrapper>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="bg-accent px-6 py-2 rounded-[12px] cursor-pointer text-text-white"
                  disabled={emailSubmit}
                  style={{ backgroundColor: emailSubmit ? "gray" : "#125FD2" }}
                  onClick={handleEmailSubmit}
                >
                  {loading ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      className="animate-spin"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
                          stroke="#000000"
                          strokeWidth="3.55556"
                          strokeLinecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  ) : emailSubmit ? (
                    "Email sent"
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="flex flex-col items-end  gap-3 text-text-white text-md md:text-[20px]">
            <div className="flex items-center gap-3">
              <p>christianterrazas47@gmail.com</p>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.66667 8.50016L14.3192 15.0342L14.322 15.0366C15.2828 15.7411 15.7634 16.0936 16.2899 16.2298C16.7552 16.3502 17.2444 16.3502 17.7097 16.2298C18.2366 16.0935 18.7187 15.74 19.6812 15.0342C19.6812 15.0342 25.2309 10.7752 28.3333 8.50016M4.25 22.3838V11.6171C4.25 10.0303 4.25 9.23629 4.55881 8.63021C4.83046 8.09708 5.26359 7.66395 5.79671 7.39231C6.4028 7.0835 7.19679 7.0835 8.78361 7.0835H25.2169C26.8038 7.0835 27.5961 7.0835 28.2021 7.39231C28.7353 7.66395 29.1698 8.09708 29.4415 8.63021C29.75 9.2357 29.75 10.0287 29.75 11.6125V22.3886C29.75 23.9723 29.75 24.7642 29.4415 25.3697C29.1698 25.9028 28.7353 26.3367 28.2021 26.6083C27.5967 26.9168 26.8048 26.9168 25.221 26.9168H8.77896C7.19524 26.9168 6.4022 26.9168 5.79671 26.6083C5.26359 26.3367 4.83046 25.9028 4.55881 25.3697C4.25 24.7636 4.25 23.9706 4.25 22.3838Z"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <a
              href="https://github.com/christianterrazasl"
              className="flex items-center gap-3"
            >
              <p>github.com/christianterrazasl</p>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2.8335C15.1396 2.8335 13.2975 3.19993 11.5787 3.91187C9.85991 4.62381 8.29819 5.66732 6.98269 6.98282C4.32593 9.63958 2.83337 13.2429 2.83337 17.0002C2.83337 23.2618 6.89921 28.5743 12.5234 30.4585C13.2317 30.5718 13.4584 30.1327 13.4584 29.7502C13.4584 29.4243 13.4584 28.5318 13.4584 27.356C9.53421 28.206 8.69837 25.4577 8.69837 25.4577C8.04671 23.8143 7.12587 23.3752 7.12587 23.3752C5.83671 22.4968 7.22504 22.5252 7.22504 22.5252C8.64171 22.6243 9.39254 23.9843 9.39254 23.9843C10.625 26.1377 12.7075 25.5002 13.515 25.1602C13.6425 24.2393 14.0109 23.616 14.4075 23.2618C11.2625 22.9077 7.96171 21.6893 7.96171 16.2918C7.96171 14.7193 8.50004 13.4585 9.42087 12.4527C9.27921 12.0985 8.78337 10.6252 9.56254 8.71266C9.56254 8.71266 10.7525 8.33016 13.4584 10.1577C14.5775 9.846 15.7959 9.69016 17 9.69016C18.2042 9.69016 19.4225 9.846 20.5417 10.1577C23.2475 8.33016 24.4375 8.71266 24.4375 8.71266C25.2167 10.6252 24.7209 12.0985 24.5792 12.4527C25.5 13.4585 26.0384 14.7193 26.0384 16.2918C26.0384 21.7035 22.7234 22.8935 19.5642 23.2477C20.0742 23.6868 20.5417 24.551 20.5417 25.8685C20.5417 27.7668 20.5417 29.2968 20.5417 29.7502C20.5417 30.1327 20.7684 30.586 21.4909 30.4585C27.115 28.5602 31.1667 23.2618 31.1667 17.0002C31.1667 15.1398 30.8003 13.2976 30.0883 11.5788C29.3764 9.86003 28.3329 8.29831 27.0174 6.98282C25.7019 5.66732 24.1402 4.62381 22.4214 3.91187C20.7026 3.19993 18.8604 2.8335 17 2.8335Z"
                  fill="#F2F2F2"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/59176077700"
              className="flex items-center gap-3"
            >
              <p>+591 76077700</p>
              <svg className="w-[34px] h-[34px]" width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp [#128]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"> </path> </g> </g> </g> </g></svg>
            </a>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
