# PruebaTecnicaCineSeries
Mi prueba tecnica de series y peliculas

Les presento mi prueba tecnica de series y peliculas en ella es utilizado React, con useState y use Efect.
    
    -No he visto necesidad de usar memo ni useMemo ya que los componentes que no rederizo mas de una vez los epuesto en App.jsx para que no este continuamente haciendo rerender.
    
    -En el loading de la a plicación intente usar lazy//suspense pero aun no consegui dominarlo estoy en proceso de mejora, cuando lo domine lo mejorare, asique de momento es un if que mide la longitud del state y mientras sea 0 pondra loading.

    -Link para volver al Home, ademas de añadir dos filtros de año y de cantidad de objetos a renderizar.

    -El componente 'Pagina' se encarga de mediante un useLocation se encarga de cambiar el titulo de la seccion en la que te encuentres, como pueden ser movies, series o el home.  
