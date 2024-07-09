import Link from "next/link";

export default function layout({children}) {
  return (
    <div>
      <div>
        <ul>
        <li><Link href="/user">hola</Link></li>
        <li><Link href="/informes">informes</Link></li>
        <li><Link href="/inventario">Administración de inventario</Link></li>
        
        <li><Link href="/clientes">clientes</Link></li>

        <li><Link href="/configuracion">Configuracion</Link></li>

        <li><Link href="/user">hola</Link></li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  )
}
