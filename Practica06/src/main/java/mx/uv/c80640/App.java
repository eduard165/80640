package mx.uv.c80640;
import static spark.Spark.*;

import com.google.gson.JsonObject;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ){
        System.out.println( "Hello World!" );
        get("/hello", (req, res) -> "Hello World");
        get("/eduardo", (req, res) -> "Hello Eduardo");
        get("/alex", (req, res) -> "Hello Alex");
        get("/brandon", (req, res) -> "Hello Brandon");
        get("/", (req, res) -> "<h1> Bienvenido</h1><img src='https://w0.peakpx.com/wallpaper/913/564/HD-wallpaper-ryomen-sukuna-jujutsu-kaisen-sukuna.jpg'>");
        get("/", (req, res) -> "hola");
// error cores, el sitio web necesita estar habilitado para poder dar los permisos, algo asi...
        post("/",(req,res)-> {
            System.out.println();
            System.out.println();
            res.status(200);
            JsonObject oRespuesta = new JsonObject();
            oRespuesta.addProperty("msj", "hola");
            oRespuesta.addProperty("email","");
            return oRespuesta;

        });

    
    
    }
}
