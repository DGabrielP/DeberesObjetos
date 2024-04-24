export const colorCode = (color: string): number => {
    const colorMap: { [key: string]: number } = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9
    };
  
    const lowerCaseColor = color.toLowerCase();
  
    const colorValue = colorMap[lowerCaseColor];
  
    if (colorValue === undefined) {
      throw new Error(`Color '${color}' not found`);
    }
  
    return colorValue;
  }
  
  export const COLORS: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'green', 'blue', 'violet', 'grey', 'white'
  ];
  