export async function getObjects(a) {
  const data = await fetch(`http://localhost:8080/entries?programType=${a}`);
  const res = await data.json();
  const filtrado = await res.filter((object) => object.releaseYear >= 2010);
  const cortado = await filtrado.filter((object, i) => i < 20);
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
