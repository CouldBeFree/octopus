import { observable, computed, action, makeObservable } from "mobx"

interface Project {
	name: String,
	id: Number
}

class Projects {
	projects: Project[] = []
	
	setProject(project: Project) {
		this.projects.push(project)
	}
	
	get allProjects() {
		return this.projects
	}
}

const projectsStore = new Projects();

makeObservable(projectsStore, {
	projects: observable,
	allProjects: computed,
	setProject: action.bound
})

export default projectsStore
