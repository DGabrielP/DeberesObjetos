enum Color {
    Black = 0,
    Brown = 1,
    Red = 2,
    Orange = 3,
    Yellow = 4,
    Green = 5,
    Blue = 6,
    Violet = 7,
    Grey = 8,
    White = 9
}

export function decodedResistorValue(colores: string[]): string {
    const valorPrincipal = (Color[colores[0].charAt(0).toUpperCase() + colores[0].slice(1) as keyof typeof Color] * 10 + Color[colores[1].charAt(0).toUpperCase() + colores[1].slice(1) as keyof typeof Color]);
    const ceros = Math.pow(10, Color[colores[2].charAt(0).toUpperCase() + colores[2].slice(1) as keyof typeof Color]);

    let valorFinal = valorPrincipal * ceros;
    let unidad: string;

    if (valorFinal >= 1e9) {
        valorFinal /= 1e9;
        unidad = "gigaohms";
    } else if (valorFinal >= 1e6) {
        valorFinal /= 1e6;
        unidad = "megaohms";
    } else if (valorFinal >= 1e3) {
        valorFinal /= 1e3;
        unidad = "kiloohms";
    } else {
        unidad = "ohms";
    }

    return `${valorFinal} ${unidad}`;
}
