import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  //console.log(item);

  return {
    item,
    saveItem,
    loading,
    error
  };
};

export { useLocalStorage };

/* localStorage.removeItem('TODOS_V1');

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */