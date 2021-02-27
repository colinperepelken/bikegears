export const hex2rgba = (hex, alpha = 1, separate = false) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));

    if (separate) {
        return {
            r: r, g: g, b: b, a: alpha
        };
    }

    return `rgba(${r},${g},${b},${alpha})`;
};
