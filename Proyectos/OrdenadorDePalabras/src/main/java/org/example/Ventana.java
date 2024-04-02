package org.example;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.*;
import java.io.File;
import javax.swing.filechooser.FileNameExtensionFilter;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
public class Ventana extends JFrame{

    private static final Logger logger= LogManager.getLogger(Ventana.class);

    private JButton botonLeer;
    private JButton botonOrdenar;
    private JButton botonSalir;

    public JTextArea textoA;
    public JTextArea textoE;
    public JTextArea textoI;
    public JTextArea textoO;
    public JTextArea textoU;

    public JScrollPane scrollA;
    public JScrollPane scrollE;
    public JScrollPane scrollI;
    public JScrollPane scrollO;
    public JScrollPane scrollU;

    private Procesador procesador;

    public Ventana(){

        setSize(1000,700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Ordenamiento palabras");
        setResizable(false);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());
        setBackground(Color.GRAY);
        procesador = new Procesador(this);


        //PANEL CENTRAL

        JPanel panelCentral = new JPanel();
        panelCentral.setVisible(true);
        panelCentral.setLayout(new FlowLayout(FlowLayout.CENTER,10,5));

        textoA= new JTextArea();
        textoA.setText("Texto vacio");
        scrollA = new JScrollPane(textoA,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollA.setPreferredSize(new Dimension(150, 300));
        panelCentral.add(scrollA);

         textoE= new JTextArea();
        textoE.setText("Texto vacio");
        scrollE = new JScrollPane(textoE,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollE.setPreferredSize(new Dimension(150, 300));
        panelCentral.add(scrollE);

         textoI= new JTextArea();
        textoI.setText("Texto vacio");
        scrollI = new JScrollPane(textoI,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollI.setPreferredSize(new Dimension(150, 300));
        panelCentral.add(scrollI);

         textoO= new JTextArea();
        textoO.setText("Texto vacio");
        scrollO = new JScrollPane(textoO,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollO.setPreferredSize(new Dimension(150, 300));
        panelCentral.add(scrollO);

         textoU= new JTextArea();
        textoU.setText("Texto vacio");
        scrollU = new JScrollPane(textoU,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollU.setPreferredSize(new Dimension(150, 300));
        panelCentral.add(scrollU);
        
        add(panelCentral,BorderLayout.CENTER);
        
        

        //PANEL DE ARRIBA

        JPanel panelArriba = new JPanel(new FlowLayout(FlowLayout.LEFT));
        panelArriba.setVisible(true);
        panelArriba.setPreferredSize(new Dimension(panelArriba.getPreferredSize().width,100));


        botonLeer = new JButton("Leer");
        botonLeer.setBounds(90,100,150,30);

        botonLeer.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JFileChooser fileChooser= new JFileChooser();
                fileChooser.setDialogTitle("Seleccionar archivo de texto");
                fileChooser.setFileFilter(new FileNameExtensionFilter("Archivos de texto (*.txt)", "txt"));
                int permiso = fileChooser.showOpenDialog(null);
                if(permiso == JFileChooser.APPROVE_OPTION){
                    File archivo = fileChooser.getSelectedFile();


                    procesador.ordenarPalabrasPorVocal(archivo);
                }
            }
        });
        panelArriba.add(botonLeer);


        botonSalir = new JButton("Salir");
        botonSalir.setBounds(90,150,150,30);
        botonSalir.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
        panelArriba.add(botonSalir);



        botonOrdenar = new JButton("Ordenar");
        botonOrdenar.setBounds(400,100,200,50);
        botonOrdenar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                procesador.reordenarLista(textoA);
                logger.info("Se reordenó la lista A");
                procesador.reordenarLista(textoE);
                logger.info("Se reordenó la lista E");
                procesador.reordenarLista(textoI);
                logger.info("Se reordenó la lista I");
                procesador.reordenarLista(textoO);
                logger.info("Se reordenó la lista O");
                procesador.reordenarLista(textoU);
                logger.info("Se reordenó la lista U");

            }
        });
        panelArriba.add(botonOrdenar);

        add(panelArriba,BorderLayout.NORTH);

        //PANEL ABAJO

        JPanel panelAbajo = new JPanel(new FlowLayout(FlowLayout.CENTER,10,5));
        JLabel lblA= new JLabel("A");
        JLabel lblE= new JLabel("E");
        JLabel lblI= new JLabel("I");
        JLabel lblO= new JLabel("O");
        JLabel lblU= new JLabel("U");

        lblA.setPreferredSize(new Dimension(150,100));
        lblE.setPreferredSize(new Dimension(150,100));
        lblI.setPreferredSize(new Dimension(150,100));
        lblO.setPreferredSize(new Dimension(150,100));
        lblU.setPreferredSize(new Dimension(150,100));

        lblA.setHorizontalAlignment(SwingConstants.CENTER);
        lblE.setHorizontalAlignment(SwingConstants.CENTER);
        lblI.setHorizontalAlignment(SwingConstants.CENTER);
        lblO.setHorizontalAlignment(SwingConstants.CENTER);
        lblU.setHorizontalAlignment(SwingConstants.CENTER);

        panelAbajo.add(lblA);
        panelAbajo.add(lblE);
        panelAbajo.add(lblI);
        panelAbajo.add(lblO);
        panelAbajo.add(lblU);

        add(panelAbajo,BorderLayout.SOUTH);




    }

}
