export function age(planet: string, seconds: number): number {
    const earthYearSec = 31557600;
    const orbitalPeriods: { [key: string]: number } = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    if (!(planet.toLowerCase() in orbitalPeriods)) {
        throw new Error('Invalid planet provided.');
    }

    const earthYears = seconds / earthYearSec;
    const ageOnPlanet = earthYears / orbitalPeriods[planet.toLowerCase()];

    return parseFloat(ageOnPlanet.toFixed(2));
}


