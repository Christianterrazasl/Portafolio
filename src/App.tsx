import ExperienceCard from "./ExperienceCard";
import GradientWrapper from "./GradientWrapper";
import SkillCard from "./SkillCard";
import { useState } from "react";
import { motion } from "motion/react";
import NavBarItem from "./NavBarItem";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis();

  const handleScrollTo = (selector: string) => {
    lenis?.scrollTo(selector, {
      duration: 2,
    });
  };

  return (
    <ReactLenis root>
      <div>
        <div
          id="abtme"
          className="h-screen w-full bg-bg-white flex flex-col relative"
        >
          <div className="flex items-center mx-auto pt-[56px] justify-center gap-[90px]">
            <NavBarItem title="About me" link="#abtme" />
            <NavBarItem title="Experience" link="#experience" />
            <NavBarItem title="Skills" link="#skills" />
            <NavBarItem title="Contact me" link="#contact" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-0 px-[146px]">
            <div>
              <div className="flex items-center gap-3 mb-2 ml-2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66667 8.49999L14.3192 15.034L14.322 15.0364C15.2828 15.741 15.7634 16.0935 16.2899 16.2296C16.7552 16.35 17.2444 16.35 17.7097 16.2296C18.2366 16.0933 18.7187 15.7398 19.6812 15.034C19.6812 15.034 25.2309 10.7751 28.3333 8.49999M4.25 22.3836V11.6169C4.25 10.0301 4.25 9.23612 4.55881 8.63004C4.83046 8.09691 5.26359 7.66378 5.79671 7.39214C6.4028 7.08333 7.19679 7.08333 8.78361 7.08333H25.2169C26.8038 7.08333 27.5961 7.08333 28.2021 7.39214C28.7353 7.66378 29.1698 8.09691 29.4415 8.63004C29.75 9.23553 29.75 10.0286 29.75 11.6123V22.3884C29.75 23.9721 29.75 24.764 29.4415 25.3695C29.1698 25.9026 28.7353 26.3365 28.2021 26.6082C27.5967 26.9167 26.8048 26.9167 25.221 26.9167H8.77896C7.19524 26.9167 6.4022 26.9167 5.79671 26.6082C5.26359 26.3365 4.83046 25.9026 4.55881 25.3695C4.25 24.7634 4.25 23.9704 4.25 22.3836Z"
                    stroke="#0D0D0D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2.83333C15.1396 2.83333 13.2974 3.19976 11.5786 3.9117C9.85987 4.62364 8.29815 5.66715 6.98265 6.98265C4.32588 9.63941 2.83333 13.2428 2.83333 17C2.83333 23.2617 6.89916 28.5742 12.5233 30.4583C13.2317 30.5717 13.4583 30.1325 13.4583 29.75C13.4583 29.4242 13.4583 28.5317 13.4583 27.3558C9.53416 28.2058 8.69833 25.4575 8.69833 25.4575C8.04666 23.8142 7.12583 23.375 7.12583 23.375C5.83666 22.4967 7.225 22.525 7.225 22.525C8.64166 22.6242 9.3925 23.9842 9.3925 23.9842C10.625 26.1375 12.7075 25.5 13.515 25.16C13.6425 24.2392 14.0108 23.6158 14.4075 23.2617C11.2625 22.9075 7.96166 21.6892 7.96166 16.2917C7.96166 14.7192 8.5 13.4583 9.42083 12.4525C9.27916 12.0983 8.78333 10.625 9.5625 8.7125C9.5625 8.7125 10.7525 8.33 13.4583 10.1575C14.5775 9.84583 15.7958 9.69 17 9.69C18.2042 9.69 19.4225 9.84583 20.5417 10.1575C23.2475 8.33 24.4375 8.7125 24.4375 8.7125C25.2167 10.625 24.7208 12.0983 24.5792 12.4525C25.5 13.4583 26.0383 14.7192 26.0383 16.2917C26.0383 21.7033 22.7233 22.8933 19.5642 23.2475C20.0742 23.6867 20.5417 24.5508 20.5417 25.8683C20.5417 27.7667 20.5417 29.2967 20.5417 29.75C20.5417 30.1325 20.7683 30.5858 21.4908 30.4583C27.115 28.56 31.1667 23.2617 31.1667 17C31.1667 15.1396 30.8002 13.2974 30.0883 11.5786C29.3763 9.85987 28.3328 8.29815 27.0173 6.98265C25.7018 5.66715 24.1401 4.62364 22.4213 3.9117C20.7026 3.19976 18.8604 2.83333 17 2.83333Z"
                    fill="#0D0D0D"
                  />
                </svg>
              </div>
              <p className="italic text-text-black-soft text-[32px] ml-2 mb-3">
                Hi, I’m Christian, a
              </p>
              <h1
                className="text-[64px] leading-[1] tracking-[0.04em]"
                style={{ fontWeight: 100 }}
              >
                Full-stack Developer & <br /> Product Designer
              </h1>
            </div>
            <div className="w-full flex flex-col items-end pr-[10vw]">
              <p className="text-text-black-soft max-w-[450px] text-[20px]">
                {" "}
                My goal is to create complete, scalable web applications that
                combine clean design, intuitive user experiences, and solid
                backend integrations. <br />
                <br />I focus on building products from concept to deployment,
                turning ideas into functional, real-world solutions.
              </p>
            </div>
          </div>
          <div className="pb-6">
            <div className="flex items-start justify-center w-full gap-[68px] pb-10">
              <div className="flex flex-col items-center text-center gap-5">
                <p className="text-[64px] text-accent tracking-[0.08em] leading-[0.9]">
                  10+
                </p>
                <p className="text-[20px] font-light w-[180px]">
                  Successfully Developed Web Applications
                </p>
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
                  <g clip-path="url(#clip0_15_13)">
                    <path
                      d="M28 0C22.4621 0 17.0486 1.64217 12.444 4.71885C7.83947 7.79553 4.25064 12.1685 2.13139 17.2849C0.012132 22.4012 -0.542361 28.0311 0.538025 33.4625C1.61841 38.894 4.28515 43.8831 8.20102 47.799C12.1169 51.7149 17.106 54.3816 22.5375 55.462C27.969 56.5424 33.5988 55.9879 38.7152 53.8686C43.8315 51.7494 48.2045 48.1605 51.2812 43.556C54.3578 38.9514 56 33.5379 56 28C55.992 20.5764 53.0394 13.4592 47.7901 8.20988C42.5409 2.9606 35.4236 0.00802919 28 0V0ZM48.1763 16.3333H40.6607C38.9783 12.4343 36.763 8.78753 34.0783 5.49733C40.0201 7.11416 45.0854 11.0074 48.1763 16.3333ZM38.5 28C38.4809 30.3757 38.1065 32.7351 37.3894 35H18.6107C17.8935 32.7351 17.5192 30.3757 17.5 28C17.5192 25.6243 17.8935 23.2649 18.6107 21H37.3894C38.1065 23.2649 38.4809 25.6243 38.5 28ZM20.482 39.6667H35.518C33.5376 43.5767 31.0057 47.182 28 50.372C24.9932 47.1829 22.4612 43.5774 20.482 39.6667ZM20.482 16.3333C22.4625 12.4233 24.9943 8.81804 28 5.628C31.0068 8.81714 33.5388 12.4226 35.518 16.3333H20.482ZM21.9333 5.49733C19.2446 8.78683 17.0254 12.4336 15.3393 16.3333H7.82368C10.9173 11.005 15.9872 7.11143 21.9333 5.49733ZM5.74235 21H13.7667C13.1618 23.2847 12.8482 25.6367 12.8333 28C12.8482 30.3633 13.1618 32.7153 13.7667 35H5.74235C4.30814 30.4435 4.30814 25.5565 5.74235 21ZM7.82368 39.6667H15.3393C17.0254 43.5664 19.2446 47.2132 21.9333 50.5027C15.9872 48.8886 10.9173 44.995 7.82368 39.6667ZM34.0783 50.5027C36.763 47.2125 38.9783 43.5657 40.6607 39.6667H48.1763C45.0854 44.9926 40.0201 48.8858 34.0783 50.5027ZM50.2577 35H42.2333C42.8382 32.7153 43.1518 30.3633 43.1667 28C43.1518 25.6367 42.8382 23.2847 42.2333 21H50.253C51.6872 25.5565 51.6872 30.4435 50.253 35H50.2577Z"
                      fill="#125FD2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_13">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[20px] font-light w-[180px] text-center">
                  Actively Maintained & Continuously Improved Projects
                </p>
              </div>
            </div>
            <svg
              width="25"
              height="29"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto cursor-pointer"
              onClick={()=>handleScrollTo("#experience")}

            >
              <path
                d="M19.7917 16.3366C19.7905 16.6536 19.682 16.9574 19.4896 17.1824L14.7083 22.7287C14.1224 23.4075 13.3281 23.7888 12.5 23.7888C11.6719 23.7888 10.8776 23.4075 10.2917 22.7287L5.51043 17.1824C5.31642 16.956 5.20752 16.6498 5.20752 16.3305C5.20752 16.0113 5.31642 15.7051 5.51043 15.4787C5.60727 15.3654 5.72248 15.2755 5.84941 15.2142C5.97635 15.1528 6.1125 15.1213 6.25001 15.1213C6.38753 15.1213 6.52368 15.1528 6.65061 15.2142C6.77755 15.2755 6.89276 15.3654 6.9896 15.4787L11.7604 21.0249C11.8573 21.1382 11.9725 21.2281 12.0994 21.2894C12.2264 21.3508 12.3625 21.3823 12.5 21.3823C12.6375 21.3823 12.7737 21.3508 12.9006 21.2894C13.0276 21.2281 13.1428 21.1382 13.2396 21.0249L18.0104 15.4787C18.1073 15.3654 18.2225 15.2755 18.3494 15.2142C18.4764 15.1528 18.6125 15.1213 18.75 15.1213C18.8875 15.1213 19.0237 15.1528 19.1506 15.2142C19.2776 15.2755 19.3928 15.3654 19.4896 15.4787C19.5861 15.5916 19.6625 15.7255 19.7144 15.8727C19.7662 16.0199 19.7925 16.1776 19.7917 16.3366Z"
                fill="#374957"
              />
              <path
                d="M19.7917 7.87848C19.7905 8.19548 19.682 8.49925 19.4896 8.72431L13.2396 15.9743C13.1428 16.0876 13.0276 16.1775 12.9006 16.2388C12.7737 16.3001 12.6375 16.3317 12.5 16.3317C12.3625 16.3317 12.2264 16.3001 12.0994 16.2388C11.9725 16.1775 11.8573 16.0876 11.7604 15.9743L5.51043 8.72432C5.31642 8.49792 5.20752 8.19167 5.20752 7.87244C5.20752 7.55322 5.31642 7.24696 5.51043 7.02057C5.60727 6.90731 5.72248 6.81742 5.84941 6.75608C5.97635 6.69473 6.1125 6.66315 6.25001 6.66315C6.38753 6.66315 6.52368 6.69473 6.65061 6.75608C6.77755 6.81742 6.89276 6.90731 6.9896 7.02057L12.5 13.4126L18.0104 7.02057C18.1073 6.90731 18.2225 6.81742 18.3494 6.75608C18.4764 6.69473 18.6125 6.66315 18.75 6.66315C18.8875 6.66315 19.0237 6.69473 19.1506 6.75608C19.2776 6.81742 19.3928 6.90731 19.4896 7.02057C19.5861 7.13347 19.6625 7.26738 19.7144 7.4146C19.7662 7.56182 19.7925 7.71946 19.7917 7.87848Z"
                fill="#374957"
              />
            </svg>
          </div>
        </div>
        <div
          id="experience"
          className="bg-bg-black w-full px-[146px] py-[48px]"
        >
          <h2 className="text-text-white text-end mb-[48px]">My experience</h2>
          <ExperienceCard
            title="Gamified Courses Platform"
            description="A gamified e-learning platform built with Next.js and Supabase. It features user authentication, role-based access, file storage, and a relational database powered by Supabase. Video content is hosted using Mux, with progress tracking to monitor user engagement and course completion. Payments are managed with stripe."
            link=""
            note="My Magnum Opus (so far)"
            stack="Next.js, React, Supabase (Auth, Database, Storage), Mux, Tailwind CSS"
            left={false}
          />
          <ExperienceCard
            title="International Product Website (Multi-page Frontend)"
            description="Frontend development for a large-scale international product website, including multiple marketing and product pages. Focused on performance, responsive layouts, accessibility, and reusable components across the entire site."
            link=""
            note="Many animations, zero regrets."
            stack="Next.js, React, Tailwind CSS, Framer Motion, GSAP"
            left={true}
          />
          <ExperienceCard
            title="Crypto Streaming Platform (MVP)"
            description="Frontend development for the MVP of a crypto-based live streaming platform, allowing users to purchase cryptocurrency and donate it to streamers. Focused on building core user flows, responsive UI, and a scalable frontend architecture."
            link=""
            note="MVP completed — the startup journey ended there."
            stack="React, Next.js, Tailwind CSS"
            left={false}
          />
        </div>
        <div id="skills" className="w-full bg-bg-white px-[146px] py-[48px]">
          <h2 className="mb-[48px]">My skills</h2>

          <div className="flex items-stretch w-full gap-[56px] mb-[48px]">
            <SkillCard
              title={"Frontend"}
              skills={[
                "Next.js 16 & React",
                "TypeScript & JavaScript (ES6+)",
                "Tailwind 4",
                "HTML5 & CSS3",
                "Framer Motion & GSAP",
                "API Integration",
                "Figma",
              ]}
              className="flex-shrink-0 flex-4"
            />
            <SkillCard
              title={"Backend"}
              skills={["Node.js & Express.js", "Supabase", "REST APIs"]}
              className="flex-shrink-0 flex-3"
            />
          </div>
          <div className="flex items-stretch w-full gap-[56px]">
            <SkillCard
              title={"Data & Systems"}
              skills={[
                "PostgreSQL",
                "MongoDB",
                "Pentaho Data Integration (ETL)",
                "OLAP Cubes",
              ]}
              className={"flex-shrink-0 flex-3"}
            />

            <SkillCard
              title={"Other Professional Skills"}
              skills={[
                "Clean Code Principles",
                "Performance Optimization",
                "UI/UX Fundamentals",
                "Cross-Functional Collaboration (Working with designers and backend engineers)",
                "Task-Based Development (Jira, Linear)",
              ]}
              className={"flex-shrink-0 flex-4"}
            />
          </div>
        </div>
        <div id="contact" className="bg-bg-black w-full px-[146px] py-[48px]">
          <h4 className="italic text-text-white-soft text-[32px]">
            Let’s connect
          </h4>
          <h2 className="text-text-white mb-[48px] leading-none mb-[60px]">
            Contact me
          </h2>
          <div className="mx-auto w-[580px] text-text-white-soft text-[20px] mb-[60px]">
            <h4 className="mb-3 ml-2">Your email</h4>
            <GradientWrapper color1="#333333" color2="#666666" className="mb-6">
              <input
                type="text"
                className="w-full bg-bg-black-soft rounded-[12px] py-2 px-4 outline-none"
              />
            </GradientWrapper>
            <h4 className="mb-3 ml-2">Your message</h4>
            <GradientWrapper color1="#333333" color2="#666666" className="mb-6">
              <textarea
                className="w-full w-full bg-bg-black-soft rounded-[12px] py-2 px-4 resize-none block outline-none"
                rows={5}
              ></textarea>
            </GradientWrapper>
            <div className="flex items-center justify-end">
              <button className="bg-accent px-6 py-2 rounded-[12px] cursor-pointer text-text-white">
                Send
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
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
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
