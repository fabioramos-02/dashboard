import { getServerSession } from "next-auth";
import ButtonLogout from "./ButtonLogout";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession();

  // Ver os dados da sessão
  console.log(session);

  // Redirecionar para a página inicial se o usuário não estiver autenticado
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <div>Olá {session?.user?.name}</div>
      <div>Dashboard</div>

      {/* Mostrar imagem do GitHub com 300px de largura */}
      <div>
        <Image
          src={session?.user?.image || ""} // Coloque uma imagem padrão se o usuário não tiver foto
          alt={session?.user?.name || "Usuário"}
          width={300} // Define a largura
          height={300} // Define a altura
          style={{ borderRadius: "5%" }} // Opcional: Para deixar a imagem redonda
        />
      </div>

      <div>
        <ButtonLogout />
      </div>
    </div>
  );
}
