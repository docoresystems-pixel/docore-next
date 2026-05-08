import ContactForm from "@/components/ContactForm";

export default function DocoreHomepage() {
  const services = [
    "Camera Focusing and Verification",
    "PCB Functional Validation",
    "EOL Level Testing",
    "LabVIEW Automation Testing",
    "Vision Based Solution",
    "Data Logging and Report Generation",
    "Mechanical Design",
    "Wiring Harness",
  ];

  const industries = [
    "Automotive",
    "Consumer Electronics",
    "Industrial Automation",
    "Embedded Systems",
    "Electronics Manufacturing",
    "IoT Platforms",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-slate-700 shadow-lg shadow-cyan-500/10 flex items-center justify-center p-1">
              <img
                src="/Docore.png"
                alt="Docore Systems Logo"
                className="object-contain w-full h-full"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Docore Systems
              </h1>
              <p className="text-xs text-slate-400">
                Testing & Validation
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#industries" className="hover:text-cyan-400 transition">
              Industries
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative pt-36 pb-28 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#06b6d4,_transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
              Precision Testing & Validation Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Engineering
              <span className="block text-cyan-400">
                Validation
              </span>
              For Modern Technology
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-10 max-w-2xl">
              Docore Systems delivers reliable hardware, embedded,
              storage, and product validation services for
              next-generation technology platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/30"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-cyan-400 text-4xl font-bold mb-2">
                    24/7
                  </h3>

                  <p className="text-slate-400">
                    Validation Support
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-cyan-400 text-4xl font-bold mb-2">
                    100%
                  </h3>

                  <p className="text-slate-400">
                    Quality Focus
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-cyan-400 text-4xl font-bold mb-2">
                    AI
                  </h3>

                  <p className="text-slate-400">
                    Vision Solutions
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-cyan-400 text-4xl font-bold mb-2">
                    EOL
                  </h3>

                  <p className="text-slate-400">
                    Testing Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-10 h-full">
              <div className="h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400 text-center">
                  Remote Testing & Validation Solutions
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Trusted Engineering Validation Partner
            </h2>

            <p className="text-slate-300 leading-8 text-lg mb-8">
              We specialize in testing and validation services for
              hardware, embedded systems, storage platforms, and
              production environments. Our engineering-driven
              approach ensures reliable and scalable validation
              solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Testing Expertise",
                "Automation Validation",
                "Engineering Support",
                "Reliability Assurance",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition"
                >
                  <h3 className="font-semibold text-lg">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Services
            </p>

            <h2 className="text-5xl font-black mb-6">
              Testing & Validation Services
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-8">
              Comprehensive engineering validation solutions
              designed for modern enterprise and embedded
              technology platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="group bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-400"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {service}
                </h3>

                <p className="text-slate-400 leading-7 mb-8">
                  Advanced validation processes and engineering
                  support tailored for enterprise-grade testing
                  requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-28 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Industries
            </p>

            <h2 className="text-5xl font-black mb-6">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {industry}
                </h3>

                <p className="text-slate-400 leading-7">
                  Specialized testing and validation support for
                  modern technology ecosystems.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready To Build Reliable Products?
          </h2>

          <p className="text-xl leading-8 mb-10 text-slate-900">
            Partner with Docore Systems for scalable testing,
            validation, and engineering quality solutions.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-5 rounded-2xl bg-black text-white hover:bg-slate-900 transition font-semibold text-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Contact
            </p>

            <h2 className="text-5xl font-black mb-8">
              Let’s Discuss Your Validation Requirements
            </h2>

            <p className="text-slate-400 text-lg leading-8 mb-10">
              Reach out to our engineering team for testing,
              validation, and product quality solutions.
            </p>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 mb-2">Email</p>

                <p className="text-xl font-semibold text-cyan-400">
                  docoresystems@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Docore Systems
            </h3>

            <p className="text-slate-500 max-w-md leading-7">
              Delivering advanced testing and validation services
              for modern enterprise and embedded technology
              platforms.
            </p>
          </div>

          <div>
            <p className="text-slate-500 mb-2">Contact</p>

            <p className="text-cyan-400">
              docoresystems@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}