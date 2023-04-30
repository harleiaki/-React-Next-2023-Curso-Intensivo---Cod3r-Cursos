import { IconCircleX } from "@Tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex gap-3 justify-center text-zinc-500">
            <IconCircleX />
            <span>Nenhum item no carrinho</span>
        </div>
    )
}
