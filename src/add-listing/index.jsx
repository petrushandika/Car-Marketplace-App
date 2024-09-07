import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import carDetails from "../components/shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextareaField from "./components/TextareaField";
import { Separator } from "../components/ui/separator";
import features from "../components/shared/features.json";
import CheckBoxField from "./components/CheckBoxField";
import { Button } from "../components/ui/button";
import db from "./../../configs";
import { CarListing } from "../../configs/schema";
import IconField from "./components/IconField";

function AddListing() {
  const [formData, setFormData] = useState([]);
  const [featuresData, setfeaturesData] = useState([]);

  useEffect(() => {
    console.log(formData);
    console.log(featuresData);
  }, [formData, featuresData]);

  /**
   * Used to capture user input from form
   * @param {*} name
   * @param {*} value
   */
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Used to save Feature List
   * @param {*} name
   * @param {*} value
   */
  const handleFeatureChange = (name, value) => {
    setfeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
      });
      if (result) {
        console.log("Data Saved");
      }
    } catch (error) {
      console.log("Data Error", error);
    }
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
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-2">
                    <IconField icon={item?.icon} />
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
            <h2 className="font-medium text-xl my-6">features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center"
                >
                  <CheckBoxField
                    onCheckedChange={(value) =>
                      handleFeatureChange(item.name, value)
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
