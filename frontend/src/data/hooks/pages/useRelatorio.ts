import { ApiService } from "../../services/ApiService";
import { useEffect, useState } from "react";

export function useRelatorio() {
  const [adocoes, setAdocoes] = useState([]);
  useEffect(() => {
    ApiService.get("adocoes/").then((res) => {
			setAdocoes(res.data);
    });
  }, []);
  return { adocoes };
}
