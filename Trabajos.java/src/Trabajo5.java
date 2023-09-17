// crear una matriz con posiciones mayores a 4 y cuadrada dibujar un cuadrado

import java.util.Scanner; // Importar la clase Scanner del paquete java.util

public class Trabajo5 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = 0;
        while (n < 4) { // Mientras el número ingresado sea menor a 4
            System.out.print("Ingrese el tamaño de la matriz (mayor a 4): ");
            n = input.nextInt();
            if (n < 4) { // Si el número ingresado es menor a 4
                System.out.println("El número ingresado es inválido. Por favor, ingrese un número mayor a 4.");
            }
        }

        // Crear una matriz cuadrada de tamaño n x n
        int[][] matriz = new int[n][n];

        // Llenar la matriz con 1 en los bordes y 0 en el interior
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) { // Si estamos en el borde de la matriz
                    matriz[i][j] = 1; // Rellenar los bordes con 1
                } else {
                    matriz[i][j] = 0; // Rellenar el interior con 0
                }
            }
        }

        // Imprimir la matriz
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}