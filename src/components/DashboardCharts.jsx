import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function DashboardCharts({ total, correct }) {
  const data = [
    { name: "Correct", value: correct },
    { name: "Wrong", value: total - correct },
  ];

  const COLORS = ["#3550DC", "#E63946"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg mt-6 w-full max-w-sm mx-auto">
      <h2 className="text-center text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3550DC] to-[#27E9F7]">
        Quiz Accuracy
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardCharts;
