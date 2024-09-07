import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CarDetails from "../components/shared/CarDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextareaField from "./components/TextareaField";
import { Separator } from "../components/ui/separator";
import Features from "../components/shared/Features.json";
import CheckBoxField from "./components/CheckBoxField";
import { Button } from "../components/ui/button";

function AddListing() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CarDetails.CarDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm">
                    {item?.label}{" "}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextareaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />

          {/* Feature List */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Features.Features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center"
                >
                  <CheckBoxField
                    onCheckedChange={(value) =>
                      handleInputChange(item.name, value)
                    }
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Car Image */}
          <div className="mt-10 flex justify-end">
            <Button onClick={(e) => onSubmit(e)}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
