import React from 'react'
import { addTeam } from './services/sportsService'
export const AddTeam = () => {
    return (
        <form
            className="d-flex flex-column justify-content-center"
            style={{ paddingLeft: '25%', paddingRight: '25%' }}
            onSubmit={async (e) => {
                e.preventDefault()
                const data = new FormData(e.target)
                console.log(await addTeam(data.get('teamName')))
            }}
        >
            <div className="form-group">
                <label htmlFor="teamName">Team Name</label>
                <input
                    className="form-control"
                    id="teamName"
                    name="teamName"
                    placeholder="Enter the team name"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                style={{ paddingLeft: '25%', paddingRight: '25%' }}
            >
                Add Team
            </button>
        </form>
    )
}
