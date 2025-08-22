const AboutSection = () => {
    return (
        <div className="tw-bg-white tw-rounded-lg tw-border tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-4">About the candidate</h2>
            <p className="tw-text-gray-700 tw-text-md tw-leading-relaxed tw-mb-6">
              Microsoft is an equal opportunity employer. All qualified applicants will receive consideration for
              employment without regard to age, ancestry, color, family or medical care leave, gender identity or
              expression, genetic information, marital status, medical condition, national origin, physical or mental
              disability, political affiliation, protected veteran status, race, religion, sex (including pregnancy),
              sexual orientation, or any other characteristic protected by applicable laws, regulations and ordinances.
              All qualified applicants will receive consideration for employment.
            </p>

            <div className="tw-space-y-4">
              <h3 className="tw-font-medium">Responsibilities:</h3>
              <ul className="tw-list-disc tw-pl-6 tw-text-sm tw-text-gray-700 tw-space-y-2">
                <li>Deliver the project or solution as per the baseline scope, cost & schedule.</li>
                <li>Maintain high team & customer satisfaction levels.</li>
                <li>Ensure high quality delivery without any escalations.</li>
              </ul>
            </div>

            <button className="tw-mt-4 tw-text-blue-600 tw-text-sm tw-flex tw-items-center">
              <span className="tw-mr-1">See more</span>
              <span className="tw-text-blue-600">•••</span>
            </button>
        </div>
    )
}

export default AboutSection;
