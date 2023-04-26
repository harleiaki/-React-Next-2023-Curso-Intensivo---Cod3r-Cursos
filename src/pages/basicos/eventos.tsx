import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {
    return(
        <div className="flex gap-5 justify-center items-center flex-wrap h-screen">
            <Evento />
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}