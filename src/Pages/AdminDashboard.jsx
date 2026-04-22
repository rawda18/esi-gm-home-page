import React from "react";
import SlideBare from "../Components/SlideBare";
import ThemeToggle from "../Components/ThemeToggle";
import { Icon } from "../Components/Icon";

const stats = [
  {
    title: "Total Materials",
    value: 1882,
    note: "+12% this month",
    iconKey: "inventory",
    iconColor: "#6ea8ff",
  },
  {
    title: "Available Items",
    value: 47,
    note: "Ready to use",
    iconKey: "package",
    iconColor: "#20c997",
  },
  {
    title: "Pending Requests",
    value: 1,
    note: "Need approval",
    iconKey: "requests",
    iconColor: "#e8ab2f",
  },
  {
    title: "Maintenance Alerts",
    value: 0,
    note: "No active alerts",
    iconKey: "maintenance",
    iconColor: "#ff6b81",
  },
];

const requests = [
  {
    title: "Robotics Arm Control",
    user: "Sarah Student",
    meta: "2 item(s) • 20/02/2026",
    status: "Pending",
  },
  {
    title: "IoT Weather Station",
    user: "Sarah Student",
    meta: "2 item(s) • 15/02/2026",
    status: "Approved",
  },
  {
    title: "IoT Weather Station",
    user: "Sarah Student",
    meta: "1 item(s) • 05/02/2026",
    status: "Completed",
  },
];

const categoryBars = [6, 3, 10, 6, 3, 4, 3, 6, 5];

function StatCard({ item }) {
  const IconComponent = Icon[item.iconKey] || Icon.package;

  return (
    <div className="card stat-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div>
          <p className="small muted">{item.title}</p>
          <h3>{item.value}</h3>
          <p
            className="success-text"
            style={{ visibility: item.note ? "visible" : "hidden" }}
          >
            {item.note || "."}
          </p>
        </div>

        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "10px",
            border: "1px solid var(--border)",
            display: "grid",
            placeItems: "center",
            color: item.iconColor,
            background: "var(--card-2)",
          }}
        >
          <IconComponent size={18} />
        </div>
      </div>
    </div>
  );
}

function CategoryChart() {
  const max = Math.max(...categoryBars);

  return (
    <div className="card chart-card">
      <h4>Materials by Category</h4>

      <div className="bar-chart">
        {categoryBars.map((value, index) => (
          <div key={index} className="bar-group">
            <div
              className="bar"
              style={{ height: `${(value / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusChart() {
  return (
    <div className="card chart-card">
      <h4>Materials by Status</h4>

      <div className="pie-wrap">
        <span className="success-text">Available 100%</span>
        <div className="pie-circle" />
      </div>
    </div>
  );
}

function RecentRequests() {
  return (
    <div className="card list-card">
      <h4>Recent Requests</h4>

      <div className="request-list">
        {requests.map((item, index) => (
          <div className="request-item" key={index}>
            <div>
              <h5>{item.title}</h5>
              <p className="muted small">{item.user}</p>
              <p className="muted small">{item.meta}</p>
            </div>

            <span className={`badge ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceAlerts() {
  return (
    <div className="card list-card">
      <h4>Maintenance Alerts</h4>
      <div className="empty-box">No alerts</div>
    </div>
  );
}

function UserOverview() {
  return (
    <div className="card overview-card">
      <h4>User Overview</h4>

      <div className="overview-grid">
        <div>
          <h3 className="blue">4</h3>
          <p className="small muted">Lab Admins</p>
        </div>

        <div>
          <h3 className="purple">1</h3>
          <p className="small muted">Storekeepers</p>
        </div>

        <div>
          <h3 className="green">1</h3>
          <p className="small muted">Students</p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <SlideBare activeLabel="Dashboard" />

      <main className="main-content">
        <div className="topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p className="muted">
              Overview of laboratory operations and analytics
            </p>
          </div>

          <ThemeToggle />
        </div>

        <section className="stats-grid">
          {stats.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </section>

        <section className="grid-2">
          <CategoryChart />
          <StatusChart />
        </section>

        <section className="grid-2">
          <RecentRequests />
          <MaintenanceAlerts />
        </section>

        <section>
          <UserOverview />
        </section>
      </main>
    </div>
  );
}