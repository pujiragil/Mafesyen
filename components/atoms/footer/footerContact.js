const FooterContact = ({ title, desc }) => {
  return (
    <div className="space-y-1 uppercase">
      <p className="font-oswald text-xs font-medium text-white">{title}</p>
      <p className="font-roboto text-xs font-normal text-[#C4C4C4]">{desc}</p>
    </div>
  );
};

export default FooterContact;
