// pomocná funkcia: náhodný prvok z poľa
function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// pomocná funkcia: náhodné celé číslo v intervale [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pomocná funkcia: náhodný dátum narodenia podľa vekového rozmedzia
function generateRandomBirthdate(minAge, maxAge) {
  const nowMs = Date.now();
  const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

  // najstarší povolený dátum (maxAge rokov)
  const oldestMs = nowMs - maxAge * MS_IN_YEAR;

  // najmladší povolený dátum (minAge rokov)
  const youngestMs = nowMs - minAge * MS_IN_YEAR;

  // náhodný čas v tomto intervale
  const randomMs = getRandomInt(Math.floor(oldestMs), Math.floor(youngestMs));

  // vytvor dátum
  const date = new Date(randomMs);

  // nastav na polnoc (aby bol pekný ISO formát)
  date.setUTCHours(0, 0, 0, 0);

  return date.toISOString(); // YYYY-MM-DDTHH:mm:ss.sssZ
}
export function main(dtoIn) {
  // 1. načítaj vstup
  const count = dtoIn.count;
  const minAge = dtoIn.age.min;
  const maxAge = dtoIn.age.max;

  // 2. zoznam krstných mien
  const firstNames = [
    "Teresa",
    "Rosalinda",
    "Marimar",
    "Esmeralda",
    "Luciana",
    "Fernanda",
    "Camila",
    "Valentina",
    "Renata",
    "Isabela",
    "Paulina",
    "Jimena",
    "Gabriela",
    "Mariana",
    "Julieta",
    "Catalina",
    "Alejandra",
    "Daniela",
    "Sofía",
    "Verónica",
    "Bianca",
    "Regina",
    "Lourdes",
    "Natalia",
    "Patricia",
    "Alejandro",
    "Fernando",
    "Armando",
    "Ricardo",
    "Eduardo",
    "Sebastián",
    "Diego",
    "Mauricio",
    "Bruno",
    "Carlos",
    "Andrés",
    "Esteban",
    "Santiago",
    "León",
    "Julio",
    "Rodrigo",
    "Rafael",
    "Cristóbal",
    "Emilio",
    "Marco",
    "Joaquín",
    "Mateo",
    "Manuel",
    "Héctor",
    "Álvaro"
  ];

  // 3. zoznam priezvisk
  const lastNames = [
    "Mendoza",
    "Chávez",
    "Salazar",
    "Montenegro",
    "López",
    "Hernández",
    "García",
    "Villalba",
    "Valencia",
    "Rojas",
    "Castillo",
    "Benavides",
    "Torres",
    "Rivera",
    "Flores",
    "Márquez",
    "Carrillo",
    "Duarte",
    "Castañeda",
    "Gutiérrez",
    "Herrera",
    "Camacho",
    "Álvarez",
    "Navarro",
    "Morales",
    "Cabrera",
    "Zamora",
    "Ponce",
    "Aguilar",
    "Rosales",
    "Peña",
    "Solís",
    "Cortés",
    "Ramírez",
    "Fajardo",
    "Domínguez",
    "Bravo",
    "Villaseñor",
    "Ochoa",
    "Fuentes",
    "Barrios",
    "Salinas",
    "Cárdenas",
    "Vergara",
    "Arango",
    "Paredes",
    "Beltrán",
    "Ledesma",
    "Escobar",
    "Montoya"
  ];

  // 4. možné úväzky
  const workloads = [10, 20, 30, 40];

  // 5. prázdne pole zamestnancov
  const employees = [];

// generovanie zamestnancov v cykle (2. iterácia algoritmu)
for (let i = 0; i < count; i++) {

    // 2.1 – výber krstného mena
    const firstName = getRandomElement(firstNames);

    // 2.2 – výber priezviska
    const lastName = getRandomElement(lastNames);

    // 2.3 – výber pohlavia
    const gender = Math.random() < 0.5 ? "male" : "female";

    // 2.4 – generovanie dátumu narodenia
    const birthdate = generateRandomBirthdate(minAge, maxAge);

    // 2.5 – výber pracovného úväzku
    const workload = getRandomElement(workloads);

    // 2.6 – vytvorenie objektu zamestnanca
    const employee = {
      gender: gender,
      birthdate: birthdate,
      name: firstName,
      surname: lastName,
      workload: workload
    };

    // 2.7 – pridanie zamestnanca do poľa
    employees.push(employee);
  }

  // 6. vráť výsledok
  return employees;
}

