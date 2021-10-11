import { useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useStores } from "../hooks/use-stores";
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Grid from '@mui/material/Grid';
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Projects () {
	interface Project {
		name: String
	}
	
	const { projects } = useStores();
	const { setProject, allProjects } = projects;
	
	const [open, setOpen] = useState(false)
	const [projectName, setProjectName] = useState('')
	
	const onOpenModal = () => {
		setOpen(true)
	}
	
	const handleClose = () => {
		setOpen(false)
		setProjectName('')
	}
	
	const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setProjectName(ev.target.value)
	}
	
	const onCreateProject = () => {
		const project = {
			name: projectName,
			id: Math.floor(Math.random() * 1000)
		}
		
		setProject(project)
		setOpen(false)
	}
	
	return (
		<div>
			<Button
				variant="contained"
				disableElevation
				onClick={onOpenModal}
			>
				Create new project
			</Button>
			
			<Box sx={{ flexGrow: 1 }} mt={3}>
				<Grid container spacing={2}>
					{toJS(allProjects).map((item: Project, index) =>
						<Grid key={index} item xs={2}>
							<ProjectCard
								name={item.name}
							/>
						</Grid>)
					}
				</Grid>
			</Box>
			
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 300,
					bgcolor: 'background.paper',
					border: '2px solid #000',
					boxShadow: 24,
					p: 2,
					'& button': { mt: 2 }
				}}
				>
					<TextField onChange={onChange} label="Project name" />
					<Button
						disabled={!(!!projectName.length)}
						variant="contained"
						onClick={onCreateProject}
					>
						Save
					</Button>
				</Box>
			</Modal>
		</div>
	)
}

export default observer(Projects)
