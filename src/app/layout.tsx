import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fenagement - Resource Management Platform',
  description: 'Enterprise resource management tool for tracking team bandwidth, project allocations, and preventing employee burnout.',
  keywords: ['resource management', 'team capacity', 'project allocation', 'burnout prevention'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
