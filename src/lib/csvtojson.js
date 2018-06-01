import csv from "csvtojson";

export default async (file, options = { noheader: true }) => {
  try {
    const jsonArray = await csv(options).fromString(file);
    // eslint-disable-next-line
    console.log(`success from the csvtojson helper: ${jsonArray}`);
    return jsonArray;
  } catch (error) {
    // eslint-disable-next-line
    console.log(`from the csvgtojson helper: ${error}`);
  }
};
