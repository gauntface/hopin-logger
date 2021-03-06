import * as chalk from 'chalk';

import {AbstractLogger} from '../shared/_AbstractLogger';
import * as LogLevels from '../types/_LogLevels';
import * as LogColors from '../types/_LogColors';

export class NodeLogger extends AbstractLogger {
  protected colorPrefix(logLevel: LogLevels.LogLevel,prefix: string): string[] {
    const colorFunc = this.getChalkColor(logLevel);
    return [colorFunc(prefix)];
  }

  private getChalkColor(logLevel: LogLevels.LogLevel): Function|null {
    switch(logLevel) {
      case LogLevels.DEBUG:
        return chalk.hex(LogColors.DEBUG);
      case LogLevels.INFO:
        return chalk.hex(LogColors.INFO);
      case LogLevels.WARN:
        return chalk.hex(LogColors.WARN).bold;
      case LogLevels.ERROR:
        return chalk.hex(LogColors.ERROR).bold;
      case LogLevels.GROUP:
        return chalk.hex(LogColors.GROUP);
      case LogLevels.LOG:
      default:
        return chalk.hex(LogColors.LOG);
    }
  }

  protected getDefaultLogLevel(): LogLevels.LogLevel {
    return LogLevels.LOG;
  }
}
