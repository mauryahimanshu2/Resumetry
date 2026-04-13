import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
const SidebarTemplate = ({ data }) => {
  return (
    <div className="grid grid-cols-3 max-w-5xl mx-auto bg-white">

      {/* Sidebar */}
      <div className="col-span-1 bg-gray-100 p-6">
        <h1 className="text-xl font-bold">{data.personal_info?.full_name}</h1>

        <div className="mt-4 text-sm">
          <p>{data.personal_info?.email}</p>
          <p>{data.personal_info?.phone}</p>
          <p>{data.personal_info?.location}</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold">Skills</h2>
          {data.skills?.map((skill, i) => (
            <p key={i} className="text-sm">• {skill}</p>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="col-span-2 p-6">
        <h2 className="font-semibold">Experience</h2>
        {data.experience?.map((exp, i) => (
          <div key={i} className="mt-3">
            <p className="font-medium">{exp.position}</p>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}

        <h2 className="font-semibold mt-6">Education</h2>
        {data.education?.map((edu, i) => (
          <p key={i} className="text-sm">
            {edu.degree} - {edu.institution}
          </p>
        ))}
      </div>
    </div>
  );
};
export default SidebarTemplate;