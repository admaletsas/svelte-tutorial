export async function fetchData() {
    const data = [1, 2, 3, 4, 5];

    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });
}