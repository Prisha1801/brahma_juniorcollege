import HeroSection from '../components/common/components/HeroSection';
import { antiRaggingHero } from '../components/common/data/heroData';

const AntiRagg = () => {
  return (
    <div>
      <HeroSection {...antiRaggingHero} />

      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Anti - Ragging Committee &amp; Squad
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    Sr. No
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    Name of the Committee Member
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    Profession / Designation
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    Appointed As
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AntiRagg;