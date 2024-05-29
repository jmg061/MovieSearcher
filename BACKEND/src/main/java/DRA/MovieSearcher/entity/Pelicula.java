package dra.moviesearcher.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "pelicula")
public class Pelicula {

    @Id
    private int id;
    @NotBlank
    private String titulo;
    @NotBlank
    private String imagen;
    @NotBlank
    @Column(length = 1000)
    private String descripcion;
    @NotBlank
    private String fecha;
    @NotBlank
    private String originaltitle;

    @ManyToMany(mappedBy = "peliculasVistas")
    private List<Usuario> vistas = new ArrayList<Usuario>();

    @ManyToMany(mappedBy = "peliculasPendientes")
    private List<Usuario> pendientes = new ArrayList<Usuario>();

    public Pelicula() {
    }

    public Pelicula(int id, String titulo, String imagen, String descripcion, String fecha, String originaltitle) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.originaltitle = originaltitle;
    }

    public Pelicula(String titulo, String imagen, String descripcion, String fecha, String originaltitle) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.originaltitle = originaltitle;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public void setOriginaltitle(String originaltitle) {
        this.originaltitle = originaltitle;
    }

    public int getId() {
        return this.id;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public String getImagen() {
        return this.imagen;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public String getFecha() {
        return this.fecha;
    }

    public String getOriginaltitle() {
        return this.originaltitle;
    }

    public List<Usuario> getVistas() {
        return this.vistas;
    }

    public List<Usuario> getPendientes() {
        return this.pendientes;
    }

    public void setVistas(List<Usuario> vistas) {
        this.vistas = vistas;
    }

    public void setPendientes(List<Usuario> pendientes) {
        this.pendientes = pendientes;
    }
    
}
