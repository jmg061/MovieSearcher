package dra.moviesearcher.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import dra.moviesearcher.entity.Usuario;

@RepositoryRestResource
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    public Usuario findByUsuario(String usuario);

    public Usuario findByUsuarioAndContrasenna(String user, String pass);

}
