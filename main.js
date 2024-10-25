// Single Responsibility Principle (SRP): Setiap class hanya menangani satu 
// tanggung jawab tertentu.

class Developer {
  constructor(position) {
    this.position = position;
  }

  createDb() {
    if (this.position === "Backend") {
        return `creating database`;
      } else if (this.position === "Frontend") {
        return `fetching data`;
      }
  }

  createUI() {
    if (this.position === "UI/UX") {
      return `creating user interface`;
    } else if (this.position === "Frontend") {
      return `slicing design & making responsive web`;
    }
  }

  createDesign() {
    return `creating design web`;
  }

  getPosition() {
    return `${this.position} Developer`;
  }
}

//Inheritance//Open/Closed Principle (OCP): Kelas harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi. 
class BackendDeveloper extends Developer {
  constructor() {
    super("Backend");
    this.tools = "Laravel"; //modif from class Dveloper
  }

  createApi() {
    return `creating API`;
  }
}

class FrontendDeveloper extends Developer {
  constructor() {
    super("Frontend");
    this.tools = "ReactJS";
  }

  createAnimation() {
    return `creating animation`;
  }
}

class UiUxDeveloper extends Developer {
  constructor() {
    super("UI/UX");
    this.tools = "Figma";
  }
}

// Interface Segregation Principle (ISP): Jika ada fitur khusus, buat interface 
// yang spesifik dan hanya diterapkan pada class yang membutuhkannya.
class Jobdesc extends Developer {
  constructor(name, role) {
    super();
    this.name = name;
    this.role = role;
  }

// Polimorfisme// Liskov Substitution Principle (LSP): Kelas turunan harus dapat 
// menggantikan kelas induknya tanpa memengaruhi fungsionalitas.
  display() {
    if (this.role === "Backend") {
      const be = new BackendDeveloper();
      console.log(
        `${this.name} (${be.getPosition()})\n` +
          `Job Description:\n` +
          `- ${be.createDb()}\n` +
          `- ${be.createApi()}\n` +
          `Tools: ${be.tools}`
      );
    } else if (this.role === "Frontend") {
      const fe = new FrontendDeveloper();
      console.log(
        `${this.name} (${fe.getPosition()})\n` +
          `Job Description:\n` +
          `- ${fe.createUI()}\n` +
          `- ${fe.createAnimation()}\n` +
          `Tools: ${fe.tools}`
      );
    } else if (this.role === "UI/UX") {
      const uiux = new UiUxDeveloper();
      console.log(
        `${this.name} (${uiux.getPosition()})\n` +
          `Job Description:\n` +
          `- ${uiux.createDesign()}\n` +
          `Tools: ${uiux.tools}`
      );
    }
  }
}

// const jobdesc = new Jobdesc("Budi", "Frontend");
// jobdesc.display();

const fullTeam = [new Jobdesc("Budi", "Frontend"), new Jobdesc("Anton", "Backend"), new Jobdesc("Lisa", "UI/UX")]

// Dependency Inversion Principle (DIP): Class tidak boleh bergantung 
// langsung pada class lain
class Team {
    constructor(member) {
        this.member = member;
    }

    displayTeam(){
        this.member.map(member => {
            member.display()
        })
    }
}

const team = new Team(fullTeam)
team.displayTeam()