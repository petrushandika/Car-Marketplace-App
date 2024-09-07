import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

function CheckBoxField({ onCheckedChange }) {
  return (
    <div>
      <Checkbox onCheckedChange={onCheckedChange} />
    </div>
  );
}

export default CheckBoxField;
