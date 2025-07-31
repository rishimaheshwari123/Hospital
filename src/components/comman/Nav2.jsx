"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Stethoscope,
  FileText,
  Shield,
  Activity,
  Video,
  Bot,
  Building2,
  User,
  Pill,
  Brain,
  Target,
  Users,
  BookOpen,
  FileBarChart,
  FileCheck,
  Calendar,
  HelpCircle,
  Heart,
  TrendingUp,
  ArrowRight,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaHeartbeat } from "react-icons/fa";
import { X, ChevronDown, Sparkles, MapPin, Phone } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    hasMegaMenu: true,
    megaMenuContent: [
      {
        title: "Core Services",
        // categories: [
        //   {
        //     title: "Interventional Cardiology",
        //     icon: <FileText className="w-5 h-5" />,
        //     description:
        //       "Interventional Cardiology is a branch of cardiology that focuses on diagnosing and treating cardiovascular diseases using catheter-based techniques",
        //     href: "/interventional-cardiology",
        //   },
        //   {
        //     title: "Diagnostic Services",
        //     icon: <Activity className="w-5 h-5" />,
        //     description:
        //       "Diagnostic services in cardiology involve non-invasive and minimally invasive tests that allow us to evaluate your heart's condition",
        //     href: "/copy-of-interventional-cardiology",
        //   },
        //   {
        //     title: "Patient Education",
        //     icon: <Shield className="w-5 h-5" />,
        //     description:
        //       "Understanding your heart health is crucial to making the right choices for your well-being. Through patient education, we provide you with",
        //     href: "/copy-of-diagnostic-services",
        //   },
        // ],
        categories: [
          {
            title: "Advanced Cardiac Care Services",
            icon: <FileText className="w-5 h-5" />,
            description:
              "Comprehensive, state-of-the-art treatments for heart conditions, including interventional procedures, heart failure management, and preventive cardiac care.",
            href: "/AdvancedCardiacCareServices",
          },
          {
            title: "Arterial, Venous & Lymphatic Disease Care & Treatments",
            icon: <Activity className="w-5 h-5" />,
            description:
              "Expert diagnosis and treatment of artery, vein, and lymphatic system disorders, including varicose veins, DVT, and peripheral artery disease.",
            href: "/ArterialVenous",
          },
          {
            title: "In-Office Advanced Treatments & Diagnostic Imaging",
            icon: <Shield className="w-5 h-5" />,
            description:
              "Convenient access to advanced diagnostic imaging and minimally invasive procedures performed right in our office for faster, more accurate care.",
            href: "/InOfficeAdvanced",
          },
        ],
      },
      {
        title: "Digital Health",
        categories: [
          {
            title: "Preventive Cardiology",
            icon: <Heart className="w-5 h-5" />,
            description:
              "Preventive care focuses on identifying and managing risk factors before they lead to serious heart conditions. This proactive approach helps you maintain optimal heart health .",
            href: "/copy-of-patient-education",
          },
          // {
          //   title: "Telehealth Services",
          //   icon: <Video className="w-5 h-5" />,
          //   description:
          //     "Telehealth allows you to meet with your healthcare provider remotely through secure video calls, phone calls, or other digital platforms. ",
          //   href: "/copy-of-patient-education-1",
          // },
          // {
          //   title: "RPM, CCM, PCM Services",
          //   icon: <FaHeartbeat className="w-5 h-5 " />,
          //   description:
          //     "Personalized remote care plans including Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and Principal Care Management (PCM) to proactively manage chronic conditions and improve outcomes.",
          //   href: "/rpm-ccm-pcm",
          // },
        ],
      },
    ],
  },

  {
    name: "About",
    href: "/about",
  },
  {
    name: "Cath Lab",
    href: "/cathlab",
  },
  {
    name: "Patient Education",
    href: "/copy-of-diagnostic-services ",
  },
  // {
  //   name: "Blog",
  //   href: "/blog",
  // },
];

