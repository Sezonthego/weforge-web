// "use client";

// import Link from "next/link";
// import { Container } from "./container";
// import { Logo } from "./logo";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { IconX } from "@tabler/icons-react";
// import { AnimatePresence, motion } from "motion/react";

// const navlinks = [
//   { title: "Home", href: "/" },
//   { title: "Deliverables", href: "/#features" },
//   { title: "Methodology", href: "/#methodology" },
//   { title: "Contact", href: "/#contact" },
// ];

// export const Navbar = () => {
//   return (
//     <div className="border-b border-brand-border bg-brand-ivory font-display">
//       <DesktopNavbar />
//       <MobileNavbar />
//     </div>
//   );
// };

// export const MobileNavbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex md:hidden px-4 py-3 justify-between items-center relative text-brand-cocoa ">
//       <Logo />
//       <button
//         onClick={() => setOpen(!open)}
//         className="rounded-md border border-brand-border p-2 text-brand-cocoa"
//         aria-label="Open navigation"
//       >
//         <IconLayoutSidebar className="size-5" />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//               backdropFilter: "blur(15px)",
//               background: "rgba(255, 253, 249, 0.96)",
//             }}
//             exit={{
//               opacity: 0,
//               backdropFilter: "blur(0px)",
//               background: "rgba(255, 253, 249, 0)",
//             }}
//             transition={{
//               duration: 0.2,
//             }}
//             className="fixed inset-0 h-full w-full z-50 px-4 py-3 text-brand-cocoa"
//           >
//             <div className="flex items-center justify-between">
//               <Logo />
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="absolute right-4 top-3 cursor-pointer rounded-md border border-brand-border p-2"
//                 aria-label="Close navigation"
//               >
//                 <IconX className="size-5" />
//               </button>
//             </div>

//             <div className="flex flex-col gap-6 my-10">
//               {navlinks.map((item, index) => (
//                 <motion.div
//                   key={index + item.title}
//                   initial={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     delay: index * 0.1,
//                   }}
//                 >
//                   <Link
//                     key={item.title}
//                     href={item.href}
//                     className="text-xl text-brand-cocoa font-medium"
//                     onClick={() => setOpen(false)}
//                   >
//                     {item.title}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="absolute right-4 bottom-1">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   duration: 0.25,
//                 }}
//                 className="flex gap-5"
//               >
//                 <Button asChild>
//                   <Link href="/#contact">Get in touch</Link>
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export const DesktopNavbar = () => {
//   return (
//     <Container className="py-4 px-4 items-center justify-between hidden md:flex">
//       <Logo />
//       <div className="flex items-center gap-8">
//         {navlinks.map((item, index) => (
//           <Link
//             href={item.href}
//             key={index}
//             className="text-brand-muted hover:text-brand-cocoa text-sm font-semibold transition-colors"
//           >
//             {item.title}
//           </Link>
//         ))}
//       </div>
//       <div className="flex items-center gap-4">
//         <Button asChild>
//           <Link href="/#contact">Get in touch</Link>
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export const IconLayoutSidebar = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       // width="24"
//       // height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={cn("size-6", className)}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
//       <path d="M9 4l0 16" />
//     </svg>
//   );
// };
"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./ui/button";
// import { CloseIcon, HamburgerIcon } from "@/icons/general";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/#features",
  },
  {
    title: "Methodology",
    href: "/#methodology",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
//   { title: "Home", href: "/" },
//   { title: "Deliverables", href: "/#features" },
//   { title: "Methodology", href: "/#methodology" },
//   { title: "Contact", href: "/#contact" },
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

 const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
};

export const Navbar = () => {
  return (
    <nav className="">
      <Container>
        <FloatingNav items={items} />
        <DesktopNav items={items} />
        <MobileNav items={items} />
      </Container>
    </nav>
  );
};

const MobileNav = ({ items }: { items: { title: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between p-2 md:hidden">
      <Logo />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-aceternity flex size-6 flex-col items-center justify-center rounded-md"
        aria-label="Toggle menu"
      >
        <HamburgerIcon className="size-4 shrink-0 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] h-full w-full bg-white shadow-lg dark:bg-neutral-900"
          >


            <div className="flex items-center justify-between p-2">
              <Logo />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="shadow-aceternity flex size-6 flex-col items-center justify-center rounded-md"
                aria-label="Toggle menu"
              >
                <CloseIcon className="size-4 shrink-0 text-gray-600" />
              </button>
            </div>
            <div className="divide-divide border-divide mt-6 flex flex-col divide-y border-t">
              {items.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="px-4 py-2 font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item.title}
                  </motion.div>
                </Link>
              ))}
              <div className="mt-4 p-4">
                <Button asChild className="w-full">
                  <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                    Start building
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNav = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  return (
    <div className="hidden items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <Link
            className="font-medium  transition duration-200 dark:hover:text-neutral-900 dark:text-gray-800"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
     
        <Button asChild>
          <Link href="/sign-up">Book an intro call</Link>
        </Button>
      </div>
    </div>
  );
};

const FloatingNav = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  const { scrollY } = useScroll();
  const springConfig = {
    stiffness: 300,
    damping: 30,
  };
  const y = useSpring(
    useTransform(scrollY, [100, 120], [-100, 10]),
    springConfig,
  );
  return (
    <motion.div
      style={{ y }}
      className="shadow-aceternity fixed inset-x-0 top-0 z-150 mx-auto hidden max-w-[calc(80rem-4rem)] items-center justify-between border border-brand-ivory/10 bg-brand-cocoa/90 px-2 py-2 backdrop-blur-sm md:flex xl:rounded-2xl"
    >
      <Logo tone="light" />
      <div className="flex items-center gap-10">
        {items.map((item) => (
          <Link
            className="font-medium text-brand-peach/75 transition duration-200 hover:text-brand-ivory"
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
      
        <Button asChild>
          <Link href="/contact">Book an intro call</Link>
        </Button>
      </div>
    </motion.div>
  );
};
 
