import { Profile, Project, Allocation } from './database.types';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    email: 'sarah.chen@techcorp.com',
    full_name: 'Sarah Chen',
    role: 'engineer',
    department: 'Engineering',
    billing_rate: 150,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    email: 'marcus.johnson@techcorp.com',
    full_name: 'Marcus Johnson',
    role: 'engineer',
    department: 'Engineering',
    billing_rate: 140,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '3',
    email: 'priya.patel@techcorp.com',
    full_name: 'Priya Patel',
    role: 'designer',
    department: 'Design',
    billing_rate: 120,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '4',
    email: 'alex.rodriguez@techcorp.com',
    full_name: 'Alex Rodriguez',
    role: 'manager',
    department: 'Product',
    billing_rate: 175,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '5',
    email: 'emily.watson@techcorp.com',
    full_name: 'Emily Watson',
    role: 'consultant',
    department: 'Strategy',
    billing_rate: 200,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '6',
    email: 'james.kim@techcorp.com',
    full_name: 'James Kim',
    role: 'engineer',
    department: 'Engineering',
    billing_rate: 130,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '7',
    email: 'lisa.thompson@techcorp.com',
    full_name: 'Lisa Thompson',
    role: 'designer',
    department: 'Design',
    billing_rate: 115,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '8',
    email: 'david.park@techcorp.com',
    full_name: 'David Park',
    role: 'consultant',
    department: 'Strategy',
    billing_rate: 190,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '9',
    email: 'nina.okafor@techcorp.com',
    full_name: 'Nina Okafor',
    role: 'engineer',
    department: 'Engineering',
    billing_rate: 145,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '10',
    email: 'carlos.mendez@techcorp.com',
    full_name: 'Carlos Mendez',
    role: 'manager',
    department: 'Engineering',
    billing_rate: 180,
    max_weekly_hours: 40,
    avatar_url: null,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'CloudMigration Pro',
    client_name: 'Acme Corporation',
    description: 'Enterprise cloud migration to AWS with zero-downtime deployment',
    status: 'active',
    budget: 250000,
    spent: 187500,
    start_date: '2024-01-01',
    end_date: '2024-06-30',
    priority: 'high',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'p2',
    name: 'DataVault Analytics',
    client_name: 'FinTech Solutions Ltd',
    description: 'Real-time analytics dashboard for financial data processing',
    status: 'active',
    budget: 180000,
    spent: 72000,
    start_date: '2024-02-15',
    end_date: '2024-08-15',
    priority: 'high',
    created_at: '2024-02-15T00:00:00Z',
    updated_at: '2024-02-15T00:00:00Z',
  },
  {
    id: 'p3',
    name: 'RetailOS Redesign',
    client_name: 'MegaMart Retail',
    description: 'Complete UX overhaul of retail management platform',
    status: 'at-risk',
    budget: 95000,
    spent: 89000,
    start_date: '2024-01-20',
    end_date: '2024-04-20',
    priority: 'high',
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  {
    id: 'p4',
    name: 'HealthSync API',
    client_name: 'MedConnect Health',
    description: 'HIPAA-compliant healthcare data integration API',
    status: 'active',
    budget: 320000,
    spent: 96000,
    start_date: '2024-03-01',
    end_date: '2024-12-31',
    priority: 'medium',
    created_at: '2024-03-01T00:00:00Z',
    updated_at: '2024-03-01T00:00:00Z',
  },
  {
    id: 'p5',
    name: 'EduLearn Platform',
    client_name: 'BrightFuture Education',
    description: 'AI-powered personalized learning management system',
    status: 'on-hold',
    budget: 140000,
    spent: 35000,
    start_date: '2024-02-01',
    end_date: '2024-09-30',
    priority: 'medium',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  },
  {
    id: 'p6',
    name: 'SecureVault 2.0',
    client_name: 'CyberShield Security',
    description: 'Next-gen enterprise security platform with zero-trust architecture',
    status: 'active',
    budget: 410000,
    spent: 123000,
    start_date: '2024-03-15',
    end_date: '2025-01-15',
    priority: 'high',
    created_at: '2024-03-15T00:00:00Z',
    updated_at: '2024-03-15T00:00:00Z',
  },
];

