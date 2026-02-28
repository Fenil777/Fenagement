export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: 'engineer' | 'designer' | 'manager' | 'consultant' | null;
  department: string | null;
  billing_rate: number | null;
  max_weekly_hours: number;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  name: string;
  client_name: string | null;
  description: string | null;
  status: 'active' | 'completed' | 'on-hold' | 'at-risk';
  budget: number | null;
  spent: number;
  start_date: string | null;
  end_date: string | null;
  priority: 'high' | 'medium' | 'low' | null;
  created_at: string;
  updated_at: string;
}

export interface Allocation {
  id: string;
  profile_id: string;
  project_id: string;
  weekly_hours: number;
  role_on_project: string | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
      projects: {
        Row: Project;
        Insert: Omit<Project, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>;
      };
      allocations: {
        Row: Allocation;
        Insert: Omit<Allocation, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Allocation, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}
