
const SectionTitle = ({title}) => {
    return (
      <div className="mb-8 grid place-items-center text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="text-gray-500">
          We do not just give students an education and experiences that set them
          up for success in a career
        </p>
      </div>
    );
};

export default SectionTitle;