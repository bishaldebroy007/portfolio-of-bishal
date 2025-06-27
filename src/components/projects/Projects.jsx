import React, { useState } from 'react';
import projectsData from './projects-data.json'; // Import the JSON file

const Projects = () => {
    const [projects] = useState(projectsData); // Use imported data as state

    if (projects.length === 0) return <div className="text-center py-8">No projects found</div>;

    return (
        <div>
            <div className='flex justify-center text-5xl font-semibold mt-10 mb-3'>
                <h1>Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-4 m-20 hover:opacity-500 transition-opacity duration-300">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="card bg-base-100 image-full w-150 transition-shadow"
                    >
                        <figure>
                            <img
                                src={project.project_image}
                                alt={project.project_title}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{project.project_title}</h2>
                            <p>{project.project_details}</p>
                            <div className="card-actions justify-end mt-4">
                                <a
                                    href={project.project_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn text-white bg-green-700 hover:bg-green-200 hover:text-black  rounded-xl shadow-2xl"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;