// ProfileImage.tsx

function ProfileImage() {
  return (
    <>
      <img
        className="w-44 h-60 md:w-60 md:h-80 object-cover object-center rounded-xl shadow-lg mx-auto hover:scale-105 transition"
        src="/ProfileImage.jpg"
        alt="Profile picture"
      />
    </>
  );
}

export default ProfileImage;
