// Structured logging for LibreShield
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: Record<string, any>;
}

class Logger {
  private isDev = !!import.meta.env.DEV;

  private formatLog(level: LogLevel, message: string, data?: Record<string, any>): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    };
  }

  private output(entry: LogEntry) {
    const prefix = `[${entry.timestamp}] ${entry.level.toUpperCase()}:`;

    if (this.isDev) {
      console[entry.level === 'error' ? 'error' : entry.level === 'warn' ? 'warn' : 'log'](
        prefix,
        entry.message,
        entry.data || ''
      );
    }

    // Could send to external service (Sentry, LogRocket, etc.)
    if (!this.isDev && entry.level === 'error') {
      this.sendToMonitoring(entry);
    }
  }

  private sendToMonitoring(entry: LogEntry) {
    // Placeholder for external monitoring service
    // Example: Sentry, LogRocket, Datadog, etc.
    try {
      // navigator.sendBeacon('/api/logs', JSON.stringify(entry));
    } catch (e) {
      console.error('Failed to send log to monitoring service');
    }
  }

  info(message: string, data?: Record<string, any>) {
    this.output(this.formatLog('info', message, data));
  }

  warn(message: string, data?: Record<string, any>) {
    this.output(this.formatLog('warn', message, data));
  }

  error(message: string, data?: Record<string, any>) {
    this.output(this.formatLog('error', message, data));
  }

  debug(message: string, data?: Record<string, any>) {
    if (this.isDev) {
      this.output(this.formatLog('debug', message, data));
    }
  }
}

export const logger = new Logger();
