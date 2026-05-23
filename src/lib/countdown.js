export function getTimeRemaining(targetISO) {
  const now = new Date();
  const target = new Date(targetISO);
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}
