package mx.uv;

import static spark.Spark.*;
import com.google.gson.Gson;


import java.util.HashMap;
import java.util.Map;

public class App 
{
    public static Gson gson= new Gson();
    //base de datos en memoria 
    public static Map <String, Usuario> usuarios = new HashMap<>();

    public static void main( String[] args )
    {
        port (80);
        Usuario u1 = new Usuario("1", "pablo", "1234");
        Usuario u2 = new Usuario("2", "ana", "7890");
         
        // meter al map

        usuarios.put(u1.getId(), u1);
        usuarios.put(u2.getId(), u2);


        before((req,res) -> res.type("application/json"));
        get("/usuario", (req,res)-> gson.toJson(u1));
        get("/usuarios", (req,res)-> gson.toJson(usuarios));

        post("/",(req,res)->{
            String formulDatos = req.body();
            Usuario u = gson.fromJson(formulDatos, Usuario.class);
            usuarios.put(u.getId(), u);
            return "Usuarios agregados";
        });

       
    }
}
