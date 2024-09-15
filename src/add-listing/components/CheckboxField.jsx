import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

function CheckBoxField({ checked, onCheckedChange }) {
  return (
    <div>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}

export default CheckBoxField;
