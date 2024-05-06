package DRA.MovieSearcher.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String usuario;
    @NotBlank
    private String contrasenna;

    @ManyToMany(
        fetch = FetchType.EAGER
    )
    @JoinTable(
        name = "peliculas_vistas",
        joinColumns = @JoinColumn(name = "usuario_pelicula_vista"),
        inverseJoinColumns = @JoinColumn(name = "pelicula_vista_usuario")
    )
    private List<Pelicula> peliculasVistas = new ArrayList<Pelicula>();

    @ManyToMany(
        fetch = FetchType.EAGER
    )
    @JoinTable(
        name = "peliculas_pendientes",
        joinColumns = @JoinColumn(name = "usuario_pelicula_pendiente"),
        inverseJoinColumns = @JoinColumn(name = "pelicula_pendiente_usuario")
    )
    private List<Pelicula> peliculasPendientes = new ArrayList<Pelicula>();

    public Usuario() {
    }

    public Usuario(int id, String usuario, String contrasenna) {
        this.id = id;
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }

    public Usuario(String usuario, String contrasenna) {
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setContrasenna(String contrasenna) {
        this.contrasenna = contrasenna;
    }

    public int getId() {
        return this.id;
    }

    public String getUsuario() {
        return this.usuario;
    }

    public String getContrasenna() {
        return this.contrasenna;
    }

    public List<Pelicula> getPeliculasVistas() {
        return this.peliculasVistas;
    }

    public List<Pelicula> getPeliculasPendientes() {
        return this.peliculasPendientes;
    }

    public void setPeliculasVistas(List<Pelicula> peliculasVistas) {
        this.peliculasVistas = peliculasVistas;
    }

    public void setPeliculasPendientes(List<Pelicula> peliculasPendientes) {
        this.peliculasPendientes = peliculasPendientes;
    }
    
}
