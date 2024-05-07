package dra.moviesearcher.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import dra.moviesearcher.entity.Usuario;
import dra.moviesearcher.repository.UsuarioRepository;
import dra.moviesearcher.scrapping.Scrapping;
import dra.moviesearcher.scrapping.ScrappingService;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/data")
public class DBController {

    @Autowired
    private ScrappingService scrappingService;

    private final UsuarioRepository usuarioRepository;

    public DBController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping("/AllUsers")
    public ResponseEntity<List<Usuario>> getAllUsers() {

        List<Usuario> usuario = usuarioRepository.findAll();

        if (usuario == null)
            return ResponseEntity.noContent().build();

        return ResponseEntity.ok().body(usuario);
    }

    @PostMapping("registro")
    public ResponseEntity<Usuario> postMethodName(@RequestBody Usuario usuario) {

        Usuario user = usuarioRepository.findByUsuario(usuario.getUsuario());

        if (user != null)
            return ResponseEntity.ok().body(new Usuario(-1, null, null)); // Usuario ya existe

        user = usuarioRepository.save(usuario);

        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/user={user}&pass={pass}")
    public ResponseEntity<Usuario> getMethodName(@PathVariable String user, @PathVariable String pass) {

        Usuario usuario = usuarioRepository.findByUsuarioAndContrasenna(user, pass);

        if (usuario == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok().body(usuario);
    }

    @PutMapping("updatepassword")
    public ResponseEntity<Usuario> putMethodName(@RequestBody Usuario user) {

        Usuario usuario = usuarioRepository.save(user);

        return ResponseEntity.ok().body(usuario);
    }

    @GetMapping("scrapping={id}")
    public ResponseEntity<Scrapping> getScrapping(@PathVariable int id) {

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://api.themoviedb.org/3/movie/"+ id +"?language=en-US")
                .get()
                .addHeader("accept", "application/json")
                .addHeader("Authorization",
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTk3ZjQ5ODJjM2ViNmNmM2I3NDc4MmY5OWJmZmUzOSIsInN1YiI6IjY2MGM3MjU3ZTAzOWYxMDE2MmU1NGZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4AkiEWRf-zTNEQsA0rbs-1BD2wOeMf4Xjw54PmDcGE")
                .build();

        try {
            Response response = client.newCall(request).execute();

            ObjectMapper objectMapper = new ObjectMapper();

            JsonNode jsonNode = objectMapper.readTree(response.body().string());

            //System.out.println(response.body().string());

            String title = jsonNode.get("title").asText();

            title = title.replace(" ", "_");
            title = title.replace(":", "");
            title = title.replace("'", "");
            title = title.replace(".", "");
            title = title.toLowerCase();
            //System.out.println(title);
            return new ResponseEntity<Scrapping>(scrappingService.getScrapping("https://www.rottentomatoes.com/m/" + title), HttpStatus.OK);
            
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<Scrapping>(HttpStatus.NOT_FOUND);
    }

}
