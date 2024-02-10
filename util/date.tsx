export function transformDateFormat(inputDate: string) {
  const dateParts = inputDate.split(" ");
  if (dateParts.length === 2) {
    const [datePart, timePart] = dateParts;
    const [year, month, day] = datePart.split("-");

    // Create the transformed date string
    const transformedDate = `${day}.${month}.${year}`;

    return transformedDate;
  } else {
    // Handle invalid input format
    return "Invalid Date Format";
  }
}
