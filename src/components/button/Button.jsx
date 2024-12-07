import { LineMdLoadingLoop } from "@/icons/Icons";
import { Button } from "flowbite-react";

export default function LoadingButton({ text, areaLabel, valid, loading }) {
  return (
    <Button aria-label={areaLabel} type="submit" disabled={!valid || loading}>
      {loading ? (
        <LineMdLoadingLoop width={20} height={20} className="fill-white" />
      ) : (
        text
      )}
    </Button>
  );
}
