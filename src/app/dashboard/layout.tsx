import DashboardLayout from '@/components/Dashboard/DashboardLayout';

export default function DashboardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
