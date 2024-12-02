export function parseReports(input: string): number[][] {
  return input
    .trim()
    .split('\n')
    .map((line) => line.split(/\s+/).map((num) => parseInt(num)));
}

function isReportSafe(report: number[]): boolean {
  if (report.length < 2) return true;

  let isIncreasing: boolean | null = null;

  for (let i = 1; i < report.length; i++) {
    const difference = report[i] - report[i - 1];
    const absoluteDifference = Math.abs(difference);

    if (absoluteDifference < 1 || absoluteDifference > 3) {
      return false;
    }

    if (isIncreasing === null) {
      isIncreasing = difference > 0;
    } else if (difference > 0 !== isIncreasing) {
      return false;
    }
  }

  return true;
}

export function countSafeReports(reports: number[][]): number {
  let safeCount = 0;

  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];

    if (isReportSafe(report)) {
      safeCount = safeCount + 1;
    }
  }

  return safeCount;
}

function isReportSafeWithDampener(report: number[]): boolean {
  if (isReportSafe(report)) {
    return true;
  }

  for (let i = 0; i < report.length; i++) {
    const modifiedReport = [
      ...report.slice(0, i),
      ...report.slice(i + 1),
    ];

    if (isReportSafe(modifiedReport)) {
      return true;
    }
  }

  return false;
}

export function countSafeReportsWithDampener(
  reports: number[][]
): number {
  let safeCount = 0;

  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];

    if (isReportSafeWithDampener(report)) {
      safeCount = safeCount + 1;
    }
  }

  return safeCount;
}
