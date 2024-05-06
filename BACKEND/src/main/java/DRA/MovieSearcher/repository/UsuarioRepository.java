package DRA.MovieSearcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import DRA.MovieSearcher.entity.Usuario;

@RepositoryRestResource
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

}
