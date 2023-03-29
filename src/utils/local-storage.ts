export const getFromStorageData = (key: string): any => { 
  if (!localStorage.getItem(key)) return;

  const item = localStorage.getItem(key) as string;
  return JSON.parse(item);
};

export const setToStorageData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};