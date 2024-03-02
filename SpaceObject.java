import java.awt.Color;
import java.awt.Graphics;

public class SpaceObject {
    
    public String name; //example: Earth
    public double mass; //example: 5.972e24
    public int xCoordinate;
    public int yCoordinate;
    public Color color; //example: new Color(0, 0, 255)
    public int radius;


    public SpaceObject(String name, double mass, Color color, int xCoordinate, int yCoordinate, int radius)
    {
        this.name = name;
        this.mass = mass;
        this.color = color;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.radius = radius;
    }


    public String getName(){ return this.name; }
    public double getMass(){ return this.mass; }
    public Color getColor(){ return this.color; }
    public void setName(String name){ this.name = name; }
    public void setMass(double mass){ this.mass = mass; }
    public void setColor(Color color){ this.color = color; }
    public String toString(){return "Name: " + this.name + "\nMass: " + this.mass + "\nColor: " + this.color;}


    public void draw(Graphics g)
    {
        g.setColor(this.color);
        g.fillOval(this.xCoordinate - radius / 2, this.yCoordinate - radius / 2, radius, radius);        
    }
}