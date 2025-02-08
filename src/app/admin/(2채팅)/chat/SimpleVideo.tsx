export const SimpleVideo = () => {
  const src = "/video/sample.mp4";

  return (
    <div className="flex justify-center items-center  py-1">
      {src ? (
        <video controls className="w-full max-w-md rounded-lg">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};
