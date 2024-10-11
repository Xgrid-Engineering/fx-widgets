type ProfileImageProps = {
  src: string;
  ringColor?: string;
};

function ProfileImage({ src, ringColor }: ProfileImageProps) {
  return (
    <div
      className="profile-img"
      style={{ "--ring-color": ringColor } as React.CSSProperties}
    >
      <img src={src} alt="profile" className="profile-img-src" />
    </div>
  );
}

export default ProfileImage;
