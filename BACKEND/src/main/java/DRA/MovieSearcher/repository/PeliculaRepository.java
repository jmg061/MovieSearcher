package dra.moviesearcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import dra.moviesearcher.entity.Pelicula;

@RepositoryRestResource
public interface PeliculaRepository extends JpaRepository<Pelicula, Integer>{

}
