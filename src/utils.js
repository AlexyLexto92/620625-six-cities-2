export const getCityList = (startArray, maxCitiCount) =>{
  let cityList = startArray.map((elem) => elem.city);
  let uniqeCityList = Array.from(new Set(cityList));
  if (uniqeCityList.length <= maxCitiCount) {
    uniqeCityList = uniqeCityList;
  } else {
    uniqeCityList = uniqeCityList.splice(maxCitiCount);
  }
  return uniqeCityList;
};
