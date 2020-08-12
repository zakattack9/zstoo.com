import { lazy } from 'react';

export function lazyPreload(dynamicImport) {
  const Component = lazy(dynamicImport);
  Component.preload = dynamicImport;
  return Component;
}