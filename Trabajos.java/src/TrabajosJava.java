// realizar un programa que realize una matriz cuadrada que tanto la fila como la columna esten en el rango 
//de 4 a 12 llenarla con numeros impares 

import java.util.Scanner; // Import the Scanner class from the java.util package

public class TrabajosJava { // Declare a public class named TrabajosJava

    public static void main(String[] args) { // Declare a public static method named main, which is the entry point of the program
        Scanner input = new Scanner(System.in); // Create a new Scanner object named input that reads input from the standard input stream (System.in)

        int n = 0; // Declare an integer variable n and initialize it to 0

        while (n < 4 || n > 12) { // Begin a while loop that will continue to execute as long as n is less than 4 or greater than 12
            System.out.print("Ingrese el numero de filas y columnas de la matriz que sean mayor o igual a 4 y menor o igual a 12: "); // Print a message to the console asking the user to input the number of rows and columns for the matrix
            n = input.nextInt(); // Read an integer input from the user and assign it to the variable n

            if (n < 4 || n > 12) { // Begin an if statement that checks if n is less than 4 or greater than 12
                System.out.println("Numero invalido, ingrese un valor permitido: "); // Print an error message to the console if the user input is invalid
            }
        }

        int[][] matrix = new int[n][n]; // Declare a 2D integer array named matrix with n rows and n columns

        int num = 1; // Declare an integer variable num and initialize it to 1

        for (int i = 0; i < n; i++) { // Begin a for loop that iterates over the rows of the matrix
            for (int j = 0; j < n; j++) { // Begin a nested for loop that iterates over the columns of the matrix
                matrix[i][j] = num; // Assign the value of num to the current element of the matrix
                num += 2; // Increment the value of num by 2
            }
        }

        System.out.println("La matriz es:"); // Print a message to the console indicating that the matrix is about to be printed

        for (int i = 0; i < n; i++) { // Begin a for loop that iterates over the rows of the matrix
            for (int j = 0; j < n; j++) { // Begin a nested for loop that iterates over the columns of the matrix
                System.out.print(matrix[i][j] + "|"); // Print the current element of the matrix followed by a vertical bar (|) to the console
            }
            System.out.println(); // Print a newline character to the console to move to the next row of the matrix
        }
    }
}
