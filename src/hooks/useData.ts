import {useState, useEffect} from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



  export interface FetchResponse<T>{
    count: number;
    results: T[];
  }
 
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
        const controller =  new AbortController();
        setIsLoading(true); 
      apiClient
        .get<FetchResponse<T>>(endpoint, {...requestConfig, signal: controller.signal})
        .then((res) => {setData(res.data.results);
          console.log(res)
      setIsLoading(false)})
      
        .catch((err) =>{ 
            if (err instanceof CanceledError) return;
            console.error("Error fetching data:", err);
                setError(err.message)
                setIsLoading(false)});
                
        return () => controller.abort();
    }, deps ? [...deps]  : []);
    return {data, error, isLoading}
}

export default useData;