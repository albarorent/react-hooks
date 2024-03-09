import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (id = 1): object => {
  
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: {},
  });


  useEffect(() => {
    getFetch();
  }, [id]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: {},
    });
  };

  const getFetch = async () => {

    if (localCache[url]) {
      // console.log("usando cache");
      setState({
        data:localCache[url],
        isLoading: false,
        hasError: false,
        error: {},
      });
      return {};
    }

    setLoadingState();

    const res = await fetch(url);

    // await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        },
      });
      return;
    }

    const data = await res.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: {},
    });

    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
