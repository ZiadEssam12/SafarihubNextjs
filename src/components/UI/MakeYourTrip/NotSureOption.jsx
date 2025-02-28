"use client";

export default function NotSureComponent({ setFieldValue }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor="duration">How many days do you want to stay?</label>
      <input
        type="number"
        id="duration"
        placeholder="Days"
        className="w-full py-4 border border-darkBlue rounded-md"
        min={1}
        onChange={(e) => setFieldValue("duration", e.target.value)}
      />
    </div>
  );
}
