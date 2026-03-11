import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const NestedDropdown = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const nestedRef = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nestedRef.current && !nestedRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={nestedRef}>
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
      >
        <span>{item.title}</span>
        <FaChevronDown
          className={`text-[8px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && item.items && (
        <ul className="absolute left-full top-0 ml-1 w-auto bg-white border border-gray-200 shadow-md z-50 rounded-md">
          {item.items.map((subItem, index) => (
            <li key={index}>
              {subItem.external ? (
                <a
                  href={subItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  {subItem.label}
                </a>
              ) : (
                <Link
                  to={subItem.link}
                  onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  {subItem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <li className="relative" ref={dropdownRef}>
      {/* ── Desktop button — always WHITE ── */}
      <button
        onClick={handleToggle}
        className="flex items-center gap-0.5 px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-white hover:text-green-400 uppercase tracking-wide transition-colors"
      >
        {title}
        <FaChevronDown
          className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && items.length > 0 && (
        <ul className="absolute left-0 top-full mt-1 w-auto min-w-64 whitespace-nowrap bg-white border border-gray-200 shadow-md z-[80] rounded-md">
          {items.map((item, index) => (
            <li key={index}>
              {item.items ? (
                <NestedDropdown item={item} onClose={handleClose} />
              ) : item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.link}
                  onClick={handleClose}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const stickyStartYRef = useRef(0);
  const isStickyRef = useRef(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const updateNavMetrics = () => {
      if (navRef.current) {
        const currentNavHeight = navRef.current.offsetHeight;
        setNavHeight(currentNavHeight);
        if (!isStickyRef.current) {
          const navTop = navRef.current.getBoundingClientRect().top + window.scrollY;
          stickyStartYRef.current = navTop + currentNavHeight;
        }
      }
    };

    const updateStickyState = () => {
      const shouldStick = window.scrollY >= stickyStartYRef.current;
      if (shouldStick !== isStickyRef.current) {
        isStickyRef.current = shouldStick;
        setIsSticky(shouldStick);
      }
    };

    updateNavMetrics();
    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateNavMetrics);
    window.addEventListener("resize", updateStickyState);
    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateNavMetrics);
      window.removeEventListener("resize", updateStickyState);
    };
  }, []);

  const navData = [
    {
      title: "About Us",
      items: [
        { label: "Chairmen's Desk", link: "/chairman-desk" },
        { label: "General Secretary's Desk", link: "/secretary-desk" },
        { label: "Vice Presidet Desk", link: "/vice-president-desk" },
        { label: "Campus Director's Desk", link: "/campus-director-desk" },
        { label: "Board Members", link: "/board-members" },
        { label: "Governing Body", link: "/governing-body" },
        { label: "Principal Desk", link: "/principal-desk" },
        { label: "Vision & Mission", link: "/vision-mission" },
      ],
    },
    {
      title: "Sections",
      items: [
        { label: "Primary", link: "/board-members" },
        { label: "Secondary & High Secondary", link: "/chairman-desk" },
      ],
    },
    {
      title: "Classes",
      items: [
        { label: "IXTH & XTh", link: "/nine-ten" },
        { label: "XITh", link: "/eleven" },
        { label: "XIITH", link: "/twelve" },
      ],
    },
    {
      title: "Admissions",
      items: [
        { label: "Course Details", link: "/admission/course-details" },
        { label: "Eligibility", link: "/admission/eligibility" },
        { label: "Fee Structure", link: "/admission/fees-structure" },
        { label: "Required Documents", link: "/admission/required-documents" },
        { label: "Rules & Regulations", link: "/admission/rules-regulations" },
        { label: "Admission Enquiry", link: "/admission/admission-form" },
      ],
    },
    {
      title: "Redressal Desk",
      items: [
        { label: "Student Protection Committee", link: "/student-committee" },
        { label: "School Management Committee", link: "/school-management-committee" },
        { label: "Sakhi Savitri Committee", link: "/sakhi-savitri-committee" },
        { label: "Parent's Teacher Association Committee", link: "/parent-teacher-association-committee" },
      ],
    },
    {
      title: "Facilities",
      items: [
        { label: "Laboratory", link: "/laboratory" },
        { label: "Library", link: "/library" },
        { label: "Medical", link: "/medical" },
        { label: "Sports", link: "/sports" },
      ],
    },
  ];

  return (
    <>
      {isSticky && <div style={{ height: navHeight }} />}
      <header
        ref={navRef}
        className={`w-full bg-[#3F414C] text-white shadow-sm border-b border-gray-200 transition-all duration-200 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <nav className="w-full px-6 xl:px-10 py-3 flex items-center">

          {/* LEFT LOGO */}
          <div className="shrink-0">
            <Link to="/">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10 md:h-12 xl:h-14" />
            </Link>
          </div>

          {/* ── DESKTOP MENU — all links WHITE ── */}
          <div className="flex-1 hidden xl:flex items-center justify-center px-2">
            <ul className="flex items-center space-x-1 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
              <li>
                <Link
                  to="/"
                  className="px-1.5 text-white hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              {navData.slice(0, 7).map((group, idx) => (
                <Dropdown key={idx} title={group.title} items={group.items} />
              ))}

              <li>
                <Link
                  to="/gallery"
                  className="px-1.5 text-white hover:text-green-400 transition-colors"
                >
                  Life @BVCTE
                </Link>
              </li>

              <li>
                <Link
                  to="/faculty"
                  onClick={closeMobileMenu}
                  className="px-1.5 text-white hover:text-green-400 transition-colors"
                >
                  Faculty
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="px-1.5 text-white hover:text-green-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT LOGO & MOBILE HAMBURGER */}
          <div className="flex-1 xl:flex-none flex items-center justify-end gap-2 xl:gap-0">
            <div className="flex-shrink-0 xl:pl-6">
              <Link to="/">
                <img src="/logo/right-logo.jpg" alt="Right Logo" className="h-10 md:h-14 xl:h-20" />
              </Link>
            </div>
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-2xl p-2 text-white hover:text-green-400 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 xl:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        />

        {/* ── MOBILE SIDE MENU — all links BLACK ── */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full overflow-y-auto">
            {/* Mobile header */}
            <div className="flex justify-between items-center mb-8">
              <img src="/logo/left-logo.png" alt="Logo" className="h-10" />
              <button onClick={closeMobileMenu} className="text-2xl text-gray-700 hover:text-gray-900">
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-2">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm font-semibold text-gray-900 hover:text-green-700 uppercase"
                >
                  Home
                </Link>
              </li>

              {/* First 4 nav groups */}
              {navData.slice(0, 4).map((group, idx) => (
                <li key={idx}>
                  <div className="py-2">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                      {group.title}
                    </span>
                    <ul className="pl-4 space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i}>
                          {item.external ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobileMenu}
                              className="block py-1.5 text-sm text-gray-800 hover:text-green-700 border-l border-gray-200 pl-3"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              to={item.link}
                              onClick={closeMobileMenu}
                              className="block py-1.5 text-sm text-gray-800 hover:text-green-700 border-l border-gray-200 pl-3"
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}

              {/* Placement Cell standalone */}
              <li>
                <Link
                  to="/placement-cell"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm font-semibold text-gray-900 hover:text-green-700 uppercase"
                >
                  Placement Cell
                </Link>
              </li>

              {/* Grievances group */}
              <li>
                <div className="py-2">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                    {navData[4].title}
                  </span>
                  <ul className="pl-4 space-y-1">
                    {navData[4].items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.link}
                          onClick={closeMobileMenu}
                          className="block py-1.5 text-sm text-gray-800 hover:text-green-700 border-l border-gray-200 pl-3"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Gallery */}
              <li>
                <Link
                  to="/gallery"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm font-semibold text-gray-900 hover:text-green-700 uppercase"
                >
                  Gallery
                </Link>
              </li>

              {/* Student Guide + Training & Placements */}
              {navData.slice(5, 7).map((group, idx) => (
                <li key={idx}>
                  <div className="py-2">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                      {group.title}
                    </span>
                    <ul className="pl-4 space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.link}
                            onClick={closeMobileMenu}
                            className="block py-1.5 text-sm text-gray-800 hover:text-green-700 border-l border-gray-200 pl-3"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}

              {/* Contact Us */}
              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm font-semibold text-gray-900 hover:text-green-700 uppercase"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;