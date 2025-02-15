const XLSX = require('xlsx');

const ReadDataFromExcel = async (req) => {
  // Read the Excel file from the request
  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];
  const data = await XLSX.utils.sheet_to_json(worksheet);
  return data;
};
module.exports = ReadDataFromExcel;
