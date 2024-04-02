package org.example;

import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Procesador {

    private static final Logger logger= LogManager.getLogger(Procesador.class);
    private Ventana ventana;

    public Procesador(Ventana ventana){
        this.ventana = ventana;
    }
    public void ordenarPalabrasPorVocal(File archivo){

        ArrayList<String> palabrasA= new ArrayList<>();
        ArrayList<String> palabrasE= new ArrayList<>();
        ArrayList<String> palabrasI= new ArrayList<>();
        ArrayList<String> palabrasO= new ArrayList<>();
        ArrayList<String> palabrasU= new ArrayList<>();
        logger.info("Se crearon las listas");

        try {
            BufferedReader reader = new BufferedReader(new FileReader(archivo));
            String linea;
            while((linea = reader.readLine())!= null){
                switch(linea.toLowerCase().charAt(0)){
                    case 'a':
                        palabrasA.add(linea);
                        break;
                    case 'e':
                        palabrasE.add(linea);
                        break;
                    case 'i':
                        palabrasI.add(linea);
                        break;
                    case 'o':
                        palabrasO.add(linea);
                        break;
                    case 'u':
                        palabrasU.add(linea);
                        break;
                }
            }
            logger.info("Se asignaron todas las palabras del archivo");
            reader.close();
            logger.info("Se cerro el reader");
        }
        catch(IOException e){
            e.printStackTrace();
            logger.error("Error de lectura:"+ e);
        }
        ventana.textoA.setText("");
        for(String palabra:palabrasA){
            ventana.textoA.append(palabra+"\n");
        }
        ventana.textoE.setText("");
        for(String palabra:palabrasE){
            ventana.textoE.append(palabra+"\n");
        }
        ventana.textoI.setText("");
        for(String palabra:palabrasI){
            ventana.textoI.append(palabra+"\n");
        }
        ventana.textoO.setText("");
        for(String palabra:palabrasO){
            ventana.textoO.append(palabra+"\n");
        }
        ventana.textoU.setText("");
        for(String palabra:palabrasU){
            ventana.textoU.append(palabra+"\n");
        }
        logger.info("Se escribieron todas las palabras del archivo");

    }

    public boolean compararPalabra(String palabra1,String palabra2) {
        int minimo = Math.min(palabra1.length(), palabra2.length());
        String p1 = palabra1.toLowerCase();
        String p2 = palabra2.toLowerCase();

        for (int i = 0; i < minimo; i++){
            if (p1.charAt(i) < p2.charAt(i)) return true;
            else if (p1.charAt(i) > p2.charAt(i)) return false;
        }

        if (p1.length() < p2.length()) return true;
        else return false;
    }

    public void ordenarLista(ArrayList<String> lista){
        boolean fin= false;
        while(fin==false){
            fin=true;
            for(int i = 0; i < lista.size()-1; i++) {
                int j = i + 1;
                if (compararPalabra(lista.get(i), lista.get(j)) == false) {
                    String aux = lista.get(i);
                    lista.set(i, lista.get(j));
                    lista.set(j, aux);
                    fin=false;
                }
            }
        }
    }

    public void reordenarLista(JTextArea textArea){
        String[] lista= textArea.getText().split("\n");
        ArrayList<String> arrayList = new ArrayList<>();
        for(String palabra: lista){
            arrayList.add(palabra);
        }
        ordenarLista(arrayList);
        textArea.setText("");
        for (String palabra: arrayList){
            textArea.append(palabra+"\n");
        }
    }





}
