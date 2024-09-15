const FormatResult = (resp) => {
  let result = {};
  let finalResult = [];

  resp.forEach((item) => {
    const listingId = item.carListing?.id;

    if (!result[listingId]) {
      result[listingId] = {
        ...item.carListing,
        images: [],
      };
    }

    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  Object.values(result).forEach((car) => {
    finalResult.push(car);
  });

  return finalResult;
};

export default {
  FormatResult,
};
