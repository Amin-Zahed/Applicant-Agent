import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Settings,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import AiAgentSvg from "../../assets/svgs/ai-agent-svg";
import { Link } from "react-router-dom";
import usePrivacy from "@/stores/usePrivacy";

const LandingPage = () => {
  const { setShowPrivacy } = usePrivacy();

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
  };

  return (
    <div className="bg-background w-full h-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
      <div className="scroll-smooth snap-y snap-mandatory w-full h-full min-h-fit bg-background">
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
                  <div className="w-96 h-96 p-3 bg-background flex items-center justify-center">
                    <AiAgentSvg />
                  </div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How Apollo Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get started in minutes and let our AI agents handle your job
                search while you focus on what matters most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Upload Your Info
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Share your resume, skills, and job preferences. Our AI
                    learns your unique background and career goals.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Train Your Agent
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customize your AI agent's behavior, set application
                    criteria, and define your ideal job parameters.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Start Applying
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "Apollo helped me land my dream job at a tech startup. The
                    AI wrote better cover letters than I ever could, and I got
                    3x more interviews!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Sarah Martinez
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer
                      </p>
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "I was spending 20+ hours a week on applications. Apollo
                    reduced that to zero while increasing my response rate by
                    400%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">JC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        James Chen
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Product Manager
                      </p>
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "The personalization is incredible. Each application felt
                    hand-crafted for the specific role. Got hired within 2
                    weeks!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">AR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Alex Rodriguez
                      </p>
                      <p className="text-sm text-muted-foreground">
                        UX Designer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of successful candidates who've automated their way
              to better careers.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-foreground">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-muted-foreground mb-4">
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
                  <p className="text-muted-foreground mb-4">$29/month</p>
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
                  <p className="text-muted-foreground mb-4">Custom pricing</p>
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
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              By signing up, you agree to our
              <Link to="/terms&conditions">
                <Button
                  variant="link"
                  className="dark:text-foreground light:text-primary"
                  onClick={() => {
                    setShowPrivacy(false);
                  }}
                >
                  Terms & Conditions
                </Button>
              </Link>
              and
              <Link to="/terms&conditions">
                <Button
                  variant="link"
                  className="dark:text-foreground light:text-primary"
                  onClick={() => {
                    setShowPrivacy(true);
                  }}
                >
                  Privacy Policy
                </Button>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
