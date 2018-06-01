export default jsonArray => {
  const rate = 65;
  return (
    jsonArray
      .map(entry => {
        const hours = Number(entry.field7).toFixed(2);
        return {
          project: entry.field1,
          date: entry.field3,
          task: entry.field2,
          rate,
          hours: Number(hours),
          cost: Number((hours * rate).toFixed(2))
        };
      })
      // sort in chronological order by date
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  );
};
