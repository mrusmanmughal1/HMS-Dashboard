const State = ({ icon, color, title, value }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-3 font-semibold     shadow-lg">
      <div className={`p-5 rounded-full ${color} text-2xl`}>{icon}</div>
      <div className="pe-8 ">
        <p className="">{title}</p>
        <p className="text-2xl">{value}</p>
      </div>
    </div>
  );
};

export default State;
