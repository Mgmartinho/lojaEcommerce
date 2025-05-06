import { useQuery } from "@tanstack/react-query"
import { ProductResponse } from "../../../types/ProductType";
import { api } from "../../../api";
import { GLOBAL_KEYS } from "./Keys";



export const useGetProducts = () => {
    return useQuery<ProductResponse[], Error>({
        queryKey: GLOBAL_KEYS.useGetProducts(), 
        queryFn: () => api.get("/products"), 
        retry: false,  // quando a requisição quebra não fica refazendo
        refetchInterval: false, //desabilita requisições ou recarregamento de requisições de quando em quando
        refetchOnWindowFocus: false, // desabilita o recarregamento da requisição quando clicamos em outra janea e voltamos


    });
};