export const Nav2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- New useEffect to control body scrolling ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = ""; // Re-enable body scroll
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  // --- End New useEffect ---

  const handleMenuEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
    setHoveredItem(menuName);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setHoveredItem(null);
    }, 100);
  };

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMegaMenuLeave = () => {
    setActiveMenu(null);
    setHoveredItem(null);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prevState) => !prevState);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={cn(
          "fixed top-0 md:top-11 left-0 right-0 z-50 transition-all  max-w-[100vw] duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "w-full lg:max-w-[95vw] lg:mx-auto bg-white/80 backdrop-blur-sm rounded-none lg:rounded-lg"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Image src={logo} alt="not found" height={60} />

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasMegaMenu && handleMenuEnter(item.name)
                  }
                  onMouseLeave={() => item.hasMegaMenu && handleMenuLeave()}
                >
                  <motion.a
                    href={item.href || "#"}
                    className={cn(
                      "relative flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover:bg-gray-50 hover:text-primary",
                      hoveredItem === item.name
                        ? "text-primary bg-gray-50"
                        : "text-gray-700"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.name}</span>
                    {item.hasMegaMenu && (
                      <motion.div
                        animate={{
                          rotate: hoveredItem === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </motion.div>
                    )}
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex gap-4">
                  <Link
                    href={
                      "https://vm.providesupport.com/0gyxfx3vgu2kl0r8e1e9c0m5kz"
                    }
                    className="bg-[#00BFB3] text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
                  >
                    Schedule an Appointment
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mega Menu (Desktop) */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl hidden lg:block"
              variants={megaMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {navItems
                  .find((item) => item.name === activeMenu)
                  ?.megaMenuContent?.map((section, sectionIndex) => (
                    <div key={section.title} className="mb-8 last:mb-0">
                      <motion.h3
                        className="text-lg font-semibold text-gray-900 mb-4 flex items-center"
                        variants={itemVariants}
                      >
                        <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                        {section.title}
                      </motion.h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.categories.map((category, categoryIndex) => (
                          <motion.a
                            key={category.title}
                            href={category.href}
                            className="group p-4 rounded-xl border border-gray-200 hover:border-primary/30 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                            variants={itemVariants}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            }}
                          >
                            <div className="flex items-start space-x-3">
                              <motion.div
                                className="flex-shrink-0 w-10 h-10 bg-red-500 to-white rounded-lg flex items-center justify-center text-white"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                              >
                                {category.icon}
                              </motion.div>

                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-1">
                                  {category.title}
                                </h4>
                                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                  {category.description}
                                </p>
                              </div>
                              <motion.div
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ x: 5 }}
                              >
                                <ArrowRight className="w-4 h-4 text-primary" />
                              </motion.div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Varn DigiHealth
                  </h2>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2 flex-grow overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    custom={index}
                  >
                    {item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={toggleMobileServices}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors w-full"
                        >
                          <span className="font-medium text-gray-900">
                            {item.name}
                          </span>
                          <motion.div
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="pl-4 border-l ml-4 space-y-2 max-h-60 overflow-y-auto custom-scrollbar"
                            >
                              {item.megaMenuContent.map((section) => (
                                <div key={section.title}>
                                  <h4 className="font-semibold text-gray-800 py-2">
                                    {section.title}
                                  </h4>
                                  <div className="space-y-1">
                                    {section.categories.map((category) => (
                                      <Link
                                        key={category.title}
                                        href={category.href}
                                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-700"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        {category.icon && (
                                          <span className="mr-2 text-primary">
                                            {category.icon}
                                          </span>
                                        )}
                                        {category.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Address & Phone Section */}
                <motion.div
                  className="  pt-5 border-t space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>
                        450 W. Central Parkway – Altamonte Springs, FL 32714
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>33 S. Washington Avenue, Apopka, FL 32703</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>Cath Lab 308 E Hazel St, Orlando, FL 32804</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href="tel:4077678554"
                      className="text-sm text-gray-700 hover:underline"
                    >
                      (407) 767-8554
                    </a>
                  </div>
                  <br />
                  <a
                    href="https://vm.providesupport.com/0gyxfx3vgu2kl0r8e1e9c0m5kz"
                    className="block w-full bg-[#00BFB3] text-white px-4 py-2 rounded-lg shadow font-semibold text-center"
                  >
                    Live Chat
                  </a>

                  <a
                    href="tel:4077678554"
                    className="block w-full bg-[#00BFB3] text-white px-4 py-2 rounded-lg shadow font-semibold text-center mt-3"
                  >
                    (407) 767-8554
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
