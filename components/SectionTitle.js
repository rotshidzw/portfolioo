const SectionTitle = ({ id, title, subtitle, align = 'between' }) => {
  const alignmentClass = align === 'start' ? 'justify-start' : 'justify-between';

  return (
    <div
      className={`text-lg md:text-7xl mb-4 mt-20 text-white flex flex-col md:flex-row ${alignmentClass} items-start md:items-center gap-3`}
      id={id}
    >
      <h1 className="md:text-left font-bold tracking-tight">{title}</h1>
      {subtitle ? (
        <h3 className="text-sm md:text-3xl md:max-w-xl text-right md:text-left text-white/80">
          {subtitle}
        </h3>
      ) : null}
    </div>
  );
};

export default SectionTitle;
