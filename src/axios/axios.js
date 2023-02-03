import axios from 'axios';
import {useEffect, useState} from 'react';

// 2023.02.03[프뚜]: 공통 header
const commonHeader = (headers) => {
  return headers;
};

// 2023.02.03[프뚜]: 공통 params(body)
const commonParams = (params) => {
  return params;
};

// 2023.02.03[프뚜]: get(Hooks)
export const useAxiosGet = (uri, headers, params) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(uri, {
        //headers: commonHeader(headers),
        params: commonParams(params)
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  return data;
};

// 2023.02.03[프뚜]: post(Hooks)
export const useAxiosPost = (uri, headers, body) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .post(uri, body, {
        headers: commonHeader(headers)
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  return data;
};
