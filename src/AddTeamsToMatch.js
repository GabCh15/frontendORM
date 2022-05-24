import React from 'react'
import { addTeamsToMatch } from './services/sportsService'
export const AddTeamsToMatch = () => {
    return (
        <form
            className="d-flex flex-column justify-content-center"
            style={{ paddingLeft: '25%', paddingRight: '25%' }}
            onSubmit={async (e) => {
                e.preventDefault()
                const data = new FormData(e.target)
                console.log(
                    await addTeamsToMatch(
                        data.get('matchName'),
                        data.get('team1'),
                        data.get('team2')
                    )
                )
            }}
        >
            <div className="form-group">
                <label htmlFor="matchName">Match Name</label>
                <input
                    className="form-control"
                    id="matchName"
                    name="matchName"
                    placeholder="Enter the player name"
                />
                <label htmlFor="team1">Team 1</label>
                <input
                    className="form-control"
                    id="team1"
                    name="team1"
                    placeholder="Enter Team 1 name"
                />
                <label htmlFor="team2">Team 2</label>
                <input
                    className="form-control"
                    id="team2"
                    name="team2"
                    placeholder="Enter Team 2 name"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                style={{ paddingLeft: '25%', paddingRight: '25%' }}
            >
                Add Teams
            </button>
        </form>
    )
}
