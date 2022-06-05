import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  function validateAdoptionData() {
    return email.length > 0 && donation.length > 0;
  }
  function adopt() {
    if (selectedPet !== null) {
      if (validateAdoptionData()) {
        ApiService.post("adocoes/", {
          pet_id: selectedPet.id,
          email,
          valor: donation,
        })
          .then(() => {
            setMessage("Pet adotado com sucesso");
            setSelectedPet(null);
						clearForm();
          })
          .catch((error: AxiosError) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Preencha os dados corretamente");
      }
    }
    console.log("Adotado");
  }

	function clearForm() {
		setEmail("")
		setDonation("")
	}
  const [pets, setPets] = useState<Array<Pet>>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [email, setEmail] = useState("");
  const [donation, setDonation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((response) => {
      setPets(response.data);
    });
  }, []);
  return {
    pets,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    donation,
    setDonation,
    message,
    setMessage,
    adopt,
  };
}
