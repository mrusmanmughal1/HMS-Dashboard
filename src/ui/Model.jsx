import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";

//create context
const ModelContext = createContext();

// provider
function Model({ children }) {
  const [openName, setopen] = useState("");
  const close = () => setopen("");
  const open = setopen;

  return (
    <ModelContext.Provider value={{ openName, close, open }}>
      {children}
    </ModelContext.Provider>
  );
}

function Open({ children, open: OpenWindowName }) {
  const { open } = useContext(ModelContext);

  return cloneElement(children, { onClick: () => open(OpenWindowName) });
}

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModelContext);
  if (name !== openName) return null;
  return createPortal(
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className=" transform overflow-hidden rounded-lg justify-center flex-row flex bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-max sm:min-w-min">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {cloneElement(children, { onclose: close })}
                </div>
              </div>
              <div className="flex justify-end pe-4 pt-4 ">
                <GrClose onClick={close} className="hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,

    document.body
  );
};

Model.Window = Window;
Model.Open = Open;
export default Model;
