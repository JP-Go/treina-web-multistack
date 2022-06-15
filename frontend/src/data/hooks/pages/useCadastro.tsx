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
      .some((fieldStatus) => fieldStatus === false)
  }

  function postRegisterForm() {}

  function registerPet() {
    if (isAnyFieldEmpty()) {
      setMessage("Preencha todos os campos");
      return;
    }
    setMessage(`Pet ${name}, com foto ${photoUrl} e história ${history} foi  registrado`);
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
