// crear un arrelgo de N posiciones y llenarlo con los numeros de las susesion fibonnachi el arreglo no debe tener mas de 5 posiciones maximo 5 posiciones
import java.util.Scanner; // Importar la clase Scanner del paquete java.util

public class Trabajo3 { // Declarar una clase pública llamada Fibonacci    


    public static void main(String[] args) { // Declarar un método público y estático llamado main, que es el punto de entrada del programa
        Scanner input = new Scanner(System.in); // Crear un nuevo objeto Scanner llamado input que lee la entrada del flujo de entrada estándar (System.in)

        int N = 0; // Inicializar la variable N a 0

        while (N <= 0 || N > 5) { // Iniciar un bucle while que se ejecutará mientras N sea menor o igual a 0 o mayor que 5
            try { // Iniciar un bloque try para capturar excepciones
                System.out.print("Ingrese el numero de posiciones para la secuencia de Fibonacci (maximo 5): "); // Imprimir un mensaje en la consola pidiendo al usuario que ingrese el número de posiciones para la secuencia de Fibonacci
                N = input.nextInt(); // Leer un número entero ingresado por el usuario y asignarlo a la variable N

                if (N <= 0 || N > 5) { // Si el número ingresado por el usuario es menor o igual a 0 o mayor que 5, lanzar una excepción
                    throw new Exception("Error: el numero de posiciones debe ser mayor que 0 y menor o igual a 5.");
                }
            } catch (Exception e) { // Capturar la excepción lanzada en caso de que el número ingresado por el usuario sea inválido
                System.out.println(e.getMessage()); // Imprimir el mensaje de error en la consola
                input.nextLine(); // Limpiar el búfer de entrada
            }
        }

        int[] fib = new int[N]; // Declarar un arreglo de enteros llamado fib con N elementos

        for (int i = 0; i < N; i++) { // Iniciar un bucle for que itera sobre los elementos del arreglo fib
            if (i == 0 || i == 1) { // Si el índice actual es 0 o 1, asignar el valor del índice actual al elemento actual del arreglo fib
                fib[i] = i;
            } else { // De lo contrario, asignar la suma de los dos elementos anteriores al elemento actual del arreglo fib
                fib[i] = fib[i-1] + fib[i-2];
            }
        }

        System.out.print("La secuencia de Fibonacci es: "); // Imprimir un mensaje en la consola indicando que se va a imprimir la secuencia de Fibonacci
        for (int i = 0; i < N; i++) { // Iniciar un bucle for que itera sobre los elementos del arreglo fib
            System.out.print(fib[i] + " ");
        }
    }
}