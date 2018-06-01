import request from "request";
import csv from "csvtojson";

export default async file => {
  try {
    const jsonArray = await csv().fromString(file);
    // eslint-disable-next-line
    console.log(`success from the csvtojson helper: ${jsonArray}`);
    return jsonArray;
  } catch (error) {
    // eslint-disable-next-line
    console.log(`from the csvgtojson helper: ${error}`);
  }
};
