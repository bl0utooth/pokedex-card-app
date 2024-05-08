import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

function useAxios(baseUrl) {
    const [dataList, setDataList] = useState([]);
  
    const fetchData = async (endpointExtension = '') => {
      try {
        const response = await axios.get(`${baseUrl}${endpointExtension}`);
        const newData = { ...response.data, id: uuid() }; 
        setDataList(currentData => [...currentData, newData]);
        return newData;
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    return [dataList, fetchData];
  }

export default useAxios;