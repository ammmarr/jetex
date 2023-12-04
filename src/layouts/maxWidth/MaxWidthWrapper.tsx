const MaxWidthWrapper = ({ children }: any) => {
  return (
    <div className="max-width-wrapper">
      <div className="max-width-container">{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
