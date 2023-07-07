const FooterSocial = ({ icon, name, to }) => {
  return (
    <a className="block w-fit" href={to} target="_blank">
      <div className="flex items-center gap-4">
        {icon}
        <p className="font-roboto text-xs font-normal uppercase text-[#C4C4C4]">
          {name}
        </p>
      </div>
    </a>
  );
};

export default FooterSocial;
