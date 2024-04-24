enum Color {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9
  }
  
  function getColorFromString(color: string): Color {
    switch (color) {
      case 'black': return Color.black;
      case 'brown': return Color.brown;
      case 'red': return Color.red;
      case 'orange': return Color.orange;
      case 'yellow': return Color.yellow;
      case 'green': return Color.green;
      case 'blue': return Color.blue;
      case 'violet': return Color.violet;
      case 'grey': return Color.grey;
      case 'white': return Color.white;
      default: throw new Error(`Color '${color}' not found`);
    }
  }
  
  export function decodedValue(colors: string[]): number {
  
    const colorValues: Color[] = colors.map(color => getColorFromString(color));
  
    const colorList = colorValues.slice(0, 2);
  
    const colorValue = colorList.reduce((acc, color) => {
      return acc * 10 + color; 
    }, 0);
  
    return colorValue;
  }
  console.log(decodedValue(['brown', 'black'])); 
  