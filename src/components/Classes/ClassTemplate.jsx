import React, { useState } from "react";
import HeroSection from "../../components/common/components/HeroSection";
import { nineTenHero, elevenHero, twelveHero } from "../../components/common/data/heroData.js";

// ─── Hero map ─────────────────────────────────────────────────────────────────
const HERO_MAP = { nineTenHero, elevenHero, twelveHero };

// ─── No-image placeholder ─────────────────────────────────────────────────────
const NoImagePlaceholder = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 mb-2 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 17l4-4a2 2 0 012.8 0L14 17m0 0l2-2a2 2 0 012.8 0L21 17M8 10a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
    <span className="text-xs font-semibold tracking-wide uppercase text-center leading-tight">
      NO IMAGE<br />AVAILABLE
    </span>
  </div>
);

// ─── Panel header (blue gradient) ────────────────────────────────────────────
const PanelHeader = ({ title }) => (
  <div
    className="px-6 py-4 rounded-t-xl"
    style={{ background: "linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)" }}
  >
    <h2 className="text-xl font-bold text-white">{title}</h2>
  </div>
);

// ─── Overview panel ───────────────────────────────────────────────────────────
// Supports three layouts via data fields:
//   heading + paragraphs[]             → IXth & Xth style
//   intro + bullets[]                  → XIth style
//   intro + bullets[] + closingParagraph → XIIth style
const OverviewPanel = ({ data }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <PanelHeader title={data.title} />
    <div className="p-6 bg-white">

      {/* Optional bold heading */}
      {data.heading && (
        <h3 className="text-base font-bold text-gray-900 mb-3">{data.heading}</h3>
      )}

      {/* Plain paragraphs */}
      {data.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm text-gray-700 leading-relaxed text-justify mb-3 last:mb-0">
          {p}
        </p>
      ))}

      {/* Intro sentence before bullet list */}
      {data.intro && (
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{data.intro}</p>
      )}

      {/* Bullet list */}
      {data.bullets?.length > 0 && (
        <ul className="list-disc list-outside pl-5 space-y-2">
          {data.bullets.map((b, i) => (
            <li key={i} className="text-sm text-gray-700">{b}</li>
          ))}
        </ul>
      )}

      {/* Optional closing paragraph after bullets */}
      {data.closingParagraph && (
        <p className="text-sm text-gray-700 leading-relaxed text-justify mt-4">
          {data.closingParagraph}
        </p>
      )}

      {/* Optional image */}
      {data.image && (
        <img src={data.image} alt={data.imageAlt} className="mt-4 max-w-full rounded" />
      )}

    </div>
  </div>
);

