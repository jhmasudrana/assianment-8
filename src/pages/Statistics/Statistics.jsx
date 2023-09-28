import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["your", 63],
  ["Eat", 33],

];


const Statistics = () => {
    return (
        <div>
           <Chart
      chartType="PieChart"
      data={data}
  
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default Statistics;
