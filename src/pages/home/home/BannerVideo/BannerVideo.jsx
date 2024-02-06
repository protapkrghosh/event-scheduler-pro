const BannerVideo = () => {
  return (
    <div className="relative md:w-7/12 mx-auto md:mt-6">
      <video
        autoPlay
        loop
        muted
        className="w-[1000px] mx-auto h-[500px] "
        poster="https://storage.googleapis.com/zcal-us-central-1/resources/hero_invite_1280_820_720.jpg"
      >
        <source
          src="https://storage.googleapis.com/zcal-us-central-1/resources/hero_invite_1280_820_720.mp4"
          type="video/mp4"
        />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
