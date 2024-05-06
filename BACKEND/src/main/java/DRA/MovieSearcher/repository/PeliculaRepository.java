package DRA.MovieSearcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import DRA.MovieSearcher.entity.Pelicula;

@RepositoryRestResource
public interface PeliculaRepository extends JpaRepository<Pelicula, Integer>{

}
