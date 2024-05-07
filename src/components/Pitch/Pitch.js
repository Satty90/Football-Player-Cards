import "./formations.css";
const Pitch = ({ children }) => {
  return (
    <div className="bg-pitch-image h-full bg-cover w-4/6 grid formation-4321">
      {children}
    </div>
  );
};

export default Pitch;
