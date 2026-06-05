// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { DashboardMockup } from "./dashboard-mockup"
// import { Navbar } from "./navbar"
// // import { LogoCloud } from "./logo-cloud"
// // import { FeatureCardsSection } from "./feature-cards-section"
// // import { AISection } from "./ai-section"
// // import { ProductDirectionSection } from "./product-direction-section"
// // import { WorkflowsSection } from "./workflows-section"
// // import { CTASection } from "./cta-section"
// // import { Footer } from "./footer"

// export function Hero3DStage() {
//   const [yOffset, setYOffset] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const offset = Math.min(scrollY / 300, 1) * -20
//       setYOffset(offset)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const baseTransform = {
//     translateX: 2,
//     scale: 1.2,
//     rotateX: 47,
//     rotateY: 31,
//     rotateZ: 324,
//   }

//   return (
//     <>
//       <section className="relative min-h-screen overflow-hidden bg-background">
//         {/* <Navbar /> */}

//         {/* Subtle glow */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -30%)",
//             width: "1200px",
//             height: "800px",
//             background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
//           }}
//         />

//         {/* Main content */}
//         <div className="relative z-10 pt-28 flex flex-col">
//           {/* Hero text - contained and centered */}
//           <div className="w-full flex justify-center px-6 mt-16">
//             <div className="w-full max-w-4xl">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-foreground leading-[1.1] text-balance"
//               >
//                Recruit faster. Retain Longer.
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="mt-6 text-lg text-zinc-400"
//               >
//                 WeForge helps clinical research sites streamline recruitment, pre-screening, and operational workflows through intelligent infrastructure built for scalability, speed, and compliance.
                
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="mt-8 flex items-center gap-6"
//               >
//                 <button className="px-5 py-2.5 bg-brand-ivory text-brand-cocoa font-medium rounded-lg hover:bg-brand-peach transition-colors text-sm">
//                   Get started
//                 </button>
//                 <button className="text-brand-muted font-medium hover:text-brand-ivory transition-colors flex items-center gap-2 text-sm">
//                   <span className="text-zinc-500">New:</span> Sprint agent for Slack
//                   <span aria-hidden="true">→</span>
//                 </button>
//               </motion.div>
//             </div>
//           </div>

//           {/* 3D Stage - full bleed */}
//           <div
//             className="relative mt-16"
//             style={{
//               width: "100vw",
//               marginLeft: "-50vw",
//               marginRight: "-50vw",
//               position: "relative",
//               left: "50%",
//               right: "50%",
//               height: "700px",
//               marginTop: "-60px",
//             }}
//           >
//             <div
//               className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
//               style={{
//                 background: "linear-gradient(to top, #09090B 20%, transparent 100%)",
//               }}
//             />

//             {/* Perspective container */}
//             <div
//               style={{
//                 transform: `translateY(${yOffset}px)`,
//                 transition: "transform 0.1s ease-out",
//                 contain: "strict",
//                 perspective: "4000px",
//                 perspectiveOrigin: "100% 0",
//                 width: "100%",
//                 height: "100%",
//                 transformStyle: "preserve-3d",
//                 position: "relative",
//               }}
//             >
//               {/* Transformed base */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   delay: 0.5,
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 style={{
//                   backgroundColor: "#09090B",
//                   transformOrigin: "0 0",
//                   backfaceVisibility: "hidden",
//                   WebkitBackfaceVisibility: "hidden",
//                   border: "1px solid #1e1e1e",
//                   borderRadius: "10px",
//                   width: "1600px",
//                   height: "900px",
//                   margin: "280px auto auto",
//                   position: "absolute",
//                   top: 0,
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
//                   transformStyle: "preserve-3d",
//                   overflow: "hidden",
//                 }}
//               >
//                 <DashboardMockup />
//               </motion.div>
//             </div>
//           </div>

//           {/* <LogoCloud />
//           <FeatureCardsSection />
//           <AISection />
//           <ProductDirectionSection />
//           <WorkflowsSection />
//           <CTASection />
//           <Footer /> */}
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { DashboardMockup } from "./dashboard-mockup"
import { Navbar } from "./navbar"
// import { LogoCloud } from "./logo-cloud"
// import { FeatureCardsSection } from "./feature-cards-section"
// import { AISection } from "./ai-section"
// import { ProductDirectionSection } from "./product-direction-section"
// import { WorkflowsSection } from "./workflows-section"
// import { CTASection } from "./cta-section"
// import { Footer } from "./footer"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-background">
        {/* <Navbar /> */}

        {/* Brand glow — orange + indigo, matching WeForge palette */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            // background:
            //   "radial-gradient(ellipse at center, rgb(255 79 0 / 7%) 0%, transparent 65%), radial-gradient(ellipse at 75% 15%, rgb(43 35 88 / 6%) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-48 pointer-events-none bg-linear-to-b from-brand-peach/40 to-transparent"
          aria-hidden
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted"
              >
                Patient recruitment, simplified
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-medium text-foreground leading-[1.1] text-balance"
              >
                Recruit faster. Retain longer.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg text-muted-foreground"
              >
                WeForge helps clinical research sites attract, pre-screen, and
                guide potential participants through connected recruitment
                workflows designed to reduce manual coordination.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground  transition-colors hover:bg-primary/90"
                >
                  Book an intro call
                </Link>
                <Link
                  href="/#features"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  See how it works
                  <span aria-hidden="true" className="text-primary">→</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 3D Stage - full bleed */}
          <div
            className="relative mt-16"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "relative",
              left: "50%",
              right: "50%",
              height: "700px",
              marginTop: "-60px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 z-10 h-72 pointer-events-none bg-linear-to-t from-background from-15% to-transparent"
              aria-hidden
            />

            {/* Perspective container */}
            <div
              style={{
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.1s ease-out",
                contain: "strict",
                perspective: "4000px",
                perspectiveOrigin: "100% 0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Transformed base */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: "var(--brand-ivory)",
                  transformOrigin: "0 0",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  border: "1px solid rgb(32 21 21 / 10%)",
                  boxShadow:
                    "0 28px 70px rgb(32 21 21 / 8%), 0 0 0 1px rgb(32 21 21 / 6%)",
                  borderRadius: "12px",
                  width: "1600px",
                  height: "900px",
                  margin: "280px auto auto",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>

          {/* <LogoCloud />
          <FeatureCardsSection />
          <AISection />
          <ProductDirectionSection />
          <WorkflowsSection />
          <CTASection />
          <Footer /> */}
        </div>
      </section>
    </>
  )
}