export const mockAllocations: Allocation[] = [
  // Sarah Chen - 48 hrs (BURNOUT RISK)
  { id: 'a1', profile_id: '1', project_id: 'p1', weekly_hours: 20, role_on_project: 'Lead Engineer', start_date: '2024-01-01', end_date: '2024-06-30', created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 'a2', profile_id: '1', project_id: 'p2', weekly_hours: 16, role_on_project: 'Backend Engineer', start_date: '2024-02-15', end_date: '2024-08-15', created_at: '2024-02-15T00:00:00Z', updated_at: '2024-02-15T00:00:00Z' },
  { id: 'a3', profile_id: '1', project_id: 'p6', weekly_hours: 12, role_on_project: 'Security Engineer', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
  // Marcus Johnson - 35 hrs (Healthy)
  { id: 'a4', profile_id: '2', project_id: 'p1', weekly_hours: 20, role_on_project: 'Cloud Architect', start_date: '2024-01-01', end_date: '2024-06-30', created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 'a5', profile_id: '2', project_id: 'p4', weekly_hours: 15, role_on_project: 'API Developer', start_date: '2024-03-01', end_date: '2024-12-31', created_at: '2024-03-01T00:00:00Z', updated_at: '2024-03-01T00:00:00Z' },
  // Priya Patel - 45 hrs (BURNOUT RISK)
  { id: 'a6', profile_id: '3', project_id: 'p3', weekly_hours: 25, role_on_project: 'Lead Designer', start_date: '2024-01-20', end_date: '2024-04-20', created_at: '2024-01-20T00:00:00Z', updated_at: '2024-01-20T00:00:00Z' },
  { id: 'a7', profile_id: '3', project_id: 'p5', weekly_hours: 20, role_on_project: 'UX Designer', start_date: '2024-02-01', end_date: '2024-09-30', created_at: '2024-02-01T00:00:00Z', updated_at: '2024-02-01T00:00:00Z' },
  // Alex Rodriguez - 40 hrs (At Capacity)
  { id: 'a8', profile_id: '4', project_id: 'p1', weekly_hours: 15, role_on_project: 'Project Manager', start_date: '2024-01-01', end_date: '2024-06-30', created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 'a9', profile_id: '4', project_id: 'p3', weekly_hours: 10, role_on_project: 'Stakeholder Manager', start_date: '2024-01-20', end_date: '2024-04-20', created_at: '2024-01-20T00:00:00Z', updated_at: '2024-01-20T00:00:00Z' },
  { id: 'a10', profile_id: '4', project_id: 'p6', weekly_hours: 15, role_on_project: 'Program Manager', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
  // Emily Watson - 30 hrs (Healthy)
  { id: 'a11', profile_id: '5', project_id: 'p2', weekly_hours: 15, role_on_project: 'Strategy Consultant', start_date: '2024-02-15', end_date: '2024-08-15', created_at: '2024-02-15T00:00:00Z', updated_at: '2024-02-15T00:00:00Z' },
  { id: 'a12', profile_id: '5', project_id: 'p4', weekly_hours: 15, role_on_project: 'Healthcare Consultant', start_date: '2024-03-01', end_date: '2024-12-31', created_at: '2024-03-01T00:00:00Z', updated_at: '2024-03-01T00:00:00Z' },
  // James Kim - 50 hrs (BURNOUT RISK)
  { id: 'a13', profile_id: '6', project_id: 'p2', weekly_hours: 20, role_on_project: 'Data Engineer', start_date: '2024-02-15', end_date: '2024-08-15', created_at: '2024-02-15T00:00:00Z', updated_at: '2024-02-15T00:00:00Z' },
  { id: 'a14', profile_id: '6', project_id: 'p4', weekly_hours: 20, role_on_project: 'Backend Developer', start_date: '2024-03-01', end_date: '2024-12-31', created_at: '2024-03-01T00:00:00Z', updated_at: '2024-03-01T00:00:00Z' },
  { id: 'a15', profile_id: '6', project_id: 'p6', weekly_hours: 10, role_on_project: 'Security Developer', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
  // Lisa Thompson - 20 hrs (Healthy)
  { id: 'a16', profile_id: '7', project_id: 'p3', weekly_hours: 10, role_on_project: 'UI Designer', start_date: '2024-01-20', end_date: '2024-04-20', created_at: '2024-01-20T00:00:00Z', updated_at: '2024-01-20T00:00:00Z' },
  { id: 'a17', profile_id: '7', project_id: 'p5', weekly_hours: 10, role_on_project: 'Visual Designer', start_date: '2024-02-01', end_date: '2024-09-30', created_at: '2024-02-01T00:00:00Z', updated_at: '2024-02-01T00:00:00Z' },
  // David Park - 25 hrs (Healthy)
  { id: 'a18', profile_id: '8', project_id: 'p3', weekly_hours: 10, role_on_project: 'Business Analyst', start_date: '2024-01-20', end_date: '2024-04-20', created_at: '2024-01-20T00:00:00Z', updated_at: '2024-01-20T00:00:00Z' },
  { id: 'a19', profile_id: '8', project_id: 'p6', weekly_hours: 15, role_on_project: 'Security Consultant', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
  // Nina Okafor - 42 hrs (BURNOUT RISK)
  { id: 'a20', profile_id: '9', project_id: 'p4', weekly_hours: 22, role_on_project: 'Full-Stack Developer', start_date: '2024-03-01', end_date: '2024-12-31', created_at: '2024-03-01T00:00:00Z', updated_at: '2024-03-01T00:00:00Z' },
  { id: 'a21', profile_id: '9', project_id: 'p6', weekly_hours: 20, role_on_project: 'Platform Engineer', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
  // Carlos Mendez - 38 hrs (Healthy)
  { id: 'a22', profile_id: '10', project_id: 'p2', weekly_hours: 10, role_on_project: 'Technical Manager', start_date: '2024-02-15', end_date: '2024-08-15', created_at: '2024-02-15T00:00:00Z', updated_at: '2024-02-15T00:00:00Z' },
  { id: 'a23', profile_id: '10', project_id: 'p4', weekly_hours: 15, role_on_project: 'Engineering Manager', start_date: '2024-03-01', end_date: '2024-12-31', created_at: '2024-03-01T00:00:00Z', updated_at: '2024-03-01T00:00:00Z' },
  { id: 'a24', profile_id: '10', project_id: 'p6', weekly_hours: 13, role_on_project: 'Technical Lead', start_date: '2024-03-15', end_date: '2025-01-15', created_at: '2024-03-15T00:00:00Z', updated_at: '2024-03-15T00:00:00Z' },
];

// Helper: get total allocated hours for a profile
export function getTotalAllocatedHours(profileId: string): number {
  return mockAllocations
    .filter(a => a.profile_id === profileId)
    .reduce((sum, a) => sum + a.weekly_hours, 0);
}

// Helper: get utilization percentage
export function getUtilizationPercentage(profileId: string, maxWeeklyHours: number = 40): number {
  return Math.round((getTotalAllocatedHours(profileId) / maxWeeklyHours) * 100);
}

// Helper: get burnout status
export function getBurnoutStatus(allocatedHours: number): 'healthy' | 'at-capacity' | 'burnout-risk' {
  if (allocatedHours > 40) return 'burnout-risk';
  if (allocatedHours === 40) return 'at-capacity';
  return 'healthy';
}

// Utilization chart data (weekly trend)
export const utilizationChartData = [
  { week: 'Week 1', utilization: 72, capacity: 100 },
  { week: 'Week 2', utilization: 78, capacity: 100 },
  { week: 'Week 3', utilization: 85, capacity: 100 },
  { week: 'Week 4', utilization: 91, capacity: 100 },
  { week: 'Week 5', utilization: 88, capacity: 100 },
  { week: 'Week 6', utilization: 94, capacity: 100 },
  { week: 'Week 7', utilization: 97, capacity: 100 },
  { week: 'Week 8', utilization: 89, capacity: 100 },
];
