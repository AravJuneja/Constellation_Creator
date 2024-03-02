import javax.swing.JFrame;
import java.awt.Component; 

public class Viewer {
    public static void main(String[] args) {
        JFrame frame = new JFrame("SpaceSimulator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 800);
        frame.setResizable(false); // Set frame to not resizable
        SpaceComponent component = new SpaceComponent();
        component.addPanelToFrame(frame);
        frame.setVisible(true);

        // Refresh the frame at 60 fps
        while (true) {
            long startTime = System.nanoTime();

            // Your code to update the frame goes here

            long endTime = System.nanoTime();
            long elapsedTime = endTime - startTime;
            long targetTime = 1000000000 / 60; // 60 fps

            if (elapsedTime < targetTime) {
                try {
                    Thread.sleep((targetTime - elapsedTime) / 1000000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
} 