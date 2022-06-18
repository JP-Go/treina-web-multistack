import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../services/ApiService";

export function useCadastro() {
  function clearForm() {
    setName("");
    setHistory("");
    setPhotoUrl("");
  }

  function isAnyFieldEmpty() {
    return [name, history, photoUrl]
      .map((field) => field.length > 0)
      .some((fieldStatus) => fieldStatus === false);
  }

  function postRegisterForm() {
    ApiService.post("pets/", {
      name,
      history,
      photo_url: photoUrl,
    }).catch((err: AxiosError) => {
      setMessage(err.response?.data.message);
      return false;
    });
    return true;
  }

  function registerPet() {
    if (isAnyFieldEmpty()) {
      setMessage("Preencha todos os campos");
      return;
    }
		if (!postRegisterForm()) return;
    setMessage(`Pet ${name} adotado`);
    clearForm();
  }

  const [name, setName] = useState<string>("");
  const [history, setHistory] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return {
    name,
    setName,
    history,
    setHistory,
    photoUrl,
    setPhotoUrl,
    message,
    setMessage,
    registerPet,
  };
}
