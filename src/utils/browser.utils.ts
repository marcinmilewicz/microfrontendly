export const handleWindowLocation = (path: string): void => {
  window.location.href = `${window.location.href}#`;
  if (history && history.pushState) {
    history.pushState({}, path, path);
  }
};

export const handleHashedLocation = (): void => {
  window.location.href = window.location.href.replace('#', '');
};
