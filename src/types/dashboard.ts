export type CallStatus = 'answered' | 'missed' | 'cancelled' | 'active' | 'ringing' | 'on-hold';

export interface ActiveCall {
  id: string;
  phoneNumber: string;
  extension: string;
  status: CallStatus;
  startTime: string;
  duration: number;
  callerName?: string;
}

export interface ExtensionStatus {
  extension: string;
  status: 'idle' | 'busy' | 'ringing' | 'offline';
  currentCall?: ActiveCall;
  todayStats: {
    total: number;
    answered: number;
    missed: number;
    cancelled: number;
  };
}

export interface DashboardKPIs {
  totalCalls: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    percentChange: number;
  };
  callStatus: {
    answered: number;
    missed: number;
    cancelled: number;
  };
  activeCalls: number;
  averageDuration: string;
  satisfactionRate: number; // درصد رضایت (۰ تا ۱۰۰)
  totalSurveys: number;
  peakHour: string;
  responseRate: number; // نرخ پاسخ‌دهی نظرسنجی
}

export interface HourlyStats {
  hour: string;       // '00'..'23'
  calls: number;
  answered: number;
  missed: number;
  trend: 'up' | 'down' | 'stable';
}

export interface InsightItem {
  id: string;
  type: 'warning' | 'info' | 'success' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  metric?: number;
}

export interface ExtensionPerformance {
  extension: string;
  name?: string;
  totalCalls: number;
  answered: number;
  missed: number;
  cancelled: number;
  successRate: number;
  avgDuration: string;
  satisfactionScore: number;
}

export interface WeeklyDayStats {
  day: string;      // '2025-11-29'
  dayName: string;  // 'شنبه'، 'یکشنبه' و ...
  answered: number;
  missed: number;
  total: number;
}
