import ContactForm from "./components/ContactForm";

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
    "Consumer Electronics",
    "Embedded Systems",
    "Electronics Manufacturing",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 flex items-center justify-center p-2">

              <img
                src="/Docore.png"
                alt="Docore Systems Logo"
                className="object-contain w-full h-full"
              />

            </div>

            <div>

              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                Docore Systems
              </h1>

              <p className="text-sm text-cyan-300">
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

          <a
            href="#contact"
            className="hidden md:flex px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/20"
          >
            Contact Us
          </a>

        </div>

      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative pt-40 pb-32 px-6 bg-black overflow-hidden"
      >

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.25),transparent_35%)]"></div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.18),transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-8">
              Precision Testing & Validation Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Engineering

              <span className="block text-cyan-400">
                Validation
              </span>

              For Modern Technology

            </h1>

            <p className="text-slate-300 text-xl leading-9 mb-10 max-w-2xl">

              Docore Systems delivers reliable hardware, embedded,
              storage, and product validation services for
              next-generation technology platforms.

            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="#services"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-xl shadow-cyan-500/20"
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

          {/* Right Cards */}
          <div className="relative">

            <div className="absolute -inset-10 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative grid grid-cols-2 gap-6">

              {[
                ["Requirements", "& Strategy"],
                ["Test System", "Design"],
                ["Validation", "& Gage R&R"],
                ["Production", "Handoff & Support"],
              ].map(([title, subtitle]) => (

                <div
                  key={title}
                  className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 text-center shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/30 transition duration-300"
                >

                  <h3 className="text-cyan-400 text-3xl font-black mb-4">
                    {title}
                  </h3>

                  <p className="text-slate-300 text-lg">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-slate-950">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Section */}
          <div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 rounded-[32px] p-6 shadow-2xl shadow-cyan-500/10">

              <div
                className="h-[420px] rounded-3xl border border-cyan-500/20 overflow-hidden relative bg-cover bg-center"
                style={{
                  backgroundImage: "url('/about-testing.PNG')",
                }}
              >

                <div className="absolute inset-0 bg-black/55"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>

                <div className="relative z-10 h-full flex items-center justify-center px-10">

                  <span className="text-4xl font-black text-white text-center leading-tight drop-shadow-2xl">
                    Remote Testing & Validation Services
                    <br />

                    <span className="text-cyan-400">
                      (Freelance Solutions)
                    </span>

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* About Text */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-5 text-sm">
              About Us
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Trusted Engineering Validation Partner
            </h2>

            <p className="text-slate-300 leading-9 text-xl mb-10">

              We specialize in testing and validation services for
              hardware, embedded systems, storage platforms, and
              production environments.

            </p>

            <div className="space-y-6 mb-10">

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  Design for Test (DFT) Analysis
                </h3>

                <p className="text-slate-300 leading-7">
                  They help make products easier to test during manufacturing.
                </p>

              </div>

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  Manufacturing Test Strategy
                </h3>

                <p className="text-slate-300 leading-7">
                  Define what tests should be done at each production stage
                  to improve yield and reduce failures.
                </p>

              </div>

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  Custom Test Jigs & Fixtures
                </h3>

                <p className="text-slate-300 leading-7">
                  Develop mechanical fixtures and automated setups for
                  reliable repeatable testing.
                </p>

              </div>

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  Electrical & Instrumentation Design
                </h3>

                <p className="text-slate-300 leading-7">
                  Build hardware interfaces and test systems for DUTs
                  (Devices Under Test).
                </p>

              </div>

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  Automated Test Software Development
                </h3>

                <p className="text-slate-300 leading-7">
                  Create scripts and automation frameworks for functional
                  and production testing.
                </p>

              </div>

              <div className="bg-slate-900/60 border border-cyan-500/10 rounded-2xl p-6">

                <h3 className="text-cyan-400 text-xl font-bold mb-3">
                  System Integration & Deployment
                </h3>

                <p className="text-slate-300 leading-7">
                  Integrate ATE into assembly lines, MES/ERP systems,
                  and smart factories.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Services
            </p>

            <h2 className="text-5xl font-black mb-6">
              Testing & Validation Services
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-9">
              Comprehensive engineering validation solutions for
              modern enterprise technology platforms.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (

              <div
                key={service}
                className="group bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-400 rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">

                  <div className="w-6 h-6 rounded-full bg-cyan-400"></div>

                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {service}
                </h3>

                <p className="text-slate-400 leading-7">
                  Advanced validation processes and engineering support tailored
                  for enterprise-grade testing requirements.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Industries */}
      <section id="industries" className="py-32 px-6 bg-slate-950">

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
                className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300 hover:-translate-y-2"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {industry}
                </h3>

                <p className="text-slate-400 leading-8">
                  Specialized testing and validation support for
                  modern technology ecosystems.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Contact
            </p>

            <h2 className="text-5xl font-black mb-8">
              Let’s Discuss Your Validation Requirements
            </h2>

            <p className="text-slate-400 text-xl leading-9 mb-10">
              Reach out to our engineering team for testing,
              validation, and product quality solutions.
            </p>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8">

              <p className="text-slate-400 mb-3">
                Email
              </p>

              <p className="text-2xl font-bold text-cyan-400">
                docoresystems@gmail.com
              </p>

            </div>

          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 rounded-[32px] p-10 shadow-2xl shadow-cyan-500/10">

            <ContactForm />

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 bg-black px-6 py-14">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">

                <img
                  src="/Docore.png"
                  alt="Docore Logo"
                  className="object-contain w-full h-full"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Docore Systems
                </h3>

                <p className="text-sm text-cyan-300">
                  Testing & Validation
                </p>

              </div>

            </div>

            <p className="text-slate-500 leading-8">
              Delivering advanced testing and validation services
              for modern enterprise and embedded technology
              platforms.
            </p>

          </div>

          <div>

            <h4 className="text-xl font-bold mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-slate-400">

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

            </div>

          </div>

          <div>

            <h4 className="text-xl font-bold mb-6">
              Contact
            </h4>

            <p className="text-cyan-400 text-lg">
              docoresystems@gmail.com
            </p>

          </div>

        </div>

        <div className="border-t border-cyan-500/10 mt-12 pt-8 text-center text-slate-500">
          © 2024 Docore Systems. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}