type Props = {
  imageSrc: string;
  altText: string;
};

const ProfileCard = ({ imageSrc, altText }: Props) => {
  return (
    <aside className="profile-card">
      <div className="profile-glow" />
      <div className="profile-avatar">
        <img src={imageSrc} alt={altText} width={140} height={140} />
      </div>
      <div className="profile-role">Full Stack Developer</div>
      <div className="profile-location">Coruña • España</div>
    </aside>
  );
};

export default ProfileCard;
