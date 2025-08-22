const SkillsSection = () => {
    return (
        <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-4">Skills</h2>
            <div className="tw-flex tw-flex-wrap tw-gap-2">
                {[
                    "Business",
                    "Marketing",
                    "Development",
                    "Founder",
                    "Entrepreneur",
                    "Html",
                    "Interface Design",
                    "University",
                    "Engineering",
                    "Mobile Apps",
                ].map((skill) => (
                    <div key={skill} className="tw-bg-gray-100 tw-py-1 tw-px-2 tw-rounded-md">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
