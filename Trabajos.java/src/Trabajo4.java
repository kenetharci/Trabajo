//  crear una matriz cuadrada con dimensiones mayores a tres dibujar una X

import java.util.Scanner; // Importar la clase Scanner del paquete java.util

public class Trabajo4 { // Declarar una clase pública llamada MatrizX

    public static void main(String[] args) { // Declarar un método público y estático llamado main, que es el punto de entrada del programa
        Scanner input = new Scanner(System.in); // Crear un nuevo objeto Scanner llamado input que lee la entrada del flujo de entrada estándar (System.in)

        int n = 0; // Inicializar la variable n a 0

        while (n <= 3) { // Iniciar un bucle while que se ejecutará mientras n sea menor o igual a 3
            System.out.print("Ingrese el tamaño de la matriz (mayor que 3): "); // Imprimir un mensaje en la consola pidiendo al usuario que ingrese el tamaño de la matriz
            n = input.nextInt(); // Leer un número entero ingresado por el usuario y asignarlo a la variable n
        }

        int[][] matriz = new int[n][n]; // Declarar un arreglo bidimensional de enteros llamado matriz con n filas y n columnas

        for (int i = 0; i < n; i++) { // Iniciar un bucle for que itera sobre las filas de la matriz
            for (int j = 0; j < n; j++) { // Iniciar un bucle for que itera sobre las columnas de la matriz
                if (i == j || i == n - j - 1) { // Si el índice actual de la fila es igual al índice actual de la columna o al índice de la columna opuesta, asignar el valor 1 al elemento actual de la matriz
                    matriz[i][j] = 1;
                } else { // De lo contrario, asignar el valor 0 al elemento actual de la matriz
                    matriz[i][j] = 0;
                }
            }
        }

        System.out.println("La matriz es:"); // Imprimir un mensaje en la consola indicando que se va a imprimir la matriz
        for (int i = 0; i < n; i++) { // Iniciar un bucle for que itera sobre las filas de la matriz
            for (int j = 0; j < n; j++) { // Iniciar un bucle for que itera sobre las columnas de la matriz
                System.out.print(matriz[i][j] + " "); // Imprimir el valor del elemento actual de la matriz seguido de un espacio en blanco
            }
            System.out.println(); // Imprimir una nueva línea en la consola
        }
    }
}