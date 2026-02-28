import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Settings" subtitle="Manage your workspace and preferences" />
      <div className="p-6 space-y-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Database Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supabase URL</label>
              <input
                type="text"
                placeholder="https://your-project.supabase.co"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supabase Anon Key</label>
              <input
                type="password"
                placeholder="your-anon-key"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button>Save Configuration</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>About Fenagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Fenagement is an open-source resource management platform built with Next.js 14,
              TypeScript, and Tailwind CSS. It helps small businesses manage team capacity,
              track project budgets, and prevent employee burnout.
            </p>
            <p className="text-sm text-gray-500 mt-3">Version 1.0.0 · MIT License</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
