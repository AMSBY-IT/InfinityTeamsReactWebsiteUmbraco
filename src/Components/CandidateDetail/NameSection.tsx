const NameSection = () => {
  return (
    <>
      <div className="tw-mx-auto">
        <div className="tw-rounded-xl tw-overflow-hidden tw-border tw-border-gray-100 tw-bg-white">

          {/* Content section */}
          <div className="tw-pt-24 tw-pb-6 tw-px-6">
            <div className="tw-flex tw-justify-between tw-items-start">
              <div>
                <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900">
                  Associate Project Manager
                </h1>
                <p className="tw-text-lg tw-text-gray-800 tw-mt-1">Microsoft Inc.</p>
                <div className="tw-flex tw-items-center tw-mt-3 tw-text-gray-500">
                  <span>Los Angeles, USA</span>
                  <span className="tw-mx-2">•</span>
                  <span>14 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameSection;
