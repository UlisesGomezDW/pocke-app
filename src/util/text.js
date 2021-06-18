export function uppercaseText(text = "") {
    return typeof text === "string" ? text.toUpperCase() : ""
}

export function capitalizeText(text = "") {
    return typeof text === "string" ? text.charAt(0).toUpperCase() + text.slice(1) : ""
}

export function translateText(text = "") {
    const TYPES = {
        hp: "HP",
        attack: "Ataque",
        defense: "Defensa",
        "special-attack": "Ataque especial",
        "special-defense": "Defensa especial",
        speed: "Velocidad",
    }

    return typeof text === "string" ? TYPES[text] || capitalizeText(text) : ""
}
