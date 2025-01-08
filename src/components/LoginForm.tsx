"use client";

import { signIn } from "next-auth/react";
import InputField from "./InputField";

export default function LoginForm() {
  return (
    <form className=" p-6 rounded-md w-full max-w-sm text-white">
    <p className="text-lg text-center">Portal do Servidor</p>

      <InputField
        label="Usuário"
        type="email"
        placeholder="usuario@exemplo.com"
      />
      <InputField label="Senha" type="password" placeholder="********" />
      <InputField
        label="Domínio"
        type="text"
        placeholder="Selecione o domínio"
      />
      <InputField label="Perfil" type="text" placeholder="Selecione o perfil" />

      <button
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="bg-white text-customBlue font-bold py-2 px-4 rounded w-full mt-4"
      >
        Entrar
      </button>

      <p className="text-center mt-4">
        <a href="#" className="underline">
          Não possui cadastro?
        </a>
      </p>
    </form>
  );
}
