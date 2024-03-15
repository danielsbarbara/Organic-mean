import React from "react";

interface IFooterItem {
    title: string;
    cor?: string; 
}

export function FooterItem({ title, cor }: IFooterItem) {
    return (
        <div>
            <div className="">
                {/* Aplicando classe condicional para definir a cor do texto */}
                <p className={`font-cinzel text-xs text-center mr-1 mt-1 ${cor ? `text-${cor}` : 'text-white'} hover:scale-105 transition-transform duration-200 ease-in-out`}>{title}</p>
            </div>
        </div>
    );
}
