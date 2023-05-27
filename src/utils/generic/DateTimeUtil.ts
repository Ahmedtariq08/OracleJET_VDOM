const timeSeperator = " ";
const dateSeperator = "-";
export class DateTimeUtil {
 
  //2023-02-23 00:00:00  ->  2023-02-23
  public static dateTimeToDate = function(date: any) {
    if (date && date.includes(dateSeperator)){
      return date.includes(timeSeperator) ? date.split(timeSeperator)[0] : date.substring(0,10).trim();
    }
    return date;
  }

  //2023-02-23  ->  2023-02-23 00:00:00
  public static dateFormatterForRequest = function(date: any) {
    if (date)
      return date + " " + "00:00:00";
  }
 
  //Input: YYYY-MM-DD hh:mm:ss  [2023-02-23 00:00:00], Output: MMM d, yyyy  [February 23, 2023]
  public static dateFormatter = (date: any) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let outputDate = date;
    if (date) {
      try {
        if (date.includes(timeSeperator)) {
          date = date.split(timeSeperator)[0];
        } 
        if (date.includes(dateSeperator)){
          let splitDate = date.split(dateSeperator);
          let year = splitDate[0];
          year =  year.length > 4 ? year.substring(0, 4) : year;
          let month = months[parseInt(splitDate[1]) - 1];
          let day = splitDate[2];
          day = day.length > 2 ? day.substring(0,2) : day;
          outputDate = `${month} ${day}, ${year}`;
        }
      } catch (error) {
        outputDate = date;
      }
    }
    return outputDate;
  }
 
  // update the date util function where dates are invalid for fields
  public static convertIsoString = function(dateStr:string){
    let result = dateStr;
    if (dateStr) {
      try {
        const date = new Date(dateStr);
        result = date.toISOString();
      } catch (error) {
        result = dateStr;
      }
    } else {
      result = ""
    }
    return result;
  }

  public static sortDataWithDates = (array: any[], dateKey1: string, dateKey2?: string) => {
    array.sort((a, b) => {
      const getDateValue = (item: any, key: string) => {
        const date = item[key];
        return date === null ? 0 : new Date(date).getTime();
      };
      const date1 = dateKey2 ? getDateValue(a, dateKey1) || getDateValue(a, dateKey2) : getDateValue(a, dateKey1);
      const date2 = dateKey2 ? getDateValue(b, dateKey1) || getDateValue(b, dateKey2) : getDateValue(b, dateKey1);
      return date2 - date1;
    });
  };

}