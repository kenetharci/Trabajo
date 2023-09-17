// crear un arreglo con N cantidad de notas sacar el promedio de las notas imprimir el arreglo y el promedio y el ususaruio es quien dijita los valores
import java.util.Scanner; // Importar la clase Scanner del paquete java.util

public class Trabajo2 { // Declarar una clase pública llamada Trabajo2

    public static void main(String[] args) { // Declarar un método público y estático llamado main, que es el punto de entrada del programa
        Scanner input = new Scanner(System.in); // Crear un nuevo objeto Scanner llamado input que lee la entrada del flujo de entrada estándar (System.in)

        System.out.print("Ingrese el numero de notas que quiere sacar el promedio: "); // Imprimir un mensaje en la consola pidiendo al usuario que ingrese el número de notas para calcular el promedio
        int N = input.nextInt(); // Leer un número entero ingresado por el usuario y asignarlo a la variable N

        double[] grades = new double[N]; // Declarar un arreglo de dobles llamado grades con N elementos

        for (int i = 0; i < N; i++) { // Iniciar un bucle for que itera sobre los elementos del arreglo grades
            System.out.print("  Ingrese la nota " + (i+1) + ": "); // Imprimir un mensaje en la consola pidiendo al usuario que ingrese la nota actual
            grades[i] = input.nextDouble(); // Leer un número de punto flotante ingresado por el usuario y asignarlo al elemento actual del arreglo grades
        }

        double sum = 0; // Declarar una variable de doble precisión llamada sum y asignarle el valor 0
        for (int i = 0; i < N; i++) { // Iniciar un bucle for que itera sobre los elementos del arreglo grades
            sum += grades[i]; // Agregar el valor del elemento actual del arreglo grades a la variable sum
        }
        double average = sum / N; // Calcular el promedio de las notas dividiendo la suma de las notas por el número de notas

        System.out.print("Las notas son: "); // Imprimir un mensaje en la consola indicando que se van a imprimir las notas
        for (int i = 0; i < N; i++) { // Iniciar un bucle for que itera sobre los elementos del arreglo grades
            System.out.print(grades[i] + " "); // Imprimir el valor del elemento actual del arreglo grades seguido de un espacio en blanco
        }
        System.out.println("\nPromedio: " + average); // Imprimir el promedio de las notas en la consola
    }
}