// ─── Coordinator Desk panel ───────────────────────────────────────────────────
// message === null  → card style  (image top, name + designation centred below)
// message !== null  → side-by-side (image left, message text right)
const CoordinatorDeskPanel = ({ data }) => {
  const { coordinator } = data;
  const isCard = !coordinator.message;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <PanelHeader title={data.title} />
      <div className="p-6 bg-white">
        {isCard ? (
          <div className="inline-flex flex-col items-center">
            {coordinator.image ? (
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className="w-36 h-36 object-contain rounded mb-3"
              />
            ) : (
              <div className="w-36 h-36 rounded mb-3 overflow-hidden">
                <NoImagePlaceholder className="w-full h-full" />
              </div>
            )}
            {coordinator.name && (
              <p className="text-sm font-bold text-gray-900">{coordinator.name}</p>
            )}
            {coordinator.designation && (
              <p className="text-sm text-gray-500 mt-0.5">{coordinator.designation}</p>
            )}
          </div>
        ) : (
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-48 h-48 rounded overflow-hidden">
              {coordinator.image ? (
                <img src={coordinator.image} alt={coordinator.name} className="w-full h-full object-contain" />
              ) : (
                <NoImagePlaceholder className="w-full h-full" />
              )}
            </div>
            <div className="flex-1">
              {coordinator.name && (
                <p className="text-sm font-bold text-gray-900 mb-1">{coordinator.name}</p>
              )}
              {coordinator.designation && (
                <p className="text-sm text-gray-500 mb-3">{coordinator.designation}</p>
              )}
              <p className="text-sm text-gray-700 leading-relaxed">{coordinator.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Vision & Mission panel ───────────────────────────────────────────────────
// Two shapes accepted:
//   data.classes[]                     → per-class headers (IXth & Xth)
//   data.vision[] + data.mission[]     → flat (XIth / XIIth)
const VisionMissionPanel = ({ data }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <PanelHeader title={data.title} />
    <div className="p-6 bg-white">
      <div className="border border-gray-200 rounded-lg p-6">

        {/* Flat vision/mission */}
        {data.vision && data.mission && (
          <>
            {data.vision.length > 0 && (
              <div className="mb-5">
                <p className="text-sm font-bold text-gray-900 mb-2">Vision</p>
                <ul className="list-disc list-outside pl-5 space-y-1">
                  {data.vision.map((v, i) => (
                    <li key={i} className="text-sm text-gray-700">{v}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.mission.length > 0 && (
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">Mission</p>
                <ol className="list-decimal list-outside pl-5 space-y-1">
                  {data.mission.map((m, i) => (
                    <li key={i} className="text-sm text-gray-700">{m}</li>
                  ))}
                </ol>
              </div>
            )}
          </>
        )}

        {/* Per-class vision/mission */}
        {data.classes?.map((cls, i) => (
          <div key={i} className={i > 0 ? "mt-8" : ""}>
            <p className="text-sm font-semibold text-gray-800 mb-3">{cls.className}</p>

            {cls.vision?.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-bold text-gray-900 mb-2">Vision</p>
                <ul className="list-disc list-outside pl-5 space-y-1">
                  {cls.vision.map((v, vi) => (
                    <li key={vi} className="text-sm text-gray-700">{v}</li>
                  ))}
                </ul>
              </div>
            )}

            {cls.mission?.length > 0 && (
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">Mission</p>
                <ol className="list-decimal list-outside pl-5 space-y-1">
                  {cls.mission.map((m, mi) => (
                    <li key={mi} className="text-sm text-gray-700">{m}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  </div>
);

// ─── Faculty panel ────────────────────────────────────────────────────────────
const FacultyPanel = ({ data }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <PanelHeader title={data.title} />
    <div className="p-6 bg-white">
      {data.members.length === 0 ? (
        <p className="text-sm text-gray-500">No faculty members added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.members.map((member, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-48 object-contain" />
              ) : (
                <NoImagePlaceholder className="w-full h-48" />
              )}
              <div className="p-4">
                <p className="text-sm font-bold text-gray-900">{member.name}</p>
                {member.designation && (
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
                    {member.designation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ─── Stream panel ─────────────────────────────────────────────────────────────
// groupLabel: null → no label shown above buttons
const StreamPanel = ({ data }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <PanelHeader title={data.title} />
    <div className="p-6 bg-white">
      <div className="border border-gray-200 rounded-xl p-6">
        {data.groupLabel && (
          <p className="text-sm text-gray-500 mb-4">{data.groupLabel}</p>
        )}
        <div className="flex flex-wrap gap-3">
          {data.streams.map((stream, i) => (
            <a
              key={i}
              href={stream.link}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium border transition-colors duration-150 ${
                i === 0
                  ? "bg-blue-900 text-white border-blue-900 hover:bg-blue-800"
                  : "bg-white text-blue-600 border-blue-400 hover:bg-blue-50"
              }`}
            >
              {i === 0 ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
              {stream.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Main reusable template ───────────────────────────────────────────────────
const BASE_TABS = ["Overview", "Coordinator Desk", "Vision & Mission", "Faculty"];

const ClassTemplate = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Stream tab only appears when data.stream is defined
  const tabs = data.stream ? [...BASE_TABS, "Stream"] : BASE_TABS;

  const hero = HERO_MAP[data.heroKey];

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":         return <OverviewPanel        data={data.overview}        />;
      case "Coordinator Desk": return <CoordinatorDeskPanel data={data.coordinatorDesk} />;
      case "Vision & Mission": return <VisionMissionPanel   data={data.visionMission}   />;
      case "Faculty":          return <FacultyPanel         data={data.faculty}         />;
      case "Stream":           return <StreamPanel          data={data.stream}          />;
      default:                 return null;
    }
  };

  return (
    <div>
      {hero && <HeroSection {...hero} />}

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex gap-6 items-start">

          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-bold text-blue-900 mb-5">{data.sidebarTitle}</h2>
            <nav className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content panel */}
          <main className="flex-1 min-w-0">
            {renderContent()}
          </main>

        </div>
      </section>
    </div>
  );
};

export default ClassTemplate;