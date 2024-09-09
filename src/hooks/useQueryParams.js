import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from "qs";

// Hook to handle query parameters in the URL
export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = Object.fromEntries(searchParams);

  const setQueryParams = (param) => {
    const queryString = qs.stringify(param, {
      addQueryPrefix: true,
    });
    navigate(location.pathname + queryString);
  };

  return [queryParams, setQueryParams];
};
