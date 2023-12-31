import Filter from "../../ui/Filter";
import Sortby from "../../ui/Sortby";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <div className="flex items-center gap-8">
        <Filter
          fieldName="discount"
          options={[
            {
              label: "All",
              value: "All",
            },
            {
              label: "No Discount",
              value: "no-discount",
            },
            {
              label: "With Discount",
              value: "with-discount",
            },
          ]}
        />

        <Sortby
          options={[
            { label: "A-Z", value: "A-Z" },
            { label: "Z-A", value: "Z-A" },
            { label: "Low-High", value: "Low-High" },
            { label: "Hight-low", value: "Hight-low" },
          ]}
        />
      </div>
    </TableOperations>
  );
};

export default CabinTableOperations;
