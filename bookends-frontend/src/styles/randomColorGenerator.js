const randomColorGenerator = () => {
    const r = 255 - ((Math.random() + 1) * 60);
    const g = 255 - ((Math.random() + 1) * 60);
    const b = 255 - ((Math.random() + 1) * 60);

    const color = `rgb(${r}, ${g}, ${b})`
    return color;
}

export default randomColorGenerator;