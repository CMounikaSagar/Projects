
export default function DashboardLayout({
  children,
  notifications,
  revenue,
  users,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      {children}
      <div className="flex flex-row">
        <div className="flex flex-col gap-4">
          <div>{revenue}</div>
          <div>{users}</div>
        </div>
        <div>
          <div>{notifications}</div>
        </div>
      </div>
    </div>
  ) : login
}