import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
const CabinsForm = ({ EditCab = {} ,onclose }) => {
  const { id: cabid, ...editcabin } = EditCab;
  //create
  const { isCreating, createcabin } = useCreateCabin();
  //Edit
  const { isEditing, editCB } = useEditCabin();

  const edit = Boolean(cabid);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: edit ? EditCab : {},
  });
  const { errors } = formState;
  const onsubmit = (cabin) => {
    if (edit) {
      editCB(
        { newcabin: cabin, id: cabid },
        {
          onSuccess: (data) => {
            onclose()
          },
        }
      );
    } else {
      createcabin(
        {
          ...cabin,
          image: "https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg",
        },
        {
          onSuccess: (data) => {
            onclose()
          },
        }
      );
    }
  };
  const onError = (err) => {
    console.log(err);
  };
  return (
    <div className="bg-white text-black py-10 ">
      <div className="  ">
        <form onSubmit={handleSubmit(onsubmit, onError)}>
          {" "}
          <div className="formflex">
            <p>Cabin Name</p>
            <div>
              <input
                type="text"
                className=" rounded-md border px-5 py-3"
                id="name"
                {...register("name", {
                  required: "required",
                })}
              />
              {errors?.name?.message && (
                <div className="text-red-600">{errors.name.message}</div>
              )}
            </div>
          </div>
          <div className="formflex">
            <p>Max Capacity</p>
            <div>
              <input
                type="text"
                className=" rounded-md border px-5 py-3"
                {...register("maxCapacity", {
                  required: "required",
                  min: {
                    value: 1,
                    message: "capacity Should Be atleaset 1",
                  },
                })}
              />
              {errors?.maxCapacity?.message && (
                <div className="text-red-600">{errors.maxCapacity.message}</div>
              )}
            </div>
          </div>
          <div className="formflex">
            <p>Regular Price</p>
            <div>
              <input
                type="text"
                {...register("regularPrice", {
                  required: "required",
                })}
                className=" rounded-md border px-5 py-3"
              />
              {errors?.regularPrice?.message && (
                <div className="text-red-600">
                  {errors.regularPrice.message}
                </div>
              )}
            </div>
          </div>
          <div className="formflex">
            <p>Discount</p>
            <div>
              <input
                type="text"
                defaultValue={0}
                {...register("discount", {
                  required: "required",
                  validate: (value) =>
                    value <= getValues().regularPrice || "Enter Valid Value ",
                })}
                className=" rounded-md border px-5 py-3"
              />
              {errors?.discount?.message && (
                <div className="text-red-600">{errors.discount.message}</div>
              )}
            </div>
          </div>
          <div className="formflex">
            <p>Description</p>
            <div>
              <input
                type="text"
                {...register("description", {
                  required: "required",
                })}
                className=" rounded-md border px-5 py-3"
              />
              {errors?.description?.message && (
                <div className="text-red-600">{errors.description.message}</div>
              )}
            </div>
          </div>
          <div className="formflex">
            <p>Cabin Photo</p>
            <div>
              <input
                type="text"
                {...register("image", {
                  required: edit ? false : "required",
                })}
                className=" rounded-md border px-5 py-3"
              />
              {errors?.image?.message && (
                <div className="text-red-600">{errors.image.message}</div>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              className="px-3 py-2 bg-green-500 rounded-md text-white font-semibold" 
              disabled={isCreating || isEditing}
            >
              {edit ? "Edit Cabin" : "Add Cabin"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CabinsForm;
