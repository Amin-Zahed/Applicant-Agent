// const LandingPage = () => {
//   return (
//     <>
//       <h1>Landing page</h1>
//     </>
//   );
// };

// export default LandingPage;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  // Bot,
  Upload,
  Settings,
  Zap,
  Star,
  ArrowRight,
  // Menu,
  // X,
  CheckCircle,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
// import Link from "next/link";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "how-it-works", "testimonials", "get-started"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-background w-full h-full overflow-y-auto scroll-smooth">
      <div className="scroll-smooth snap-y snap-mandatory  w-full h-full min-h-fit bg-background">
        {/* Hero Section */}
        <section
          id="hero"
          className="h-screen snap-start flex items-center justify-center bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-blue-100 text-primary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Job Applications
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Let AI Apply to{" "}
                  <span className="bg-primary bg-clip-text text-transparent">
                    Jobs for You
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Apollo personalizes your CVs, writes your cover letters, and
                  applies to jobs automatically—so you don't have to.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("get-started")}
                    className="text-lg px-8 py-3"
                  >
                    Start Applying Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-lg px-8 py-3"
                  >
                    See How It Works
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No manual applications
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tailored for each job
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 automation
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-96 h-96 p-3 bg-primary-foreground rounded-3xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="799.031"
                      height="618.112"
                      viewBox="0 0 799.031 618.112"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      role="img"
                      // artist="Katerina Limpitsouni"
                      // source="https://undraw.co/"
                    >
                      <g transform="translate(-560.484 -230.944)">
                        <path
                          d="M15.18,488.763c0,.872.478,1.573,1.073,1.573h535.1c.6,0,1.073-.7,1.073-1.573s-.478-1.573-1.073-1.573H16.253C15.658,487.191,15.18,487.891,15.18,488.763Z"
                          transform="translate(675.195 358.72)"
                          fill="#ccc"
                        />
                        <rect
                          width="19.105"
                          height="3.371"
                          transform="translate(865.646 842.298)"
                          fill="#b6b3c5"
                        />
                        <rect
                          width="19.105"
                          height="3.371"
                          transform="translate(1034.779 842.861)"
                          fill="#b6b3c5"
                        />
                        <path
                          d="M352.955,370.945a27.529,27.529,0,0,1-54.321,0H229.146V521.536h193.3V370.945Z"
                          transform="translate(634.205 321.322)"
                          fill="#d6d6e3"
                        />
                        <rect
                          width="193.296"
                          height="5.242"
                          transform="translate(863.914 830.927)"
                          fill="#090814"
                        />
                        <path
                          d="M788.255,487.17H10.776A10.788,10.788,0,0,1,0,476.394V32.688A10.788,10.788,0,0,1,10.776,21.911H788.255a10.789,10.789,0,0,1,10.776,10.776V476.394a10.789,10.789,0,0,1-10.776,10.776Z"
                          transform="translate(560.484 209.033)"
                          fill="#090814"
                        />
                        <rect
                          width="760.822"
                          height="429.297"
                          transform="translate(578.588 248)"
                          fill="#fff"
                        />
                        <g transform="translate(0 -41.857)">
                          <g transform="translate(-588.477 33.946)">
                            <path
                              d="M35.524,67.628A24.524,24.524,0,0,1,11,43.1V36.524A24.524,24.524,0,0,1,35.524,12a1.492,1.492,0,1,1,0,2.983,21.54,21.54,0,0,0-21.54,21.54V43.1a21.54,21.54,0,1,0,43.081,0V31.259a1.492,1.492,0,1,1,2.983,0V43.1A24.524,24.524,0,0,1,35.524,67.628Z"
                              transform="translate(1535.985 422.718)"
                            />
                            <path
                              d="M28.524,67.628A24.524,24.524,0,0,1,4,43.1V31.259a1.492,1.492,0,1,1,2.983,0V43.1a21.54,21.54,0,1,0,43.081,0V36.524a21.54,21.54,0,0,0-21.54-21.54,1.492,1.492,0,0,1,0-2.983A24.524,24.524,0,0,1,53.047,36.524V43.1A24.524,24.524,0,0,1,28.524,67.628Z"
                              transform="translate(1496.922 422.718)"
                            />
                            <path
                              d="M58.556,46.441a1.492,1.492,0,0,1-1.492-1.492V26.524a21.54,21.54,0,1,0-43.081,0,1.492,1.492,0,1,1-2.983,0,24.524,24.524,0,1,1,49.047,0V44.949A1.492,1.492,0,0,1,58.556,46.441Z"
                              transform="translate(1535.985 366.911)"
                            />
                            <path
                              d="M51.556,93.821a1.492,1.492,0,0,1-1.492-1.492V26.524a21.54,21.54,0,1,0-43.081,0V44.949a1.492,1.492,0,0,1-2.983,0V26.524A24.524,24.524,0,0,1,45.864,9.183a24.363,24.363,0,0,1,7.183,17.341V92.329A1.492,1.492,0,0,1,51.556,93.821Z"
                              transform="translate(1496.922 366.911)"
                            />
                            <g transform="translate(1570.017 382.073)">
                              <path
                                d="M20.782,57.047a1.492,1.492,0,1,1,0-2.983,21.54,21.54,0,1,0,0-43.081h-3.29a1.492,1.492,0,0,1,0-2.983h3.29a24.524,24.524,0,1,1,0,49.047Z"
                                transform="translate(-10.602 18.322)"
                              />
                              <path
                                d="M19.372,37.305a1.492,1.492,0,1,1,0-2.983,11.67,11.67,0,1,0,0-23.339h-1.88a1.492,1.492,0,0,1,0-2.983h1.88a14.653,14.653,0,1,1,0,29.305Z"
                                transform="translate(-16 -8)"
                              />
                              <path
                                d="M19.372,37.305h-1.88a1.492,1.492,0,1,1,0-2.983h1.88a11.67,11.67,0,0,0,0-23.339,1.492,1.492,0,0,1,0-2.983,14.653,14.653,0,0,1,0,29.305Z"
                                transform="translate(-16 62.894)"
                              />
                            </g>
                            <g transform="translate(1492.234 382.073)">
                              <path
                                d="M40.523,57.047A24.524,24.524,0,0,1,40.523,8h3.29a1.492,1.492,0,1,1,0,2.983h-3.29a21.54,21.54,0,0,0,0,43.081,1.492,1.492,0,0,1,0,2.983Z"
                                transform="translate(-16 18.322)"
                              />
                              <path
                                d="M30.652,37.305A14.653,14.653,0,0,1,30.652,8h1.88a1.492,1.492,0,1,1,0,2.983h-1.88a11.67,11.67,0,0,0,0,23.339,1.492,1.492,0,0,1,0,2.983Z"
                                transform="translate(0.678 -8)"
                              />
                              <path
                                d="M32.532,37.305h-1.88A14.653,14.653,0,0,1,30.652,8a1.492,1.492,0,0,1,0,2.983,11.67,11.67,0,0,0,0,23.339h1.88a1.492,1.492,0,1,1,0,2.983Z"
                                transform="translate(0.679 62.894)"
                              />
                            </g>
                          </g>
                          <g transform="translate(864.012 553.398)">
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(37.298)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(159.064)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(179.908)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="70.756"
                              height="7.13"
                              rx="3.565"
                              transform="translate(77.338)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(0.001 46.074)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(121.767 46.074)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(142.61 46.074)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="70.756"
                              height="7.13"
                              rx="3.565"
                              transform="translate(40.041 46.074)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(122.316 15.906)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(0.001 15.906)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(0.001)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(0 31.264)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="70.756"
                              height="7.13"
                              rx="3.565"
                              transform="translate(41.686 15.906)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(60.884 31.264)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="29.619"
                              height="7.13"
                              rx="3.565"
                              transform="translate(20.843 31.264)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(18.675)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="10.421"
                              height="7.13"
                              rx="3.565"
                              transform="translate(181.553 31.264)"
                              fill="var(--primary)"
                            />
                            <rect
                              width="70.756"
                              height="7.13"
                              rx="3.565"
                              transform="translate(100.375 31.264)"
                              fill="var(--primary)"
                            />
                          </g>
                        </g>
                        <g transform="translate(626.555 602.469)">
                          <path
                            d="M805.134,330.7H727.95a1.546,1.546,0,0,1-1.544-1.544V314.612h.618V329.16a.928.928,0,0,0,.927.927h77.184a.928.928,0,0,0,.927-.927V314.51h.618V329.16A1.546,1.546,0,0,1,805.134,330.7Z"
                            transform="translate(-646.44 -292.702)"
                            fill="#3f3d56"
                          />
                          <rect
                            width="181.374"
                            height="0.618"
                            transform="translate(5.3 21.601)"
                            fill="#3f3d56"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(0.001 16.549)"
                            fill="var(--primary)"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(53.991 16.549)"
                            fill="var(--primary)"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(90.634 32.165)"
                            fill="#3f3d56"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(118.489 32.165)"
                            fill="#ccc"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(104.991 16.549)"
                            fill="var(--primary)"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(180.632 16.549)"
                            fill="var(--primary)"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(154.616 16.549)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M537.36,277.577a.309.309,0,0,1-.309-.309V262.022a1.546,1.546,0,0,1,1.544-1.544H553.63a.309.309,0,1,1,0,.618H538.6a.928.928,0,0,0-.927.927v15.246a.309.309,0,0,1-.309.309Z"
                            transform="translate(-515.571 -255.358)"
                            fill="#3f3d56"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(33.452 0)"
                            fill="#e6e6e6"
                          />
                          <path
                            d="M921.669,277.268h-.618V262.022a1.546,1.546,0,0,1,1.544-1.544H937.63v.618H922.6a.928.928,0,0,0-.927.927Z"
                            transform="translate(-780.967 -255.358)"
                            fill="#3f3d56"
                          />
                          <ellipse
                            cx="5.313"
                            cy="5.313"
                            rx="5.313"
                            ry="5.313"
                            transform="translate(152.058 0)"
                            fill="#e6e6e6"
                          />
                        </g>
                        <path
                          d="M496.375,205.477c-2.221,0-4.027.792-4.027,1.764v1.411c0,.973,1.806,1.764,4.027,1.764h93.434c2.221,0,4.027-.792,4.027-1.764v-1.411c0-.973-1.806-1.764-4.027-1.764Z"
                          transform="translate(635.637 363.33)"
                          fill="#f2f2f2"
                        />
                        <path
                          d="M670.026,309.282c4,0,7.249,1.75,7.249,3.9v30.351c0,2.152-3.252,3.9-7.249,3.9H497.656c-4,0-7.249-1.75-7.249-3.9V313.184c0-2.152,3.252-3.9,7.249-3.9"
                          transform="translate(637.578 297.505)"
                          fill="#f2f2f2"
                        />
                        <path
                          d="M496.375,234.581c-2.221,0-4.027.973-4.027,2.168s1.806,2.168,4.027,2.168H639.748c2.221,0,4.027-.973,4.027-2.168s-1.806-2.168-4.027-2.168Z"
                          transform="translate(635.637 343.828)"
                          fill="#f2f2f2"
                        />
                        <path
                          d="M496.375,234.581c-2.221,0-4.027.973-4.027,2.168s1.806,2.168,4.027,2.168H639.748c2.221,0,4.027-.973,4.027-2.168s-1.806-2.168-4.027-2.168Z"
                          transform="translate(635.637 352.828)"
                          fill="#f2f2f2"
                        />
                        <path
                          d="M891.9,191.277H840.311a1.683,1.683,0,1,1,0-3.367H891.9a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 93.872)"
                          fill="var(--primary)"
                        />
                        <path
                          d="M862.672,210.649H840.311a1.683,1.683,0,1,1,0-3.367h22.361a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 81.146)"
                          fill="var(--primary)"
                        />
                        <g transform="translate(690.275 280.103)">
                          <ellipse
                            cx="6.686"
                            cy="6.686"
                            rx="6.686"
                            ry="6.686"
                            transform="translate(0 0)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M847.243,585.331H847.2a.874.874,0,0,1-.646-.336l-1.118-1.434a.875.875,0,0,1,.154-1.228l.04-.032a.874.874,0,0,1,1.228.154.638.638,0,0,0,.966.047l2.267-2.4a.876.876,0,0,1,1.237-.034l.037.035a.874.874,0,0,1,.034,1.237l-3.521,3.716a.874.874,0,0,1-.635.273Z"
                            transform="translate(-841.667 -576.242)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          d="M891.9,191.277H840.311a1.683,1.683,0,1,1,0-3.367H891.9a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 129.452)"
                          fill="var(--primary)"
                        />
                        <path
                          d="M862.672,210.649H840.311a1.683,1.683,0,1,1,0-3.367h22.361a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 116.727)"
                          fill="var(--primary)"
                        />
                        <g transform="translate(690.275 315.683)">
                          <ellipse
                            cx="6.686"
                            cy="6.686"
                            rx="6.686"
                            ry="6.686"
                            transform="translate(0 0)"
                            fill="#e6e6e6"
                          />
                          <path
                            d="M847.243,585.331H847.2a.874.874,0,0,1-.646-.336l-1.118-1.434a.875.875,0,0,1,.154-1.228l.04-.032a.874.874,0,0,1,1.228.154.638.638,0,0,0,.966.047l2.267-2.4a.876.876,0,0,1,1.237-.034l.037.035a.874.874,0,0,1,.034,1.237l-3.521,3.716a.874.874,0,0,1-.635.273Z"
                            transform="translate(-841.667 -576.242)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          d="M891.9,191.277H840.311a1.683,1.683,0,1,1,0-3.367H891.9a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 165.032)"
                          fill="var(--primary)"
                        />
                        <path
                          d="M862.672,210.649H840.311a1.683,1.683,0,1,1,0-3.367h22.361a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 152.307)"
                          fill="var(--primary)"
                        />
                        <g transform="translate(690.275 351.262)">
                          <ellipse
                            cx="6.686"
                            cy="6.686"
                            rx="6.686"
                            ry="6.686"
                            transform="translate(0 0)"
                            fill="#e6e6e6"
                          />
                          <path
                            d="M847.243,585.331H847.2a.874.874,0,0,1-.646-.336l-1.118-1.434a.875.875,0,0,1,.154-1.228l.04-.032a.874.874,0,0,1,1.228.154.638.638,0,0,0,.966.047l2.267-2.4a.876.876,0,0,1,1.237-.034l.037.035a.874.874,0,0,1,.034,1.237l-3.521,3.716a.874.874,0,0,1-.635.273Z"
                            transform="translate(-841.667 -576.242)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          d="M891.9,191.277H840.311a1.683,1.683,0,1,1,0-3.367H891.9a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 200.611)"
                          fill="#e6e6e6"
                        />
                        <path
                          d="M862.672,210.649H840.311a1.683,1.683,0,1,1,0-3.367h22.361a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 187.886)"
                          fill="#e6e6e6"
                        />
                        <g transform="translate(690.275 386.842)">
                          <ellipse
                            cx="6.686"
                            cy="6.686"
                            rx="6.686"
                            ry="6.686"
                            transform="translate(0 0)"
                            fill="#e6e6e6"
                          />
                          <path
                            d="M847.243,585.331H847.2a.874.874,0,0,1-.646-.336l-1.118-1.434a.875.875,0,0,1,.154-1.228l.04-.032a.874.874,0,0,1,1.228.154.638.638,0,0,0,.966.047l2.267-2.4a.876.876,0,0,1,1.237-.034l.037.035a.874.874,0,0,1,.034,1.237l-3.521,3.716a.874.874,0,0,1-.635.273Z"
                            transform="translate(-841.667 -576.242)"
                            fill="#fff"
                          />
                        </g>
                        <path
                          d="M891.9,191.277H840.311a1.683,1.683,0,1,1,0-3.367H891.9a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 236.191)"
                          fill="#e6e6e6"
                        />
                        <path
                          d="M862.672,210.649H840.311a1.683,1.683,0,1,1,0-3.367h22.361a1.683,1.683,0,1,1,0,3.367Z"
                          transform="translate(-212.074 223.466)"
                          fill="#e6e6e6"
                        />
                        <g transform="translate(690.275 422.422)">
                          <ellipse
                            cx="6.686"
                            cy="6.686"
                            rx="6.686"
                            ry="6.686"
                            transform="translate(0 0)"
                            fill="#e6e6e6"
                          />
                          <path
                            d="M847.243,585.331H847.2a.874.874,0,0,1-.646-.336l-1.118-1.434a.875.875,0,0,1,.154-1.228l.04-.032a.874.874,0,0,1,1.228.154.638.638,0,0,0,.966.047l2.267-2.4a.876.876,0,0,1,1.237-.034l.037.035a.874.874,0,0,1,.034,1.237l-3.521,3.716a.874.874,0,0,1-.635.273Z"
                            transform="translate(-841.667 -576.242)"
                            fill="#fff"
                          />
                        </g>
                        <g transform="translate(587.66 -327.248)">
                          <path
                            d="M345.8,318H248.438a.3.3,0,0,1-.3-.3c0-2.109,97.967-.168,97.967,0A.3.3,0,0,1,345.8,318Z"
                            transform="translate(381.092 338.302)"
                            fill="#090814"
                          />
                          <path
                            d="M290.014,369.407h-8.855a.905.905,0,0,1-.9-.9V356.3a.905.905,0,0,1,.9-.9h8.855a.905.905,0,0,1,.9.9V368.5A.905.905,0,0,1,290.014,369.407Z"
                            transform="translate(360.316 283.544)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M335.73,348.208h-8.855a.905.905,0,0,1-.9-.9V323.518a.905.905,0,0,1,.9-.9h8.855a.905.905,0,0,1,.9.9V347.3A.905.905,0,0,1,335.73,348.208Z"
                            transform="translate(330.75 304.743)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M381.445,369.407H372.59a.905.905,0,0,1-.9-.9V356.3a.905.905,0,0,1,.9-.9h8.855a.905.905,0,0,1,.9.9V368.5A.905.905,0,0,1,381.445,369.407Z"
                            transform="translate(301.181 283.544)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M427.161,339.839h-8.855a.886.886,0,0,1-.9-.863V310.539a.886.886,0,0,1,.9-.863h8.855a.886.886,0,0,1,.9.863v28.437A.886.886,0,0,1,427.161,339.839Z"
                            transform="translate(271.615 313.112)"
                            fill="var(--primary)"
                          />
                          <path
                            d="M472.877,324.777h-8.855a.905.905,0,0,1-.9-.9V287.291a.905.905,0,0,1,.9-.9h8.855a.905.905,0,0,1,.9.9v36.581A.905.905,0,0,1,472.877,324.777Z"
                            transform="translate(242.049 328.175)"
                            fill="var(--primary)"
                          />
                        </g>
                      </g>
                    </svg>
                    {/* <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="AI Robot helping with job applications"
                      className="w-80 h-80 object-contain"
                    /> */}
                  </div>
                  {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <Bot className="w-8 h-8 text-white" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="h-screen snap-start flex items-center justify-center bg-secondary"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How Apollo Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in minutes and let our AI agents handle your job
                search while you focus on what matters most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Upload Your Info
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your resume, skills, and job preferences. Our AI
                    learns your unique background and career goals.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Train Your Agent
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Customize your AI agent's behavior, set application
                    criteria, and define your ideal job parameters.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Start Applying
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sit back and relax. Apollo finds jobs, crafts personalized
                    applications, and submits them automatically.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("get-started")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="h-screen snap-start flex items-center justify-center bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of candidates who've landed their dream jobs with
                Apollo's AI-powered assistance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "Apollo helped me land my dream job at a tech startup. The
                    AI wrote better cover letters than I ever could, and I got
                    3x more interviews!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Sarah Martinez
                      </p>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "I was spending 20+ hours a week on applications. Apollo
                    reduced that to zero while increasing my response rate by
                    400%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">JC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">James Chen</p>
                      <p className="text-sm text-gray-500">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "The personalization is incredible. Each application felt
                    hand-crafted for the specific role. Got hired within 2
                    weeks!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">AR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Alex Rodriguez
                      </p>
                      <p className="text-sm text-gray-500">UX Designer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  10,000+ active users
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  85% success rate
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  50,000+ applications sent
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section
          id="get-started"
          className="h-screen snap-start flex items-center justify-center bg-primary-foreground"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful candidates who've automated their way
              to better careers.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-blue-100 mb-4">
                    Perfect for getting started
                  </p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />5
                      applications/month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Basic CV optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Email support
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-yellow-400 rounded-xl p-6 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900">
                    Most Popular
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-blue-100 mb-4">$29/month</p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Unlimited applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Advanced AI personalization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Analytics dashboard
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-blue-100 mb-4">Custom pricing</p>
                  <ul className="text-sm space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Team management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Dedicated support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="text-blue-100 text-sm mt-6">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
            <p className="text-blue-100 text-sm mt-2">
              By signing up, you agree to our{" "}
              <a
                href="/terms"
                className="text-white underline hover:text-blue-200"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-white underline hover:text-blue-200"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
