const repo = {
  name: "LaunchX",
  author: "Cristhian Rosales",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo() + "\n")
 


const issue = {
  title: "Semana 2 dudas",
  repositoryNA: "Mission 2",
  status: "Actvo",
  numberOfComments: 100,
  labels: 199,
  author: "Cristhian",
  dateCreated: 16 - 04 - 2022,
  lastUpdate: 10,
  getTitleAndAuthor: function () {
    return this.title + "\t" + this.author
  },
  getGeneralInfo: function () {
    return `This Issue ${this.title} from ${this.repositoryNA} created by ${this.author}`
  }
}

console.log("Referencia:" + issue.repositoryNA)
console.log("Titulo y Autor: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo() + "\n")





const pullRequest = {
  title: "Solicitud Actualizacion",
  branchName: "Semana2",
  dateCreated: "16-04-2022",
  status: "Open",
  repositoryNA: 199,
  getStatus: function () {
    return this.status
  },
  getTitleAndAuthor: function () {
    return `This Pull Request ${this.title} from ${this.branchName}`
  }
}
console.log(pullRequest.getStatus())
console.log("Titulo y Autor: " + pullRequest.getTitleAndAuthor() + "\n")




const user = {
  plataform: "twitter",
  username: "Cristhian Rosales",
  user: "@CristRos",
  bio: "Ingeniero de Software",
  age: 22,
  getDatos: function() {
    return`
    ${this.plataform}
    username: ${this.username} 
    user: ${this.user}
    Biography: ${this.bio}
    Age: ${this.age}`
  }
}
const trendicTopic = {
  tendencias: "Tendencia en Mexico",
  author: "Univeresal",
  hashtag: "#politica",
  description: "La política​ es el conjunto de actividades que se asocian con la toma de decisiones en grupo.",

  getTrend: function () {
    return `
    ${this.tendencias}
    ${this.author}
    ${this.hashtag}
    ${this.description}`
  }
}
const hashtag = {
  author: "Univeresal",
  hashtag: "#politica",
  description: "La política​ es el conjunto de actividades que se asocian con la toma de decisiones en grupo.",

  getHastag: function () {
    return `
    ${this.author}
    ${this.hashtag}
    ${this.description}`
  }
}
console.log(user.getDatos()+ "\n")
console.log(trendicTopic.getTrend()+ "\n")
console.log(hashtag.getHastag())
