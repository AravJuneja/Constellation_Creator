import javax.swing.JPanel;
import javax.swing.JFrame;
import java.awt.Graphics2D;
import java.awt.Graphics;
import java.awt.Color;
import javax.swing.JWindow;
import javax.swing.JLabel;
import java.util.ArrayList;
import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.awt.image.BufferedImage;

public class SpaceComponent extends JPanel
{
    private JPanel gamePanel;   
     
    
    
    public SpaceComponent(){this.gamePanel = new JPanel();}

    public void addPanelToFrame(JFrame frame){frame.add(this);}    
    
    @Override
    protected void paintComponent(Graphics g)
    {
        super.paintComponent(g);
    
        // Set the background color to black using RGB values
        g.setColor(new Color(0, 0, 0)); // RGB for black
        g.fillRect(0, 0, getWidth(), getHeight());

        for (int y = 0; y < getHeight(); y += 50) {
            g.setColor(new Color(255, 255, 255)); // RGB for white
            g.drawLine(0, y, getWidth(), y);
        }
        for (int x = 0; x < getWidth(); x += 50) {
            g.setColor(new Color(255, 255, 255)); // RGB for white
            g.drawLine(x, 0, x, getHeight());
        }

        
        SpaceObject earth = new SpaceObject("Earth", 5.972e24, new Color(0, 0, 255), 350, 400, 20);
        earth.draw(g);

        SpaceObject sun = new SpaceObject("Sun", 1.989e30, new Color(255, 255, 0), 400, 400, 50);
        sun.draw(g);

        
        
        

    }
    
}
