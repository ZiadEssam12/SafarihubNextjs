import ExactTimeComponent from "./ExactTimeOptions";
import MonthPicker from "./MonthsOptions";
import NotSureComponent from "./NotSureOption";

// From inputs =>
// from date
// to date

// month

// duration

// Extracting values and pass it to each component
// ExactTimeComponent => needs from to date
// MonthPicker => needs month
// NotSureComponent => needs duration

export default function Options({ selectedOption, setSelectedOption, formik }) {
  return (
    <>
      {/* left side */}
      <div className="col-span-6 lg:col-span-2 container">
        <div className="flex flex-col lg:justify-center gap-3 w-full lg:h-full ">
          <div className="">
            {/* title */}
            <h2 className="font-semibold text-xl lg:text-[28px] text-darkBlue">
              When Do You Want To Go?
            </h2>
          </div>
          {/* options */}
          <div className="flex flex-col gap-3">
            {/* option 1  */}
            <div className="flex items-center gap-2 ">
              <input
                className="peer size-[24px] rounded-full border  border-darkBlue  checked:bg-darkBlue checked:ring-darkBlue  checked:bg-none"
                name="type"
                type="radio"
                value={"option1"}
                id="option1"
                checked={selectedOption === "option1"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  formik.setFieldValue("tripOption", "option1");
                }}
              />
              <label
                htmlFor="option1"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Have An Exact Time
              </label>
            </div>

            {/* option 2 */}
            <div className="flex items-center gap-2">
              <input
                className="peer size-[24px] rounded-full border border-darkBlue checked:bg-darkBlue checked:ring-darkBlue checked:border-darkBlue checked:bg-none"
                type="radio"
                name="type"
                value={"option2"}
                id="option2"
                checked={selectedOption === "option2"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  formik.setFieldValue("tripOption", "option2");
                }}
              />
              <label
                htmlFor="option2"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Have An Approximate Time
              </label>
            </div>

            {/* option 3 */}
            <div className="flex items-center gap-2">
              <input
                className="peer size-[24px] rounded-full border border-darkBlue checked:bg-darkBlue checked:ring-darkBlue checked:border-darkBlue checked:bg-none"
                type="radio"
                name="type"
                value={"option3"}
                id={"option3"}
                checked={selectedOption === "option3"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  formik.setFieldValue("tripOption", "option3");
                }}
              />
              <label
                htmlFor="option3"
                className="text-darkBlue text-x peer-checked:font-bold"
              >
                Not Sure Yet
              </label>
            </div>
          </div>
          {/* end options */}
        </div>
      </div>
      {/* left side */}
      {/* ---------- */}
      {/* right side */}
      <div className="flex-1 h-full col-span-6 lg:col-span-4 border border-darkBlue text-darkBlue rounded-lg flex flex-col  py-8 px-6">
        <div className="flex-1 flex items-center justify-center">
          {selectedOption === "option1" && (
            <ExactTimeComponent setFieldValue={formik.setFieldValue} />
          )}
          {selectedOption === "option2" && (
            <MonthPicker setFieldValue={formik.setFieldValue} />
          )}
          {selectedOption === "option3" && (
            <NotSureComponent setFieldValue={formik.setFieldValue} />
          )}
        </div>
      </div>
      {/* end right */}
    </>
  );
}
