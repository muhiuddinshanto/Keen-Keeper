'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
        console.log(pathname);
  return (
    <div className="">
      <main className="">
       
        <>
        <h2>MOhiuddin</h2>
        </>
       
      </main>
    </div>
  );
}
