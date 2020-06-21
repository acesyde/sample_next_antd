import { useMemo } from "react";
import { useStaticRendering } from "mobx-react";

useStaticRendering(typeof window === "undefined");

let store;

class Store {
  hydrate = (data) => {
    if (!data) return;
  };
}

function initializeStore(initialData = null) {
  const _store = store ?? new Store();
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
