export async function syncData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}