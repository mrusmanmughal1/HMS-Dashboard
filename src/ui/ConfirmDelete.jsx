const ConfirmDelete = ({ id, onclose , loading, Callback }) => {

  return (
    <div>
      <h1 className="text-2xl font-semibold">Deleteing Cabibs</h1>
      <p className="py-8">Are you Sure You want to delete this cabin ? </p>
      <button
        className="text-white bg-red-500 rounded-md px-4 py-2 cursor-pointer"
        onClick={() => {
          return Callback(id), onclose();
        }}
        disabled={loading}
      >
        Yes Delete
      </button>
    </div>
  );
};

export default ConfirmDelete;
