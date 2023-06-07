const Container = ({ children }) => {
  return (
    <div className="max-w-[1920px] max-auto px-4 ms:px-2 md:px-8 lg:px-16 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
