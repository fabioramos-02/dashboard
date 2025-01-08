import Image from "next/image";
import logo from "@/img/logo.svg";

export default function Footer() {
    return (
        <footer className="bg-customBlue text-center text-white mt-8 flex items-center justify-between w-full px-4 min-w-[375px]">
            <p className="font-bold text-lg">Nota Geral</p>
            <Image src={logo} alt="Logo" width={80} height={80} />
        </footer>
    );
}
