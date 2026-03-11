import HeroSection from '../components/common/components/HeroSection';
import { vishakhaCommitteeHero } from '../components/common/data/heroData';

const committeeData = [
  // Add committee members here
  // { srNo: 1, name: "", profession: "", appointedAs: "", contactNo: "" },
];

const VishakhaCommittee = () => {
  return (
    <div>
      <HeroSection {...vishakhaCommitteeHero} />

      <div className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">

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
                {committeeData.length > 0 ? (
                  committeeData.map((member, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-gray-700">{member.srNo}</td>
                      <td className="px-4 py-3 text-gray-700">{member.name}</td>
                      <td className="px-4 py-3 text-gray-700">{member.profession}</td>
                      <td className="px-4 py-3 text-gray-700">{member.appointedAs}</td>
                      <td className="px-4 py-3 text-gray-700">{member.contactNo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-400 text-sm">
                      No committee members added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VishakhaCommittee;