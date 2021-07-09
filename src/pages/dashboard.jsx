import Layout from "../shared/layout";
import DriverVisitGraph from "../charts/drivers-visits";
import StatCard from "../shared/stat-card";
import OrderChart from "../charts/orders";
const stats = [
  {
    name: "Customers",
    value: 10800,
    new: "New customers",
    newValue: 33,
  },
  {
    name: "Orders",
    value: 10800,
    new: "New orders",
    newValue: 33,
  },
  {
    name: "Visits",
    value: 10800,
    new: "New visits",
    newValue: 33,
  },
];

function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-wrap my-3 ml-0">
        {stats.map((item) => (
          <StatCard
            name={item.name}
            val={item.value}
            new={item.new}
            newVal={item.newValue}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DriverVisitGraph />
        <OrderChart />
      </div>
    </Layout>
  );
}

export default Dashboard;
