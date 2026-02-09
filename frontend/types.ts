import React from 'react';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'CRITICAL' | 'SYSTEM';
  message: string;
}

export interface AgentBlueprint {
  name: string;
  purpose: string;
  trigger: string;
  confidence: number;
}

export interface AnalysisSection {
  title: string;
  status: 'pending' | 'processing' | 'complete';
  content?: React.ReactNode;
}