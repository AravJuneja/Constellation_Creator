import pygame
import random

# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 500
SCREEN_HEIGHT = 500

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Function to generate random points
def generate_points(num_points):
    points = []
    for _ in range(num_points):
        x = random.randint(SCREEN_WIDTH/4, SCREEN_WIDTH-(SCREEN_WIDTH/4))
        y = random.randint(SCREEN_HEIGHT/4, SCREEN_HEIGHT-(SCREEN_HEIGHT/4))
        points.append((x, y))
    return points

# Main function
def main():
    # Set up the screen
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Random Points Generator")

    # Clock for controlling the frame rate
    clock = pygame.time.Clock()

    # Generate random points
    num_points = random.randint(3, 15)
    points = generate_points(num_points)

    # Main loop
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Clear the screen
        screen.fill(BLACK)

        # Draw points
        for point in points:
            pygame.draw.circle(screen, WHITE, point, 3)

        # Update the display
        pygame.display.flip()

        # Cap the frame rate
        clock.tick(60)

    # Quit Pygame
    pygame.quit()

if __name__ == "__main__":
    main()
