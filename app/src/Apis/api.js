export async function getObjects(a, b, c) {
  console.log(b);
  const data = await fetch(
    `https://seroespelis-service.onrender.com/entries?programType=${a}`,
  );
  const res = await data.json();
  const filtrado = await res.filter((object) => object.releaseYear >= `${b}`);
  const cortado = await filtrado.filter((object, i) => i < `${c}`);
  console.log(cortado);
  cortado.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
  });
  console.log(filtrado);
  return cortado;
}
