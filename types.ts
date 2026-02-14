export enum Page {
  DASHBOARD = 'DASHBOARD',
  WEBSITES = 'WEBSITES',
  ANALYTICS = 'ANALYTICS',
  REVENUE = 'REVENUE',
  POSTS = 'POSTS',
  AI_INSIGHTS = 'AI_INSIGHTS',
  CONTENT_STUDIO = 'CONTENT_STUDIO',
  CAMPAIGNS = 'CAMPAIGNS',
  CALENDAR = 'CALENDAR',
  TEAM = 'TEAM',
  INTEGRATIONS = 'INTEGRATIONS',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SETTINGS = 'SETTINGS',
}

export interface Website {
  id: string;
  name: string;
  url: string;
  status: 'Connected' | 'Syncing' | 'Error';
  visitorsToday: number;
  revenueToday: number;
  growth: number;
  lastSynced: string;
  seoScore: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  views: number;
  comments: number;
  revenue: number;
  score: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  message: string;
  time: string;
  read: boolean;
}
